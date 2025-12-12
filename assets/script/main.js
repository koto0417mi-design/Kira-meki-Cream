// Slick //
$('.voices-slider').slick({
  arrows: true,
  prevArrow: '<img src="/assets/image/arrow_left_circle_fill.svg" class="slide-arrow prev-arrow" alt="戻る">',
  nextArrow: '<img src="/assets/image/arrow_right_circle_fill.svg" class="slide-arrow next-arrow" alt="進む">',
  dots: true,
  infinite: false,
  variableWidth:false,
  centerMode: false,
  adaptiveHeight: false,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [{
    breakpoint: 767.9,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
    }
  }]
});


// accordion //
$('.accordion-title').on('click', function (e) {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});


// scrolltop //
$(function () {
const pageTop = $(".scroll-top-btn");

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    pageTop.fadeIn(300).css("display","flex");
  } else {
    pageTop.fadeOut(300);
  }
});
});