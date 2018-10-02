package com.sharefile.aem.core.components.events;

import static com.sharefile.aem.core.components.events.EventsListConstants.Properties.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

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
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.sharefile.aem.core.utils.SiteUtils;

@Model(adaptables = SlingHttpServletRequest.class)
public class EventsList  {    
    private static final Logger LOG = LoggerFactory.getLogger(EventsList.class);
    
    @Inject
    private Resource resource;
    
    @Inject
    private Page currentPage;
    
    @Inject
    private ResourceResolverFactory resolverFactory;
    
    private ResourceResolver resourceResolver;
    
    private SlingUtil slingUtil;
    
    private TagManager tagManager;
    
    SlingHttpServletRequest request;
    
    /**
     * @return Component's ValueMap.
     */
    public ValueMap getProperties() {
        return resource.getValueMap();
    }
    
    public String getDisplayAs() {
        return getProperties().get(PROP_DISPLAY_AS, DEFAULT_DISPLAY_AS);
    }
    
    public String getDisplayAsClass() {
        return (getDisplayAs().split(" ")[0]).toLowerCase();
    }
    
    public String getNoEventsTranslation() {
        return ("no-" + getDisplayAs().replace(" ","-")).toLowerCase();
    }
    
    //----------------------------------
    // Main method return resource list
    //----------------------------------
    public List<EventsListItem> getList() {
        List<EventsListItem> list = new ArrayList<EventsListItem>();
        String[] tags = new String[2];
        Page rootPage = SiteUtils.getRootPage(currentPage);
        
        tags[0] = TAG_WEBINAR;
        
        if(getDisplayAs().equals(UPCOMING_EVENTS)) {
            tags[0] = TAG_EVENT;
        }
        
        if(getDisplayAs().equals(UPCOMING_EVENTS_WEBINARS)) {
            tags[1] = TAG_EVENT;
        }
        
        if(rootPage != null) {
            if(!getDisplayAs().equals(UPCOMING_EVENTS_WEBINARS)) {
                list = getTagResources(rootPage.getPath(),tags,false);
            }else {
                list = getTagResources(rootPage.getPath(),tags,true);               
            }
        }
        
        if(list != null) {
            list.sort(Comparator.comparing(EventsListItem::getSortDate));
            
            if(getDisplayAs().equals(OMDEMAND_WEBINARS)) {
                Collections.reverse(list);
            }
        }
        
        return list;
    }
    
    //--------------------------------------
    // Get pages based on tags selected
    //--------------------------------------
    public List<EventsListItem> getTagResources(String path, String[] tags, boolean matchAny) {
        Resource tagResource = resource.getResourceResolver().getResource(path);
        List<EventsListItem> tagSearchList  = new ArrayList<EventsListItem>();
        
        if(tagResource != null) {
            Page page = tagResource.adaptTo(Page.class);
            if(page != null) {
                RangeIterator<Resource> rangeIterator = tagManager.find(path, tags, matchAny);
                while(rangeIterator.hasNext()) {
                    Resource tempRes = rangeIterator.next();
                    if(tempRes.getParent().isResourceType("cq:Page")) {
                        Page childPage = resource.getResourceResolver().getResource(tempRes.getParent().getPath()).adaptTo(Page.class);
                        if(childPage != null && (!childPage.getPath().equals(currentPage.getPath()))) {
                            tagSearchList.add(new EventsListItem(childPage));
                        }
                    }
                }
            }
        }
        
        return tagSearchList;
    }
    
    public boolean isEmpty() {
        return (getList().size() <= 0);
    }
    
    @PostConstruct
    protected void activate() {
        try {
            this.slingUtil = SlingUtil.newInstance(this.getClass());
            resourceResolver = this.slingUtil.getServiceResourceResolver(ServiceUser.READ_ONLY_SERVICE.toString(), resolverFactory);
            tagManager = resourceResolver.adaptTo(TagManager.class);
        } catch (Exception e) {
            LOG.error("Exception in activate() method::{}", e);
        }
    }
}