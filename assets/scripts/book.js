
//Gerate Popup
    let cSlot;

$(".slot").click(function () {
     cSlot = this;
    if (cSlot.style.backgroundColor == "rgb(0, 128, 0)") {
        $(cSlot).css("background-color", "#FD6A02");
	    $("#myModal").modal("show");
    }
    
	$("#addCart").click(function () {
		$(cSlot).css("background-color", "rgb(255, 0, 0)");
        $("#myModal").modal("hide");
        activityObj.Activity = activity;
        activityObj.Price = price;
        cart.push(activityObj)
        console.log(cart)
	});

	$("#cancel").click(function () {
		$(cSlot).css("background-color", "#008000");
	});

	$("button.close").click(function () {
		$(cSlot).css("background-color", "#008000");
    });
});

//Labels
let activity;
let price;
let activityObj = new Object();

$(".dropdown-item").click(function () {
   activity = $("span:first", this).html();
   price =  $("span:last", this).html();
    $("#activity").html(activity);
    $("#price").html(price);
});

//Shopping Cart
let cart = [
    
]