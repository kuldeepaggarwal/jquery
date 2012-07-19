var jq = jQuery.noConflict();
jq(document).ready(function(){
   jq("#nav li").hover(hoverin,hoverout);    
});
 
function hoverin() {
    jq(jq(this).find("ul")).addClass('hover');
}

function hoverout() {
   jq(jq(this).find("ul")).removeClass('hover');
}
