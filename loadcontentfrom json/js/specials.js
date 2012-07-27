var jq = jQuery.noConflict();
jq(document).ready(function(){
  var first_time_loaded = false,globaljsondata;
  var div = jq("#specials .buttons"), dropdown = jq("#specials select"), new_div = jq('<div/>').attr("id","new_div");
  div.after(new_div).remove();
  dropdown.bind('change',function() {
    selected_value = jq(this).val();
    if (selected_value !== "") {
      if (!first_time_loaded) {		
        jq.ajax ({
          url : 'data/specials.json',
          type : 'GET',
          dataType : 'json',
          success : function(jsondata) {
            first_time_loaded = true;
            globaljsondata = jsondata;
            display(globaljsondata);
          }
        });
      } else {
        display(globaljsondata);
      }
    } else {
      jq("#new_div").empty();
    }
  });
function display(data) {
  jq("#new_div").empty();
  var special_value = data[selected_value];
  var image = jq('<img/>').attr('src',special_value.image);
  var text = jq('<p/>').html(special_value.text);
  var title = jq('<h1/>').html(special_value.title);
  jq("#new_div").css('color',special_value.color+'').append(title).append(text).append(image);
}    
});
