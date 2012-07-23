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
		         jq(this)
			    .val('')
			    .removeClass('hint');
});
//5. 
inputtf.bind('blur',function() {
			if(jq(this).val().trim() == '') {
			    jq(this)
				.val(label.text())
				.addClass('hint');
			}

});


});
