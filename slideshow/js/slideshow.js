var jq=jQuery.noConflict();
jq(document).ready(function() {
                count =1;
		var slideshow = jq("#slideshow");
		var slideshowul = slideshow.prependTo("body");
		var total =slideshowul.children().length;
		var totimg_label = jq('<label/>').html("Total Images").insertAfter(slideshowul);
		var totimg_tb = jq('<input/>').attr({'disabled':'disabled','value':total}).insertAfter(totimg_label);
		var imgnum_label = jq('<label/>').html("Image No.").insertAfter(totimg_tb);
		var imgnum_tb = jq('<input/>').attr({'disabled':'disabled','value':'1'}).insertAfter(imgnum_label);

		slideshowul
		    .find("li")
		    .hide();

		first_li = slideshow.find("li:first");
		first_li.fadeIn(1000,function() {
				
			});

t = setInterval(rotation,3000);
function rotation() {
    var visibleli = slideshow.find("li:visible");
    visibleli.fadeOut(1000,function() {			
			imgnum_tb.val(jq(this).prevAll().length + 2);
			if(imgnum_tb.val() == 4) {
				imgnum_tb.val(1);
				fadein(first_li);
			} else{
			    fadein(jq(this).next());
			}
                  });
    }


function fadein(id) {
    id.fadeIn(1000,function() {	
		jq(this).delay(1000);
	});
}



});

