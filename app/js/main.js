$(function () {

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('.header__top').toggleClass('header__top--active');
    $('.header__top, .header__menu').css('background-color','#181740');
    $('.header__top').css('opacity','90%'); 
  });

  $('.contact-thanks__close').on('click', function(){
    $('.contact__wrapper .contact-thanks').css('transform', 'translateY(100%)');
  });

  $('.contact__btn').on('click', function(){
    $('.contact__wrapper .contact-thanks').css('transform', 'translateY(0)');
  });

  $(window).scroll(function(){ 
   if ( $(window).scrollTop() >= 1 ){                   
     $('.header__top, .header__menu').css('background-color','#181740');
     $('.header__top').css('opacity','90%'); 
    }
    else {
      $('.header__top, .header__menu').css('background-color','#222059');
      $('.header__top, .header__menu').css('opacity','100%');
      $('.header__top--active, .header__menu--active').css('background-color','#181740');
      $('.header__top--active, .header__menu--active').css('opacity','90%');
      
    }
  });

  $('.header__btn, .pop-up__btn').fancybox({
    autoFocus: false,
    closeExisting: true,
    closeBtn: false,
    modal: true,
    margin: 0,
    padding: 0,
    autoScale: true,
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'inline',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  
  const mediaQuery = window.matchMedia('(max-width: 1051px)')

  if (mediaQuery.matches) {
    $('.price__items').addClass('price__slider');
  }

  $('.price__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  })



  $('.client__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 3.09375 23.339844 L 16.375 10.058594 C 17.296875 9.140625 18.78125 9.140625 19.6875 10.058594 L 21.894531 12.265625 C 22.8125 13.183594 22.8125 14.667969 21.894531 15.578125 L 12.492188 25 L 21.90625 34.414062 C 22.820312 35.332031 22.820312 36.816406 21.90625 37.722656 L 19.695312 39.941406 C 18.78125 40.859375 17.296875 40.859375 16.386719 39.941406 L 3.105469 26.660156 C 2.175781 25.742188 2.175781 24.257812 3.09375 23.339844 Z M 3.09375 23.339844 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 21.90625 26.660156 L 8.625 39.941406 C 7.707031 40.859375 6.222656 40.859375 5.3125 39.941406 L 3.105469 37.734375 C 2.1875 36.816406 2.1875 35.332031 3.105469 34.421875 L 12.519531 25.011719 L 3.105469 15.597656 C 2.1875 14.679688 2.1875 13.195312 3.105469 12.285156 L 5.304688 10.058594 C 6.21875 9.140625 7.707031 9.140625 8.613281 10.058594 L 21.894531 23.339844 C 22.820312 24.257812 22.820312 25.742188 21.90625 26.660156 Z M 21.90625 26.660156 "/></g></svg></button>',
    responsive: [
    {
      breakpoint: 1801,
      settings: {
        arrows: false
      }
    }
  ]
  })

    $('.team__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 3.09375 23.339844 L 16.375 10.058594 C 17.296875 9.140625 18.78125 9.140625 19.6875 10.058594 L 21.894531 12.265625 C 22.8125 13.183594 22.8125 14.667969 21.894531 15.578125 L 12.492188 25 L 21.90625 34.414062 C 22.820312 35.332031 22.820312 36.816406 21.90625 37.722656 L 19.695312 39.941406 C 18.78125 40.859375 17.296875 40.859375 16.386719 39.941406 L 3.105469 26.660156 C 2.175781 25.742188 2.175781 24.257812 3.09375 23.339844 Z M 3.09375 23.339844 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 21.90625 26.660156 L 8.625 39.941406 C 7.707031 40.859375 6.222656 40.859375 5.3125 39.941406 L 3.105469 37.734375 C 2.1875 36.816406 2.1875 35.332031 3.105469 34.421875 L 12.519531 25.011719 L 3.105469 15.597656 C 2.1875 14.679688 2.1875 13.195312 3.105469 12.285156 L 5.304688 10.058594 C 6.21875 9.140625 7.707031 9.140625 8.613281 10.058594 L 21.894531 23.339844 C 22.820312 24.257812 22.820312 25.742188 21.90625 26.660156 Z M 21.90625 26.660156 "/></g></svg></button>',
    responsive: [
    {
      breakpoint: 1801,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  })

    $('.cases__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 3.09375 23.339844 L 16.375 10.058594 C 17.296875 9.140625 18.78125 9.140625 19.6875 10.058594 L 21.894531 12.265625 C 22.8125 13.183594 22.8125 14.667969 21.894531 15.578125 L 12.492188 25 L 21.90625 34.414062 C 22.820312 35.332031 22.820312 36.816406 21.90625 37.722656 L 19.695312 39.941406 C 18.78125 40.859375 17.296875 40.859375 16.386719 39.941406 L 3.105469 26.660156 C 2.175781 25.742188 2.175781 24.257812 3.09375 23.339844 Z M 3.09375 23.339844 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 21.90625 26.660156 L 8.625 39.941406 C 7.707031 40.859375 6.222656 40.859375 5.3125 39.941406 L 3.105469 37.734375 C 2.1875 36.816406 2.1875 35.332031 3.105469 34.421875 L 12.519531 25.011719 L 3.105469 15.597656 C 2.1875 14.679688 2.1875 13.195312 3.105469 12.285156 L 5.304688 10.058594 C 6.21875 9.140625 7.707031 9.140625 8.613281 10.058594 L 21.894531 23.339844 C 22.820312 24.257812 22.820312 25.742188 21.90625 26.660156 Z M 21.90625 26.660156 "/></g></svg></button>',
    responsive: [
    {
      breakpoint: 1201,
      settings: {
        arrows: false
      }
    }
  ]
  })

    $('.offer__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 3.09375 23.339844 L 16.375 10.058594 C 17.296875 9.140625 18.78125 9.140625 19.6875 10.058594 L 21.894531 12.265625 C 22.8125 13.183594 22.8125 14.667969 21.894531 15.578125 L 12.492188 25 L 21.90625 34.414062 C 22.820312 35.332031 22.820312 36.816406 21.90625 37.722656 L 19.695312 39.941406 C 18.78125 40.859375 17.296875 40.859375 16.386719 39.941406 L 3.105469 26.660156 C 2.175781 25.742188 2.175781 24.257812 3.09375 23.339844 Z M 3.09375 23.339844 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="50px" viewBox="0 0 25 50" version="1.1"><g id="surface1"><path d="M 21.90625 26.660156 L 8.625 39.941406 C 7.707031 40.859375 6.222656 40.859375 5.3125 39.941406 L 3.105469 37.734375 C 2.1875 36.816406 2.1875 35.332031 3.105469 34.421875 L 12.519531 25.011719 L 3.105469 15.597656 C 2.1875 14.679688 2.1875 13.195312 3.105469 12.285156 L 5.304688 10.058594 C 6.21875 9.140625 7.707031 9.140625 8.613281 10.058594 L 21.894531 23.339844 C 22.820312 24.257812 22.820312 25.742188 21.90625 26.660156 Z M 21.90625 26.660156 "/></g></svg></button>',
    responsive: [
    {
      breakpoint: 701,
      settings: {
        arrows: false
      }
    }
  ]
  })

     $(".header__top-inner a, .footer__link, .footer__menu-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-130}, 1500);
	});



})