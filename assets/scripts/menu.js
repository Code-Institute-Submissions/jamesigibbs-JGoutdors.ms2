
let winWidth = $(window).width();

$(window).resize(function(){
    winWidth = $(window).width();
});

if (winWidth < 990) {
   $(".nav-list").append(`<li class="nav-item">
									<a class="nav-link" href="#">Shopping Cart</a>
								</li>`)
}
else {
   $(".nav-list").remove(`<li class="nav-item">
									<a class="nav-link" href="#">Shopping Cart</a>
								</li>`)
}