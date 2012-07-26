var jq = jQuery.noConflict();
jq(document).ready(function(){
        var bool = false,globaljsondata;
	var div = jq("#specials .buttons"),dropdownoption = jq("#specials select"),new_div = jq('<div/>').attr("id","new_div");
        div.after(new_div).remove();

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
    jq("#new_div").empty();
    jq.each(data,function(key,specialvalue) {
        if (key == selectedvalue) {
	    var image = jq('<img/>').attr('src',specialvalue.image);
	    var text = jq('<p/>').html(specialvalue.text);
	    var title = jq('<h1/>').html(specialvalue.title);
	     jq("#new_div").css('color',specialvalue.color+'').append(title).append(text).append(image);
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
