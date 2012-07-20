var jq = jQuery.noConflict();
jq(document).ready(function() {
    jq("div#blog a").click(function(e){
           e.preventDefault();
    });
    var blogheadinglists = jq("#blog>ul>li>h3");
    blogheadinglists
	.each(function(index,element) {
            var ahref = jq(element).find("a").attr('href').replace("#"," #");
            var div=jq('<div></div>');
            jq(element)
                .append(div)
		.data("data" ,"data/"+ahref)		
                .click(function(){
                   jq(element)
			   .find('div')
			   .load((jq(this).data("data")));
		});
    });
});
