
//Gerate Popup
    let cSlot ;
    let activity;
    let price;
    let time;
    let activityObj = new Object();

$(".slot").click(function () {
     cSlot = this;
    if (cSlot.style.backgroundColor == "rgb(0, 128, 0)") {
        $(cSlot).css("background-color", "#FD6A02");
        $("#myModal").modal("show");
        time = $(cSlot).parent().siblings(".time").html();
        dateVar = $("#cDate").html()
        $("#cTime").html(time);
        $("#dateM").html(dateVar); 
    }
        activity = undefined;
        price = undefined;
    
	$("#addCart").click(function () {
		$(cSlot).css("background-color", "rgb(255, 0, 0)");
        $("#myModal").modal("hide");
        addToCart(activity, price, time);
	});

	$("#cancel").click(function () {
		$(cSlot).css("background-color", "#008000");
	});

	$("button.close").click(function () {
		$(cSlot).css("background-color", "#008000");
    });
});

//Labels
$(".dropdown-item").click(function () {
   activity = $("span:first", this).html();
   price =  $("span:last", this).html();
    $("#activity").html(activity);
    $("#price").html(price);
});

//Shopping Cart
function addToCart(name, num, time, dateVar) {
    activityObj = new Object()
    activityObj.Activity = name;
    activityObj.Price = num;
    activityObj.Time = time;
    activityObj.Date = dateVar;
    cart.push(activityObj);
    console.log(cart)
}

let cart = []

//Date picker

$("#datepicker").change(function() {
    let str = $(this).datepicker({ dateFormat: "dd/mm/yyyy"}).val();
    let datet = new Date(str);
    let date = datet.toLocaleDateString();
    let dayi = datet.getDay();
    let DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday"];
    let day = DOW[dayi];
    let pDatet = new Date();
    pDatet.setDate(datet.getDate() - 1);
    let nDatet = new Date();
    nDatet.setDate(datet.getDate() + 1);
    let pDate = pDatet.toLocaleDateString()
    let nDate = nDatet.toLocaleDateString();
    let pDayi = pDatet.getDay();
    let pDay = DOW[pDayi];
    let nDayi = nDatet.getDay();
    let nDay = DOW[nDayi];
    $("#pDate").html(pDate);
    $("#pDay").html(pDay);
    $("#cDate").html(date);
    $("#cDay").html(day);
    $("#nDate").html(nDate);
    $("#nDay").html(nDay);
});