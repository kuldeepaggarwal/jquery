var jq = jQuery.noConflict();
jq(document).ready(function() {
  jq("#additembutton").bind('click',function() {
    childrencount = jq("#container1 div").length + 1;
    if (childrencount === 1) {
      jq("#container1").html("");
    }
    newdiv = jq('<div/>').html(childrencount);
    jq("#container1").prepend(newdiv);		
  });
  jq("#container1").delegate('div','click',function(){
    topdiv = jq("#container1 div:first-child");
    if (jq(this)[0] == topdiv[0]) { 
      jq(this).remove();
      if (jq("#container1 div").length === 0) {
        jq("#container1").html("EMPTY CONTAINER");
      }
    } else {
      jq(this).addClass('highlight').siblings().removeClass('highlight');
    }
  });
});
