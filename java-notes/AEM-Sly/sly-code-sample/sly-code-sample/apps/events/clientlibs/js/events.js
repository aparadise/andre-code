// -------------------------------------------------
// Show/Hide Events based on date
// -------------------------------------------------

(function (window, $) {
	'use strict';

	var sf = window.sf || {};

	sf.events = sf.events || {
		upcoming : ".events .upcoming",
		previous : ".events .previous",
		dateAttribute : "data-date",

		init: function() {
			var _ = this;
			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var today = new Date();
			today = new Date(monthNames[today.getMonth()] + " " +  today.getDate() + " " + today.getFullYear());
	
			$(_.upcoming).each(function() {
				var total_events = $(this).children("div.columns").length;
				var hide_counter = 0;
				
				$(this).children("div.columns").each(function() {
					var eventDate = new Date($(this).attr(_.dateAttribute));
					eventDate =   new Date(monthNames[eventDate.getMonth()] + " " +  eventDate.getDate() + " " + eventDate.getFullYear());
					
					if(eventDate < today) {
						$(this).hide();
						hide_counter++;
					}
				});
				
				if(total_events == hide_counter) {
					$(this).find('.no-events').show();
				}
			});
			
			$(_.previous).each(function() {
				var total_events = $(this).children("div.columns").length;
				var hide_counter = 0;
				
				$(this).children("div.columns").each(function() {
					var eventDate = new Date($(this).attr(_.dateAttribute));
					eventDate =   new Date(monthNames[eventDate.getMonth()] + " " +  eventDate.getDate() + " " + eventDate.getFullYear());
		
					if(eventDate < today) {
					    $(this).find('.signup, .date').hide();
					    $(this).find('.ondemand, .watchnow').show();
					}else {
						$(this).hide();
						hide_counter++;
					}
				});
				
				if(total_events == hide_counter) {
					$(this).find('.no-events').show();
				}
			});
		}
	};

	window.sf = sf;
})(window, jQuery);
