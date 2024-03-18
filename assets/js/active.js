$(function () {
    $(".hero_slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        dots: true,
        dotsClass: "hero_slider_dots"
    });
});
$(function () {
    $(".featured_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<i class="slider_arrow fa-solid fa-long-arrow-left"></i>',
        nextArrow: '<i class="slider_arrow fa-solid fa-long-arrow-right"></i>',
    });
});
$(function () {
    $(".offer_banner_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
        autoplay: true,
    });
});
$(function () {
    $(".latest_news_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 500,
    });
});
/* Countdown Activation Js Start */

$("[data-countdown]").each(function () {
    var $this = $(this),
        finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime("" + "<div><h3>%D</h3><p>days</p></div> " + "<span>:</span>" + "<div><h3>%H</h3><p>hr</p></div> " + "<span>:</span>" + "<div><h3>%M</h3><p>min</p></div> " + "<span>:</span>" + "<div><h3>%S</h3><p>sec</p></div>"));
    });
});
/* //Countdown Activation Js End */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
new VenoBox();