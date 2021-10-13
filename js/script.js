$(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('animate-icon');
      $('#overlay').fadeToggle();
      $('#overlay').css();
    });
  });
  $(document).ready(function(){
    $('#overlay').click(function(){
      $('#nav-icon').removeClass('animate-icon');
      $('#overlay').fadeToggle();
    });
  });  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items:1,
    nav:true,
    smartSpeed:500,
    autoplay:true,
})
new WOW().init();
scroller.init();
