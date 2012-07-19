var jq = jQuery.noConflict();
jq(document).ready(function(){

//1.
console.log("Select all of the image elements on the page; log each image's alt attribute.");

 jq('img[alt]').each(function (index,element) {console.log(element.alt);});

//2.
console.log("\nSelect the search input text box, then traverse up to the form and add a class to the form.");

var inputtb = jq('input[name="q"]');
var body=jq("body");
console.log(jq(inputtb.parentsUntil(body,"form"))
               .addClass("current")
           );


//3.
console.log("\nSelect the list item inside #myList that has a class of currents and remove that class from it; add a class of current to the next list item.");

var ul_listitem = jq("#myList li.current");

console.log(jq(ul_listitem)
.removeClass(function(){
                 console.log(jq(this));
		 return ('current');
            })
.next()
.addClass("current"));


//4.
console.log("\nSelect the select element inside #specials; traverse your way to the submit button.");

var submit_btn = jq("#specials select");
console.log(jq(submit_btn.parent())
		.next()
		.children()
		.first()
	   );


//5.
console.log("\nSelect the first list item in the #slideshow element; add the class current to it, and then add a class of disabled to its sibling elements.");

console.log(jq("#slideshow li:first")
		.addClass(function() {
			     console.log(jq(this)
					    .addClass('current')
					);
			  })
		.nextAll()
		.addClass("disabled")
	    );
});
