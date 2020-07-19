
let winWidth = $(window).width();

$(window).resize(function(){
    winWidth = $(window).width();

    if (winWidth < 990) {
   $(".nav-list").append(`<li class="nav-item"><a class="nav-link" href="#">Shopping Cart</a></li>`)
}
else {
    let html = $(".nav-list").html();
    html = html.replace(`<li class="nav-item"><a class="nav-link" href="#">Shopping Cart</a></li>`, "");
    $(".nav-list").html(html);
}
});

