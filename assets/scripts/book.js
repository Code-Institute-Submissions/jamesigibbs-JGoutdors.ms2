
//Gerate Popup

$(".slot").click(function () {
    checkColour()
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

function checkColour() {
 let colourCheck = document.getElementsByClassName("slot")
    for(let i = 0; i < colourCheck.length; i++) {
        let colour = getComputedStyle(colourCheck[i]).backgroundColor
        console.log(colour);
    }
}


// if (document.getElementsByClassName("slot").style.background-color == "#ff0000") {
//     $(this).click(function () {
// 	$("#myModal").modal("hide")})
// };

//Shopping Cart
