//Gerate Popup
let cSlot;
let activity;
let price;
let time;

$(".slot").click( function () {
	cSlot = this;
	if ($("#datepicker").val() == "") {
		alert("Select Date");
	} else if (cSlot.style.backgroundColor == "rgb(0, 128, 0)") {
		$(cSlot).css("background-color", "#FD6A02");
		$("#bookingModal").modal("show");
		time = $(cSlot).children(".time-a").html();
		dateVar = $(cSlot).children(".date-a").html();
		$("#cTime").html(time);
		$("#dateM").html(dateVar);
		activity = "";
		price = "";
	}
});

$("#addCart").click(function () {
	$(cSlot).css("background-color", "rgb(255, 0, 0)");
	$("#bookingModal").modal("hide");
	addToCart(activity, price, dateVar, time);
});

$("#cancel").click(function () {
	$(cSlot).css("background-color", "#008000");
});

$("button.close").click(function () {
	$(cSlot).css("background-color", "#008000");
});

//Labels
$(".dropdown-item").click(function () {
	activity = $("span:first", this).html();
	price = $("span:last", this).html();
	$("#activity").html(activity);
	$("#price").html(price);
});

//Shopping Cart
$(".cart").click(function () {
	$("#cartModal").modal("show");
});

function addToCart(name, num, date, time) {
	activityObj = new Object();
	activityObj.Activity = name;
	activityObj.Price = num;
	activityObj.Date = date;
    activityObj.Time = time;
    console.log(cart);
	cart.push(activityObj);
	$(
		`<div class="row"><div class="col"><p>${activityObj.Activity}</p></div><div class="col"><p>${activityObj.Time}</p></div><div class="col"><p>${activityObj.Date}</p></div><div class="col"></div><div class="col">${activityObj.Price}</div></div>`
	).insertAfter("#cartRow");
    sessionStorage.setItem('ShoppingCart', JSON.stringify(cart));
}

let cart = [];

//Date picker

$("#datepicker").change(function () {
	let str = $(this).datepicker({ dateFormat: "dd/mm/yyyy" }).val();
	let datet = new Date(str);
	let date = datet.toLocaleDateString();
	let dayi = datet.getDay();
	let DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let day = DOW[dayi];
	let pDatet = new Date();
	pDatet.setDate(datet.getDate() - 1);
	let nDatet = new Date();
	nDatet.setDate(datet.getDate() + 1);
	let pDate = pDatet.toLocaleDateString();
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
    $(".pSlot").children(".date-a").html(pDate);
    $(".cSlot").children(".date-a").html(date);
    $(".nSlot").children(".date-a").html(nDate);
});

//Local Storage
$("#purchase").click(function () {
   let booking = JSON.parse(sessionStorage.getItem('ShoppingCart'));
    console.log(booking);
    for (i=0; i < booking.length; i++) {
        console.log(booking[i]);
    } 

});
