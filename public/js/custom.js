
//***********************
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
});

$(Window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $(".header").addClass("header_fixed");
    }
    else {
        $(".header").removeClass("header_fixed");
    }
})