var jq = jQuery.noConflict();
jq(document).ready(function(){

//1.
console.log("Select all of the image elements on the page; log each image's alt attribute.");
 jq('img[alt]').each(function (index,element) {console.log(element.alt);});

//2.
console.log("\nSelect the search input text box, then traverse up to the form and add a class to the form.");
console.log(jq(jq('input[name="q"]').parentsUntil(jq("body"),"form")).addClass("current"));


//3.
console.log("\nSelect the list item inside #myList that has a class of currents and remove that class from it; add a class of current to the next list item.");
console.log(jq(jq(jq(jq("#myList li[class='current bar']")).removeClass(function(){console.log(jq(this));})).next()).addClass("current bar"));


//4.
console.log("\nSelect the select element inside #specials; traverse your way to the submit button.");
console.log(jq(jq(jq(jq("#specials select").parent()).next()).children()[0]));


//5.
console.log("\nSelect the first list item in the #slideshow element; add the class current to it, and then add a class of disabled to its sibling elements.");
console.log(jq(jq(jq("#slideshow li:first")).addClass(function(){console.log(jq(this).addClass('current bar'));})).nextAll().addClass("disabled"));
});
