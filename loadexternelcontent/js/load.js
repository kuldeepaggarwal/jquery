var jq = jQuery.noConflict();
jq(document).ready(function() {
  jq("div#blog a").click(function(e){
    e.preventDefault();
  });
  var blogheadinglists = jq("#blog>ul>li>h3");
  blogheadinglists.each(function(index,element) {
    var ahref = jq(element).find("a").attr('href').split("#");
    var div=jq('<div/>');
    jq(element)
      .append(div)
      .data("target" ,"data/" + ahref[0] + " #" + ahref[1])		
      .click(function() {
        div.load("data/" + ahref[0] + " #" + ahref[1]);
      });
  });
});
