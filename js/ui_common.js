$(function () {
  // gnb
  $('#header .gnb_wrap .gnb .depth02_wrap').hide();
  $('#header .gnb_wrap .gnb>li').on('mouseenter', function () {
    // $('#header .gnb').addClass('on');
    $('#header .gnb').css('height', '377px');
    $('.dimmed').show();
    if (!$(this).find('.depth02_wrap').is(':visible')) {
      $(this).find('.depth02_wrap').slideDown().parent().siblings().find('.depth02_wrap').hide();
    } else {
      $(this).find('.depth02_wrap').show();
    }
  });

  $('#header .gnb_wrap').on('mouseleave', function () {
    $('#header .gnb').css('height', '64px');
    $('.dimmed').hide();
    $('#header .gnb_wrap .gnb .depth02_wrap').hide();
  });

  // search_wrap
  $('#header .btn_search').on('click', function () {
    $('body').addClass('on');
    $('.dimmed').show();
    $('#header .search_wrap').show();
  });

  $('#header .search_wrap .btn_close').on('click', function () {
    $('body').removeClass('on');
    $('#header .search_wrap').hide();
    $('.dimmed').hide();
  });

  // m_gnb
  $('#header .m_util_wrap .btn_menu').on('click', function () {
    $('.dimmed').show();
    $('body').addClass('on');
    $('#header .m_gnb_wrap').addClass('on');
  });

  $('#header .m_gnb>li').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $(this).find('.depth02').slideDown().parent().siblings().find('.depth02').slideUp();
  });

  $('#header .m_gnb .depth02>li').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
    $(this).find('.depth03').slideDown().parent().siblings().find('.depth03').slideUp();
  });

  $('#header .m_gnb_wrap .btn_close, .dimmed').on('click', function () {
    $('#header .m_gnb_wrap').removeClass('on');
    $('.dimmed').hide();
    $('body').removeClass('on');
  });

  // animate effect
  $('[class*=animate_fade], [class*=animate_stick]').each(function () {
    var _this = $('[class*=animate_fade]');

    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var st = $(this).scrollTop();

        if (st >= 0) {
          $('.main_visual').find('[class*=animate_stick]').addClass('on');
        }

        if (st >= posY - $(this).outerHeight() + 350) {
          $('.main_exhibition').find(_this).addClass('on');
        }
        if (st >= posY - $(this).outerHeight() + 1100) {
          $('.main_program').find(_this).addClass('on');
        }
        if (st >= posY - $(this).outerHeight() + 1700) {
          $('.main_etc').find(_this).addClass('on');
        }
        // if (st === 0) {
        //   _this.removeClass('on');
        // }
      })
      .trigger('scroll');
  });

  // main slider
  var mainSlider = new Swiper('.main_visual .main_slider', {
    loop: true,
    effect: 'fade',
    touchEventsTarget: 'wrapper',
    speed: 800,
    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_slider .btn_pause').on('click', function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
      $(this).html('재생하기');
      mainSlider.autoplay.stop();
    } else {
      $(this).html('일시정지');
      mainSlider.autoplay.start();
    }
  });

  // exhibition slider
  var exhibitionSlider = new Swiper('.exhibition_slider', {
    loop: false,
    allowTouchMove: false,
  });

  $('.btn_link').on('click', function (e) {
    e.preventDefault();
  });

  // program slider

  var infoNum = $('.program_info_slider').find('.swiper-slide');
  var postNum = $('.program_post_slider').find('.swiper-slide');

  var programInfoSlider = new Swiper('.main_program .program_info_slider', {
    loop: true,
    loopedSlides: infoNum.length,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    touchEventsTarget: 'wrapper',
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_program .btn_pause').on('click', function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
      $(this).html('재생하기');
      programInfoSlider.autoplay.stop();
    } else {
      $(this).html('일시정지');
      programInfoSlider.autoplay.start();
    }
  });

  var programPostSlider = new Swiper('.program_post_slider', {
    loop: true,
    touchEventsTarget: 'wrapper',
    loopedSlides: postNum.length,
    slidesPerView: 'auto',
    spaceBetween: 59,
    speed: 480,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });

  programInfoSlider.controller.control = programPostSlider;
  programPostSlider.controller.control = programInfoSlider;

  // collection slider
  var vw = window.innerWidth;

  var collectionoSlider = new Swiper('.collection_slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  responsiveSwiper();

  function responsiveSwiper() {
    if (vw >= 1000) {
      // 페이드 효과
      collectionoSlider.destroy();
      collectionoSlider = new Swiper('.collection_slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else if (570 < vw && vw < 1000) {
      // 슬라이드 효과
      collectionoSlider.destroy();
      collectionoSlider = new Swiper('.collection_slider', {
        loop: true,
        effect: 'slide',
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else if (vw < 570) {
      collectionoSlider.destroy();
      collectionoSlider = new Swiper('.collection_slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  window.addEventListener('resize', function () {
    vw = window.innerWidth;
    responsiveSwiper();
  });

  $('.collection_wrap .btn_pause').on('click', function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
      $(this).html('재생하기');
      collectionoSlider.autoplay.stop();
    } else {
      $(this).html('일시정지');
      collectionoSlider.autoplay.start();
    }
  });

  // footer
  $('#footer .btn_family').on('click', function () {
    $(this).next().toggleClass('on');
  });
});
