var jq = jQuery.noConflict();
jq(document).ready(function(){
   jq("#nav li").hover(hoverin,hoverout);    

function hoverin() {
    var li_id = jq(this);
    jq(li_id.find("ul"))
        .addClass('hover');
}

function hoverout() {
    var li_id = jq(this);
    jq(li_id.find("ul"))
        .removeClass('hover');
}
});
 

