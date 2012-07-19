var jq=jQuery.noConflict();
jq(document).ready(function() {
var divmodule = jq("div.module");
//1.
divmodule.hide();
//2.
var uol = jq('<ul/>').insertBefore(jq("div.module").first());
//3.1
divmodule.each(function(){
var currentmodule = jq(this);
//3.2
var listitemtab = jq('<li>'+jq(currentmodule.find("h2")).text()+'</li>').appendTo(uol);
//4.
listitemtab.bind('click',function(){
//5.
	currentmodule
            .show()
            .siblings('div.module')
            .hide();
//6 and 7 
       listitemtab
           .addClass('current')
           .siblings()
           .removeClass('current');
});

});
//8.
jq(jq("div.module")[0]).show();

//8th implicit part
uol.find("li:first").addClass("current");
});
