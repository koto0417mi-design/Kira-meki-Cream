// Slick//
$('.voices-slider').slick({
  arrows: true,
  prevArrow: '<img src="/assets/image/arrow-left-circle-fill_pc.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="/assets/image/arrow-right-circle-fill_pc.svg" class="slide-arrow next-arrow">',
  dots: true,
  infinite: false,
  variableWidth:true,
  slidesToShow: 3,
  slidesToScroll: 3,


  responsive: [{
    breakpoint: 767.9,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<img src="/assets/image/arrow-left-circle-fill_sp.svg" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="/assets/image/arrow-right-circle-fill_sp.svg" class="slide-arrow next-arrow">',
      dots: true
    }
  }]
});

$('.accordion-title').on('click', function (e) {
  $(this).toggleClass("active");
  $(this).next().slideToggle();
});