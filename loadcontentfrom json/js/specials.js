var jq = jQuery.noConflict();
jq(document).ready(function(){
        var bool = false,globaljsondata;
	var div = jq("#specials"),dropdownoption = div.find("select");
        div.find("li.buttons").remove();
	div.find('form').append('<div id="new_div"></div>');
	jq.ajaxSetup({cache:true});
	dropdownoption.bind('change',function(){
                        selectedvalue = jq(this).val();
			if(selectedvalue !== "") {
                            if(!bool) {		
		                    jq.ajax({
					url : 'data/specials.json',
					type : 'GET',
					dataType : 'json',
					success : function(jsondata) {
						  bool = true;
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
    jq.each(data,function(key,specialvalue) {
        if (key == selectedvalue) {
	    jq("#new_div").html('<h1>'+specialvalue.title+'</h1>'+'<p>'+specialvalue.text+'</p>'+'<img src="'+specialvalue.image+'"></img>')
						       .css('color',specialvalue.color+'');
                                        }
				})
}
    
});



/*ALTERNATIVE WAY
jq.getJSON('data/specials.json',function(data){
				jq.each(data,function(key,specialvalue){
					if (key == selectedvalue) {
					    jq("#new_div").html('<h1>'+specialvalue.title+'</h1>'+'<p>'+specialvalue.text+'</p>'+'<img src="'+specialvalue.image+'"></img>')
						       .css('color',specialvalue.color+'');
                                        }
				})
			});
*/
