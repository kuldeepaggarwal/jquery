var jq=jQuery.noConflict();
jq(document).ready(function() {
        jq("div#blog a").click(function(e){
           e.preventDefault();
        });
	var blogheadings = jq("div#blog h3");
	blogheadings.each(function(){
	    var currentheading = jq(this);
	    currentheading.click(function(){
            if (jq(currentheading).next().css('display') != 'block') {
                jq("div#blog p:visible").slideUp(500);
	        jq(currentheading).next().slideDown(500);
            }
	    });
	});
});

