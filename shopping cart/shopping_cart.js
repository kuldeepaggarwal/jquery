var jq = jQuery.noConflict(), product_collection;
jq(document).ready(function() {
  var cart_items = {};
  jq.getJSON('shopping_cart.json',function(data) {
    product_collection = data;
    renderProducts();
  });
  function renderProducts() {
    var table = jq('<table/>').attr({'id':"items_json",'class':"new_table"});
    jq.each(product_collection, function(key, value) {
      //New ROW
      var row = jq('<tr/>').attr({'id':value.id,'class':'new_generate'});
      //New column 1
      var column1=jq('<td/>');
      var image = jq('<img/>').attr('src',value.img);
      column1.append(image);
      row.append(column1);
      //column2
      var column2 = jq('<td/>');
      var title = jq('<h3/>').html(value["title"]);
      var description = jq('<p/>').addClass("para").html("Category:"+value.category+"<br/>"+value.details);
      var price = jq('<h4/>').html('Price:'+value["price"]);
      column2.append(title).append(description).append(price);
      row.append(column2);
      //column 3
      var column3 = jq('<td />').html("Quantity :");
      var quantity = jq('<input/>').attr({'value':'1' ,'class':"new_input"});
      column3.append(quantity);
      row.append(column3);
      //column4
      var column4 = jq('<td/>');
      var add_to_cart_button = jq('<button/>').html("Add to Cart").attr({'value':"Add to Cart",'class':"new_btn",'id':key});
      column4.append(add_to_cart_button);
      row.append(column4);
      table.append(row);
    });		
    jq("#item_list").append(table);
    jq("#item_list button").hover(function() {
      jq(this).addClass("button_hover_effect")
    }, function() {
      jq(this).removeClass("button_hover_effect")
    })
      .bind('click', add_to_cart);//to  be asked from sir
  }
  function add_to_cart() {
    var adding_rowId = jq(this).attr("id");
    var element_no = cart_items[adding_rowId];
    var no_of_items = Number(jq("#P" + adding_rowId + " input.new_input").val());
    if (!element_no) {
      var data_product = product_collection[adding_rowId];
      cart_items[adding_rowId] = {"price" : data_product["price"] , "quantity" : no_of_items }
      var row = jq('<tr/>').attr({'id' : "mycart" + adding_rowId});
      var column1 = jq('<td/>').append(jq('<img/>').attr('src', data_product.img));
      var title = jq('<h3/>').html(data_product["title"]);
      column1.append(title);
      row.append(column1);
      var column2 = jq('<td/>');
      var price = jq('<label/>').attr('for', 'price').html(data_product["price"]);
      column2.append(price);
      row.append(column2);
      var column3 = jq('<td/>');
      var quantity = jq('<input/>').attr({'name' : adding_rowId});
      column3.append(quantity);
      row.append(column3);
      var column4 = jq('<td/>');
      var subtotal_label = jq('<label/>').attr('for', 'subtotal');
      column4.append(subtotal_label);
      row.append(column4);
      quantity.bind('focusout', EditQuantity);
      var column5 = jq('<td/>');
      var remove_button = jq('<button/>').attr({'id' : "button" + adding_rowId, 'name' : adding_rowId}).html("Remove");
      column5.append(remove_button);
      row.append(column5);
      jq("#mycart_items").append(row);
      remove_button.bind('click', removeitem);
    } else {
      cart_items[adding_rowId]["quantity"] += no_of_items;
    }
    recalculate();
  }
  function removeitem() {
    var row_id = jq(this).attr('name');
    var row_fordeletion = jq("#mycart" + row_id);
    row_fordeletion.remove();
    delete cart_items[row_id];
    recalculate();
  }
  function EditQuantity() {
    var element = jq(this);
    var id = element.attr('name');
    if (Number(element.val()) !== 0) {
      cart_items[id]["quantity"] = Number(element.val());
      recalculate();
    } else {
      jq("#button" + id).trigger('click');
    }
  }
  function recalculate() {
    var no_of_items_cart = Number(0);
    var totalprice = Number(0);
    jq.each(cart_items, function (key, details) {
      no_of_items_cart = no_of_items_cart + 1;
      var subtotal = details["price"] * details["quantity"];
      jq("#mycart" + key + " label[for=subtotal]").html(subtotal);
      jq("#mycart" + key + " input").val(details["quantity"]);
      totalprice += subtotal;
    });
    jq("#balance").val(totalprice);
    jq("label[for=2]").html(no_of_items_cart);
  }
  jq("#mainli1").bind('click',function() {
    jq("#togglediv1").show().siblings().hide();
    jq(this).addClass("hover_effect").siblings().removeClass("hover_effect");
  });
  jq("#mainli2").bind('click',function() {
    jq("#togglediv2").show().siblings().hide();
    jq(this).addClass("hover_effect").siblings().removeClass("hover_effect initial");
  });
});
