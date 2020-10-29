//  Navigation on scroll// 
  function navScroll(){
    var nav = $(".start-header");
    var pos= nav.position();
    var windowpos = $(window).scrollTop();

    if (windowpos > pos.top){
      nav.addClass('scroll-on');
    }
    else {
      nav.removeClass('scroll-on');
    }
    
  }

    $(window).scroll(function (){
      navScroll();
    });
// banner slider
$('.bannerslider').slick({
  dots:true,
  infinite:true,
  speed:800,
  slidesToShow:1,
  autoplay:true,
  autoplaySpeed:3000,
  arrows:true,
})
// slick service section
   $('.slideservice').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
  {
    breakpoint:1300,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint:991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },

  {
    breakpoint:767,
    settings: {

      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,

    }
  }
  ]

    });
   // blog slider
    $('.blogslider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
  {
    breakpoint:1300,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint:991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },

  {
    breakpoint:767,
    settings: {

      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,

    }
  }
  ]

    });
// -----------------------magnific pop up js--
 $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
 // -----------------------------masonry js 
 $('.portfolio-1').masonry({
    itemSelector: '.grid-item',
    columnWidth:1,
    percentPosition:true
    

    });
 // ----------------count up on scroll js---
  $('.counter').counterUp({
        time: 2000
    });
  // ------smoothscroll
  
