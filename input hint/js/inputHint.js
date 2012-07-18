var jq=jQuery.noConflict();
jq(document).ready(function() {
var inputtf = jq("input[name=q]");
var label = jq("label[for=q]");
inputtf.val(label.text()).addClass('hint');
label.remove();

inputtf.bind('focus',function() {
inputtf.val('').removeClass('hint');
});

inputtf.bind('blur',function() {
if(inputtf.val().trim() == '') {
inputtf.val(label.text()).addClass('hint');
}

});

});
