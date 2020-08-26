//Varibles

let cSlot;
let activity;
let price;
let time;
let cart = [];
let slotsTest = [];

//Functions

function addToCart(name, num, date, time) {
	activityObj = new Object();
	activityObj.Activity = name;
	activityObj.Price = num;
	activityObj.Date = date;
	activityObj.Time = time;
	cart.push(activityObj);

	sessionStorage.setItem("ShoppingCart", JSON.stringify(cart));
}

function checkDate(day) {
	let booking = JSON.parse(localStorage.getItem("booking"));
	for (let i = 0; i < day.length; i++) {
		let dayDate = $(day[i]).find(".date-a").text();
		let dayTime = $(day[i]).find(".time-a").text();
		if (booking && booking[dayDate] && booking[dayDate][dayTime]) {
			$(day[i]).css("background-color", "rgb(255, 0, 0)");
		} else {
			$(day[i]).css("background-color", "rgb(0, 128, 0)");
		}
	}
}

function moveToLS(arr) {
	let ls = JSON.parse(localStorage.getItem("booking")) || {};
	arr.forEach((booking) => {
		let date = booking.Date;

		if (typeof ls[date] === "undefined") {
			ls[date] = {};
		}
		ls[date][booking.Time] = true;
	});
	localStorage.setItem("booking", JSON.stringify(ls));
}

function empty(arr) {
	arr.length = 0;
}

//Date Picker

$("#datepicker").change(function () {
	//Set dates on booking grid
	let str = this.value;
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
	// //Change color of booking system
	checkDate($(".slot.pSlot"));
	checkDate($(".slot.cSlot"));
	checkDate($(".slot.nSlot"));
});

//Slot Selection

$(".slot").click(function () {
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

//Modal Labels
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

$("#cartModal").on("show.bs.modal", function () {
	$("#cartitems").empty();
	let sCart = JSON.parse(sessionStorage.getItem("ShoppingCart")) || [];
	sCart.forEach((activityObj) => {
		$("#cartitems").append(
			`<div class="row"><div class="col"><p>${activityObj.Activity}</p></div><div class="col"><p>${activityObj.Time}</p></div><div class="col"><p>${activityObj.Date}</p></div><div class="col"></div><div class="col price">${activityObj.Price}</div></div>`
		);
    });
    let sum = 0;

	for (let i = 0; i < sCart.length; i++) {
        sum += parseFloat(sCart[i]["Price"]);
    }
    $('#totel').html("£" + sum)
});

//Purchase
$("#purchase").click(function () {
	let booking = JSON.parse(sessionStorage.getItem("ShoppingCart"));
	moveToLS(booking);
	sessionStorage.clear();
	$("#cartModal").modal("hide");
});