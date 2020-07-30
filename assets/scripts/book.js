
//Gerate Popup
    let cSlot;

$(".slot").click(function () {
     cSlot = this;
     console.log(cSlot);
    if (cSlot.style.backgroundColor == "rgb(0, 128, 0)") {
        $(cSlot).css("background-color", "#FD6A02");
	    $("#myModal").modal("show");
    }
    
	$("#addCart").click(function () {
		$(cSlot).css("background-color", "rgb(255, 0, 0)");
        $("#myModal").modal("hide");
	});

	$("#cancel").click(function () {
		$(cSlot).css("background-color", "#008000");
	});

	$("button.close").click(function () {
		$(cSlot).css("background-color", "#008000");
    });
});

//Shopping Cart
