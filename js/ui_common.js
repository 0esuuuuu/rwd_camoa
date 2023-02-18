$(function () {
  // gnb
  $('#header .gnb_wrap .gnb .depth02_wrap').hide();
  $('.dimmed').hide();
  $('#header .m_util_wrap').hide();
  $('#header .gnb_wrap .gnb>li').on('mouseenter', function () {
    $('#header .gnb_wrap').addClass('on');
    $('.dimmed').show();
    if (!$(this).find('.depth02_wrap').is(':visible')) {
      $(this).find('.depth02_wrap').slideDown().parent().siblings().find('.depth02_wrap').hide();
      // $(this).find('.depth02_wrap').animate({ opacity: 1 });
    } else {
      $(this).find('.depth02_wrap').show();
    }
    // $(this).find('.depth02_wrap').slideDown().parent().siblings().find('.depth02_wrap').hide();
  });

  $('#header').on('mouseleave', function () {
    $('.dimmed').hide();
    // $(this).find('.depth02_wrap').css({ opacity: 0 });
    $('#header .gnb_wrap .gnb .depth02_wrap').hide();
    $('#header .gnb_wrap').removeClass('on');
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
        if (st === 0) {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // main slider
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    effect: 'fade',
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

  var programInfoSlider = new Swiper('.program_info_slider', {
    loop: true,
    loopedSlides: infoNum.length,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 40,
    // autoplay: {
    //   delay: 5000,
    // },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.program_info_slider .btn_pause').on('click', function () {
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
    loopedSlides: postNum.length,
    slidesPerView: 'auto',
    spaceBetween: 59,
    speed: 500,
  });

  programInfoSlider.controller.control = programPostSlider;
  programPostSlider.controller.control = programInfoSlider;

  // collection slider
  var collectionoSlider = new Swiper('.collection_slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
