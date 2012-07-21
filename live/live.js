var jq=jQuery.noConflict();
jq(document).ready(function() {
	/*jq("#additembutton").bind('click',function(){
		count =jq("#container").children().length+1;
		jq("#container").append('<div id='+count+'>'+count+'</div>');		
	});
	jq("#container").delegate('div','click',function(){
		
		if (jq(this).attr('id')==count) { jq(this).remove();count--;}
		jq(this).addClass('latest').siblings().removeClass();
	});*/
	jq("#additembutton").bind('click',function(){
		count1 =jq("#container1").children().length+1;
		if(count1===1) {
			jq("#container1").html("");
		}
		jq("#container1").prepend('<div id='+count1+'>'+count1+'</div>');		
	});

	jq("#container1").delegate('div','click',function(){		
		if (jq(this).attr('id')==count1) { 
			jq(this).remove();
			count1--;
			if(count1===0) {
				jq("#container1").html("EMPTY CONTAINER");
			}
		}
		jq(this).addClass('latest').siblings().removeClass();
	});


});