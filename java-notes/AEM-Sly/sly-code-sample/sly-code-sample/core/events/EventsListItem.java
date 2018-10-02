package com.sharefile.aem.core.components.events;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.apache.sling.api.resource.ValueMap;

import com.day.cq.wcm.api.Page;
import com.sharefile.aem.core.utils.SiteUtils;

public class EventsListItem {
    private String title;
    private String description;
    private String path;
    private String userType;
    private LocalDate sortDate;
    private String startDate;
    private String startTime;
    private String endDate;
    private String location;
    private String link;
    private ValueMap pageProperties;
    
    public EventsListItem(Page page) {
        pageProperties = page.getProperties();
        DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("MMM dd, YYYY");
        
        title = page.getTitle();
        description = page.getDescription();
        path = page.getPath();
        
        //create a local date in the past
        Calendar pastDate = new GregorianCalendar(1990, Calendar.JANUARY, 1);
        Date sortCalendarDate = pageProperties.get("startDate", Calendar.class) != null ? pageProperties.get("startDate", Calendar.class).getTime() : pastDate.getTime();
        sortDate = SiteUtils.getLocalDate(sortCalendarDate);
        startDate = sortDate != null && !sortCalendarDate.equals(pastDate.getTime()) ? sortDate.format(dateFormat) : null;
        startTime = pageProperties.get("startTime", Calendar.class) != null ? SiteUtils.getLocalDate(pageProperties.get("startTime", Calendar.class).getTime(), dateFormat) : null;
        endDate = pageProperties.get("endDate", Calendar.class) != null ? SiteUtils.getLocalDate(pageProperties.get("endDate", Calendar.class).getTime() ,dateFormat) : null;
        userType = pageProperties.get("userType", String.class);
        location = pageProperties.get("location", String.class);
        link = pageProperties.get("link", String.class);
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPath() {
        return path;
    }
    
    public String getUserType() {
        return userType;
    }
    
    public LocalDate getSortDate() {
        return sortDate;
    }
    
    public String getStartDate() {
        return startDate;
    }
    
    public String getStartTime() {
        return startTime;
    }
    
    public String getEndDate() {
        return endDate;
    }
    
    public String getLocation() {
        return location;
    }
    
    public String getLink() {
        return link;
    }
}