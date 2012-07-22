var jq = jQuery.noConflict(),bool=true,data_collection;
jq(document).ready(function(){
	var purchase_list = new Array();
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
		var table = jq('<table id = "items_json" class="new_table" style="width:100%" height=100%/>'),rows="",rownumber=1;
		jq.each(data_collection,function(key,value){

			var col1='<td id = "image'+rownumber+'" width=5% ><img src="'+value.img+'" /></td>';
			var col2 = '<h3>'+value["title"]+'</h3>';
			var category = value.category+"\n";
			col2 += '<p class="para">'+category+value.details+'</p>';
			col2 += '<h4>Price:'+value["price"]+'</h4>';
			col2 = '<td id = "details'+rownumber+'" width=60% >'+col2+'</td>';
			var col3 = '<td id = "quantitycolumn'+rownumber+'" width=25% >Quantity : <input value=1 class="new_input"/></td>';
			var col4 = '<td width=10%><button value="Add to Cart" class="new_btn" id="button_'+rownumber+'">Add to Cart</button></td>'
			var row = '<tr id='+rownumber+' class=new_generate>'+col1+col2+col3+col4+'</tr>';
			rows=rows+row;
			rownumber++;

		});
		table.html(rows);
		jq("#item_list").append(jq(table));
		jq("#item_list button").hover(function(){jq(this).addClass("buttonhovereffect")},function(){jq(this).removeClass("buttonhovereffect")})
							   .bind('click',addtocart);
	}
	jq("#mainli1").bind('click',function(){

		(jq("#togglediv1").show().siblings().hide());
		jq(this).addClass("hovereffect").siblings().removeClass("hovereffect");
	});
	jq("#mainli2").bind('click',function(){
		jq("#togglediv2").show().siblings().hide();
		jq(this).addClass("hovereffect").siblings().removeClass("hovereffect start");
	});
	
	function addtocart() {
		var addingrow = jq(this).attr("id").split('_')[1];
		var elementno = purchase_list.indexOf(addingrow);
		var noofitems = jq("#"+jq(this).attr("id").split('_')[1]).find("input").val();
		if(elementno === -1)
		{
			var id =addingrow;
			purchase_list.push(id);
			purchase_list.push(noofitems);
			additem_mycart(id,noofitems);
			calculatetotal();
		}
		else {
			var existingquantity = Number(purchase_list[elementno + 1]);
			var existingquantity_addedquantity = existingquantity + Number(noofitems);
			purchase_list[elementno+1] = existingquantity_addedquantity;
			update_mycart(purchase_list[elementno],purchase_list[elementno+1]);
				
		}
		jq("label[for=2]").text(purchase_list.length/2);
		
		
		
	}
	function update_mycart (id,updatedquantity) {
		console.log(id);
		console.log(updatedquantity);
		var mycartrow = jq("#mycart"+id);
		mycartrow.find("input").val(updatedquantity);
		var updatedsbtotal = mycartrow.find("label[for=price]").text() * updatedquantity;
		mycartrow.find("label[for=subtotal]").text(updatedsbtotal);
		calculatetotal();
	}
	function additem_mycart (id,noofitems1) {
		var rowfrom_items_json = jq("#"+id).clone();
		var data = new Array;
		data[0] = rowfrom_items_json.find("#image"+id).html();
		data[0]+=('<h4>'+jq(rowfrom_items_json.find("h3")).html()+'</h4>');
		//data[0]+=data[0].html();
		data[1] = '<label for=price>'+rowfrom_items_json.find("h4").html().split(':')[1]+'</label>';		
		data[3] = '<label for=subtotal>'+Number(jq(data[1]).text()) * Number(noofitems1)+'</label>';
		data[2] = '<input id=itemquantity_'+id+' value ='+noofitems1+' />';
		data[4] = '<button id=remove_'+id+' value="REMOVE"  >REMOVE</button>';

		var newrow="";
		for (var i = 0; i <= 4; i++) {
			var newcol = '<td>'+data[i]+'</td>';
			newrow+=newcol;
		}

		newrow = '<tr id=mycart'+id+'>' + newrow + '</tr>';
		jq("#mycart_items").append(jq(newrow));
		jq("#mycart_items input").unbind();
		jq("#mycart_items input").bind('focusout',recalculate);
		jq("#mycart_items button").unbind();
		jq("#mycart_items button").bind('click',removeitem);
	}
	function recalculate () {
		var idd = jq(this).attr('id').split('_')[1];
		var updtqty = jq(this).val();
		update_mycart(idd,updtqty);
	}
	function removeitem () {
		 jq("label[for=2]").text( Number(jq("label[for=2]").text()) - 1);
		var id = jq(this).attr('id').split('_')[1];
		var row_fordeletion = jq("#mycart"+id);
		var subtot = Number(row_fordeletion.find("label[for=subtotal]").text());
		var totalprice = Number(jq("#balance").val());
		totalprice -= subtot;
		jq("#balance").val(totalprice);
		var rowindex = row_fordeletion.index();
		for (var i = 0; i < purchase_list.length; i = i+2) {
			if(purchase_list[i]=== id) {
				purchase_list.splice(i,2);
				break;
			}
		};
		row_fordeletion.remove();
		console.log(rowindex);
		console.log(purchase_list);
	}
	function calculatetotal () {

		var totalprice =Number(0);
		var subtotal_collection = jq("#mycart_items").find("label[for=subtotal]");
		jq.each(subtotal_collection,function(key,value){
			totalprice += Number(jq(this).html());
		});
		jq("#balance").val(totalprice);
	}


});