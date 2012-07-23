var jq=jQuery.noConflict();
jq(document).ready(function() {
                count =1;
		var slideshowul = jq("#slideshow").prependTo("body");
		var total =(jq(slideshowul).children().length);
		var totimg_label = jq('<label>Total Images</label>').insertAfter(slideshowul);
		var totimg_tb = jq('<input disabled=disabled value='+total+' />').insertAfter(totimg_label);
		var imgnum_label = jq('<label>Image No.</label>').insertAfter(totimg_tb);
		var imgnum_tb = jq('<input disabled=disabled value=1 />').insertAfter(imgnum_label);
		(slideshowul)
		    .find("li")
		    .hide();
		li_children = jq(slideshowul).children();
		jq(li_children.first()).fadeIn(200,function() {
							rotation(count);
						   });




function rotation(num) {

jq(slideshowul)
    .find("li:visible")
    .fadeOut(1200,function() {
                      imgnum_tb.val(count+1);
                      if(count == 2) {
		          count=-1;
		      }
                      jq(li_children[num])
		          .fadeIn(1500,function() {
					   count++;
					   rotation(count);
                                       })
                  });
}

});

