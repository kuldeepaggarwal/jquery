var jq=jQuery.noConflict();
jq(document).ready(function() {

var inputtf = jq("input[name=q]");
var label = jq("label[for=q]");
//1. and 2.
inputtf.val(label.text())
    .addClass('hint');

//3.
label.remove();


//4.
inputtf.bind('focus',function() {
		         inputtf
			    .val('')
			    .removeClass('hint');
});
//5. 
inputtf.bind('blur',function() {
			if(inputtf.val().trim() == '') {
			    inputtf
				.val(label.text())
				.addClass('hint');
			}

});

});
