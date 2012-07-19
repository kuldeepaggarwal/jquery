var jq = jQuery.noConflict();
jq(document).ready(function(){

//1.
console.log("Add five new list items to the end of the unordered list #myList.");
for (var i = 1; i<6; i++) { 
    console.log(jq('<li>new list item'+i+'</li>')
		     .appendTo('#myList')
		);
}
 

//2.
console.log("\nRemove the odd list items");

console.log(jq("#myList li:odd").remove());


//3.
console.log("\nAdd another h2 and another paragraph to the last div.module");

jq('<h2>Another Heading</h2><p>Another Paragraph</p>')
   .appendTo("div.module:last");
console.log($("div.module:last"));


//4.
console.log("\nAdd another option to the select element; give the option the value Wednesday.");
console.log(jq('<option>Wednesday</option>').appendTo("select[name=day]"));


//5.
console.log("\nAdd a new div.module to the page after the last one; put a copy of one of the existing images inside of it");


	jq('<div class="module" id="newly_created">New DIV</div>')
	    .appendTo("div.module:last");

	console.log(jq('img')
			.first()
			.clone()
			.appendTo("div.module:last")
	);
});
