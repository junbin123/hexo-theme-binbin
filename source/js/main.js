// 滚动一屏显示顶部按钮
var height = $(window).height();
var backToTop = $("#back-to-top");
backToTop.hide();
$(window).scroll(() => {
    if ($(window).scrollTop() > height) {
        backToTop.show();
    } else {
        backToTop.hide(500);
    }
})

// 移动端抽屉式菜单
$("#slider-icon").click(() => {
    $("#slider-icon").css("right", "260px");
    $("#slider-icon>img").attr("src", "/images/cancel.png");
    $("#slider").css("right", "0");
    $("#bg-cover,#bg-cover-up").fadeIn(400);
})

$("#bg-cover-up").click(() => {
    $("#slider-icon").css("right", "0");
    $("#slider-icon>img").attr("src", "/images/more.png");
    $("#slider").css("right", "-260px");
    $("#bg-cover,#bg-cover-up").fadeOut(400);
})




