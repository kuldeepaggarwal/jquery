var jq = jQuery.noConflict();
jq(document).ready(function(){
//1.
console.log("all of the div elements that have a class of module:");
console.log(jq("div.module"));
//2.
console.log("\n3 ways to select");
console.log(jq("#myListItem"));
console.log(jq("ul#myList li:nth-child(3)"));
console.log(jq("li#myListItem"));//this is best

//3.
console.log("\nlabel for the search input using an attribute selector");
console.log(jq("label[for='q']"));

//4.
console.log("\nNo. of hidden elements on the page:"+jq('*:visible').length);
//5.
console.log("\nNo. of image elements on the page have an alt attribute:"+jq('img[alt]').length);

//6.
console.log("\nOdd table rows(index 1,3,7 and so on) on the page:");
console.log(jq("tr:odd"));
console.log("\nOdd table rows(row 1,3,7 and so on) on the page:");
console.log(jq("tr:even"));



});
