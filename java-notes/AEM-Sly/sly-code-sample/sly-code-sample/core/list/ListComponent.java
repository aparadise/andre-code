package com.sharefile.aem.core.components.list;

import static com.sharefile.aem.core.components.list.ListComponentConstants.Properties.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.ValueFormatException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.citrix.commons.sling.ServiceUser;
import com.citrix.commons.sling.SlingUtil;
import com.day.cq.commons.RangeIterator;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.sharefile.aem.core.models.ListItem;
import com.sharefile.aem.core.utils.SiteUtils;

/**
 * @author vishal.gupta@citrix.com
 */

@Model(adaptables = SlingHttpServletRequest.class)
public class ListComponent  {

    private static final Logger LOG = LoggerFactory.getLogger(ListComponent.class);

    @Inject
    private Resource resource;

    @Inject
    private Page currentPage;

    @Inject
    private ResourceResolverFactory resolverFactory;

    private ResourceResolver resourceResolver;

    private SlingUtil slingUtil;

    private TagManager tagManager;

    private SlingHttpServletRequest request;

    public ListComponent(SlingHttpServletRequest request) {
        this.request = request;
    }

    /**
     * @return Component's ValueMap.
     */
    public ValueMap getProperties() {
        return resource.getValueMap();
    }

    @SuppressWarnings("unused")
    private SlingHttpServletRequest getRequest() {
        return this.request;
    }

    public String getTemplatesScriptName() {
        return "templates.html";
    }

    public String getDisplayAs() {
        return getProperties().get(PROP_DISPLAY_AS, DEFAULT_DISPLAY_AS);
    }

    public String getColumns() {
        return getProperties().get(PROP_COLUMNS, DEFAULT_COLUMNS);
    }

    private String getLimit() {
        return getProperties().get(PROP_RESULTS_LIMIT, DEFAULT_LIMIT);
    }

    //----------------------------------
    // Main method return resource list
    //----------------------------------
    public List<ListItem> getList() {
        List<ListItem> list = null;

        if(getListFrom().equals(LIST_FROM_CHILDREN)) {
            list = getChildPages();
        }else if(getListFrom().equals(LIST_FROM_TAGS)) {
            String path = getProperties().get(PROP_TAG_SEARCH_ROOT, resource.getPath());
            String[] tags = getProperties().get(PROP_TAGS, String[].class);
            boolean matchAny = getProperties().get(PROP_TAGS_MATCH).equals("any");

            list = getTagResources(path, tags, matchAny, false);
        }else if(getListFrom().equals(LIST_FROM_FIXED)) {
            list = getFixedList();
        }else {
            // used for resource center article pages
            list = getTagResources(SiteUtils.getRootPage(currentPage).getPath() + RESOURCE_PATH, SiteUtils.getTags(currentPage), true, true);
            list = applyLimit(list,"2");
        }

        list = getSortedList(list);

        if(getProperties().get(PROP_REVERSE, false)) {
            Collections.reverse(list);
        }

        list = StringUtils.isNotBlank(getLimit()) ? applyLimit(list, getLimit()) : list;

        return list;
    }

    //---------------------------------------------------------
    // Determining way to get list (fixed, tags or child pages)
    //---------------------------------------------------------
    private String getListFrom() {
        return getProperties().get(PROP_LIST_FROM, "");
    }

    //----------------------------------------------
    // Get all child pages based on parent path
    //----------------------------------------------
    private List<ListItem> getChildPages() {
        List<ListItem> childItems = null;

        String path = getProperties().get(PROP_PARENT_PAGE, resource.getPath());
        Resource resourceParent = this.resourceResolver.getResource(path);

        if(resourceParent != null) {
            Page page = resourceParent.adaptTo(Page.class);
            if(page != null) {
                childItems = new ArrayList<>();
                Iterator<Page> pageItr = page.listChildren();
                while(pageItr.hasNext()) {
                    Page childPage = pageItr.next();
                    childItems.add(new ListItem(childPage,this.tagManager));
                }
            }
        }

        return childItems;
    }

    //----------------------------------
    // Get fixed list of pages
    //----------------------------------
    private List<ListItem> getFixedList() {
        List<ListItem> fixedList = new ArrayList<>();

        Resource resourceParent = this.resourceResolver.getResource(resource.getChild(FIXED_LIST_NODE).getPath());

        if(resourceParent != null && resourceParent.hasChildren()) {
            Iterable<Resource> resourceIterator = resourceParent.getChildren();

            for(Resource res : resourceIterator) {
                Node node = res.adaptTo(Node.class);

                try {
                    String pagePath = node.getProperty(PROP_PAGES).getString();
                    Resource pageResource = this.resourceResolver.getResource(pagePath);

                    if(pageResource != null) {
                        Page page = pageResource.adaptTo(Page.class);
                        if(page != null) {
                            fixedList.add(new ListItem(page, this.tagManager));
                        }
                    }
                } catch (ValueFormatException e) {
                    LOG.error(e.getMessage());
                } catch (PathNotFoundException e) {
                    LOG.error(e.getMessage());
                } catch (RepositoryException e) {
                    LOG.error(e.getMessage());
                }
            }
        }

        return fixedList;
    }

    //--------------------------------------
    // Get pages based on tags selected
    //--------------------------------------
    private List<ListItem> getTagResources(String path, String[] tags, boolean matchAny, boolean isRelated) {
        Resource tagResource = this.resourceResolver.getResource(path);
        List<ListItem> tagSearchList  = new ArrayList<>();

        if(tagResource != null) {
            Page page = tagResource.adaptTo(Page.class);
            if(page != null && tags != null) {
                if(tags.length > 0) {
                    RangeIterator<Resource> rangeIterator = this.tagManager.find(path, tags, matchAny);
                    if(null!=rangeIterator) {
                        while(rangeIterator.hasNext()) {
                            Resource tempRes = rangeIterator.next();
                            String resPath = tempRes.getPath();
                            resPath = resPath.substring(0, resPath.indexOf("/jcr:content"));

                            Page childPage = this.resourceResolver.getResource(resPath).adaptTo(Page.class);
                            if(childPage != null && (!childPage.getPath().equals(currentPage.getPath())) && (!childPage.getPath().equals(path))) {
                                if(isRelated && childPage.getTemplate() != null && !childPage.getTemplate().getName().equals(RESOURCE_ARTICLE_TEMPLATE)) {
                                    continue;
                                }
                                tagSearchList.add(new ListItem(childPage, this.tagManager));
                            }
                        }
                    }
                }
            }
        }
        return tagSearchList;
    }

    //-------------------------------------------------------------------
    // Sort List based on selection (created date, title, modified date)
    //-------------------------------------------------------------------
    private List<ListItem> getSortedList(List<ListItem> sortableList) {
        final String orderBy = getProperties().get(PROP_ORDER_BY, "");
        sortableList.sort(new Comparator<ListItem>() {
            @Override
            public int compare(ListItem item1, ListItem item2) {
                if(orderBy.equals(JcrConstants.JCR_TITLE)) {
                    return item1.getTitle().compareToIgnoreCase(item2.getTitle());
                }else if(orderBy.equals(LIST_ORDER_MODIFIED_DATE)) {
                    return item2.getLastModifiedDate().compareTo(item1.getLastModifiedDate());
                }else {
                    return item2.getCreationDate().compareTo(item1.getCreationDate());
                }
            }
        });

        return sortableList;
    }

    private List<ListItem> applyLimit(List<ListItem> list, String limit) {
        List<ListItem> limitedList = new ArrayList<>();

        for(int i = 0; i < Integer.parseInt(limit); i++) {
            if(i < list.size()) {
                limitedList.add(list.get(i));
            }
        }

        return limitedList;
    }

    public List<String> getTags() {
        List<String> tagsList = new ArrayList<>();

        String[] tagsNameSpace = getProperties().get(PROP_TAGS, new String[0]);
        for(String nameSpace : tagsNameSpace) {
            Tag tag = this.tagManager.resolve(nameSpace);
            tagsList.add(tag.getTitle());
        }

        return tagsList;
    }

    public boolean isEmpty() {
        return (getList().isEmpty());
    }

    @PostConstruct
    protected void activate() {
        try {
            this.slingUtil = SlingUtil.newInstance(this.getClass());
            this.resourceResolver = this.slingUtil.getServiceResourceResolver(ServiceUser.READ_ONLY_SERVICE.toString(), resolverFactory);
            this.tagManager = this.resourceResolver.adaptTo(TagManager.class);
        } catch (Exception e) {
            LOG.error("Exception in activate() method::{}", e);
        }
    }
}
