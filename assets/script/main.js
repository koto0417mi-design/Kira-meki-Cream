// Slick//
$('.voices-slider').slick({
  arrows:true,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  

  responsive: [{
      breakpoint: 767.9,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots: true
      }
    }]
});

$('.accordion-title').on('click', function (e) {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});