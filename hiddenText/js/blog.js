var jq=jQuery.noConflict();
jq(document).ready(function() {
	var blogheadings = jq("div#blog h3");
	blogheadings.each(function(){
	    var currentheading = jq(this);
	    currentheading.click(function(){
	    jq("div#blog p:visible").slideUp(500);
	    jq(currentheading).next().slideDown(500);
	    });
	});
});
