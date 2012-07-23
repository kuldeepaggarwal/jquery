var jq = jQuery.noConflict(),bool=true,data_collection;
jq(document).ready(function(){
	var purchase_list = {},count = Number(0);
	if(bool){
		jq.getJSON('shopping_cart.json',function(data){
			data_collection = data;
			bool = false;			
			filler();
		});
	} else {
		filler();
	}
	
	function filler(){
		var table = jq('<table/>').attr({'id':"items_json",'class':"new_table",'style':"width:100%; height=100%"});
		jq.each(data_collection,function(key,value){
			
		var row = jq('<tr/>').attr({'id':value.id,'class':'new_generate'});

			var col1=jq('<td/>').attr({ 'style':'width:5%'}).append(jq('<img/>').attr('src',value.img));
			row.append(col1);

			var col2 = jq('<td/>').attr('style','width:60% ');
			var title = jq('<h3/>').html(value["title"]);
			var description = jq('<p/>').addClass("para").html("Category:"+value.category+"<br/>"+value.details);
			var price = jq('<h4/>').html('Price:'+value["price"]);
			col2.append(title).append(description).append(price);
			row.append(col2);

			var col3 = jq('<td />').attr('style', "width:25%" ).html("Quantity :");
			var quantity = jq('<input/>').attr({'value':'1' ,'class':"new_input"});
			col3.append(quantity);
			row.append(col3);

			var col4 = jq('<td/>').attr('style','width:10%');
			var addtocartbutton = jq('<button/>').html("Add to Cart").attr({'value':"Add to Cart",'class':"new_btn",'id':key});
			col4.append(addtocartbutton);
			row.append(col4);

			table.append(row);
		});
		
		jq("#item_list").append(table);
		jq("#item_list button").hover(function(){jq(this).addClass("buttonhovereffect")},function(){jq(this).removeClass("buttonhovereffect")})
							   .bind('click',addtocart);
	}
	function addtocart() {
		var addingrow_id = jq(this).attr("id");
		var elementno = purchase_list[addingrow_id];
		var noofitems = Number(jq("#P"+addingrow_id).find("input.new_input").val());
		var data_product = data_collection[addingrow_id];
		if(!elementno)
		{
			
			purchase_list[addingrow_id]=data_product["price"];
			count++;
			var row = jq('<tr/>').attr({'id':"mycart"+addingrow_id});

			var col1=jq('<td/>').append(jq('<img/>').attr('src',data_product.img));
			var title = jq('<h3/>').html(data_product["title"]);
			col1.append(title);
			row.append(col1);

			var col2 = jq('<td/>');
			var price = jq('<label/>').attr('for','price').html(purchase_list[addingrow_id]);
			col2.append(price);
			row.append(col2);

			var col3 = jq('<td/>');
			var quantity = jq('<input/>').attr({'value':noofitems,'name':addingrow_id});
			col3.append(quantity);
			row.append(col3);

			var col4 = jq('<td/>');
			var subtotal_label = jq('<label/>').attr('for','subtotal').html(noofitems*purchase_list[addingrow_id]);
			col4.append(subtotal_label);
			row.append(col4);
			quantity.bind('focusout',calculate);
			var col5 = jq('<td/>');
			var remove_button = jq('<button/>').attr({'id':"button"+addingrow_id,'name':addingrow_id}).html("Remove");
			col5.append(remove_button);
			row.append(col5);
			
			jq("#mycart_items").append(row);			
			remove_button.bind('click',removeitem);		
		}
		else {
			var cartrow = jq("#mycart"+addingrow_id);
			var existingquantity_addedquantity = Number(cartrow.find("input").val()) + noofitems;
			cartrow.find("input").val(existingquantity_addedquantity);
			cartrow.find("label[for=subtotal]").html(existingquantity_addedquantity * purchase_list[addingrow_id]);
		}
		recalculate();
	}
	function removeitem () {
		var row_id = jq(this).attr('name');
		var row_fordeletion = jq("#mycart"+row_id);
		row_fordeletion.remove();
		delete purchase_list[row_id];
		count--;
		recalculate();
	}
	function calculate () {

		var element = jq(this);
		var updated_subtotal = purchase_list[element.attr('name')] * element.val();
		jq("#mycart"+element.attr('name')).find("label[for=subtotal]").html(updated_subtotal);
		recalculate();
	}
	function recalculate() {

		jq("label[for=2]").text(count);
		var totalprice =Number(0);
		var subtotal_collection = jq("#mycart_items").find("label[for=subtotal]");
		jq.each(subtotal_collection,function(key,value){
			totalprice += Number(jq(this).html());
		});
		jq("#balance").val(totalprice);
	}
jq("#mainli1").bind('click',function(){

		(jq("#togglediv1").show().siblings().hide());
		jq(this).addClass("hovereffect").siblings().removeClass("hovereffect");
	});

	jq("#mainli2").bind('click',function(){
		jq("#togglediv2").show().siblings().hide();
		jq(this).addClass("hovereffect").siblings().removeClass("hovereffect start");
	});
	

});
