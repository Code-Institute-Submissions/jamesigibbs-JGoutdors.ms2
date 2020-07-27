
//Gerate Popup

$(".slot").click(function () {
	$(this).css("background-color", "#FD6A02");
	$("#myModal").modal("show");
	let cSlot = this;

	$("#addCart").click(function () {
		$(cSlot).css("background-color", "#ff0000");
		$("#myModal").modal("hide");
	});

	$("#cancel").click(function () {
		$(cSlot).css("background-color", "#008000");
	});

	$("button.close").click(function () {
		$(cSlot).css("background-color", "#008000");
	});
});

let colourCheck = document.getElementsByClassName("slot");
for(let i = 0; i < colourCheck.length; i++) {
    if(colourCheck[i].style.backgroundColor == "#ff0000") {
        $("#myModal").modal("hide")
    }
}

// if (document.getElementsByClassName("slot").style.background-color == "#ff0000") {
//     $(this).click(function () {
// 	$("#myModal").modal("hide")})
// };

//Shopping Cart
