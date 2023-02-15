$(function () {
  // gnb
  $('#header .gnb_wrap .gnb .depth02_wrap').hide();
  $('.dimmed').hide();
  $('#header .gnb_wrap .gnb>li>a').on('mouseenter', function () {
    $('.dimmed').show();
    if (!$(this).next().is(':visible')) {
      $(this).next().slideDown().parent().siblings().find('.depth02_wrap').hide();
      $(this).next().find('.gnb_tit, .bg_txt, .depth02, .gnb_banner').animate({ opacity: 1 }, 100);
    } else {
      $(this).next().show();
    }
  });

  $('#header').on('mouseleave', function () {
    $('.dimmed').hide();
    // $(this).next().find('.gnb_tit, .bg_txt, .depth02, .gnb_banner').animate({ opacity: 0 }, 0);
    $(this).find('.gnb_tit, .bg_txt, .depth02, .gnb_banner').css({ opacity: 0 });
    $('#header .gnb_wrap .gnb .depth02_wrap').slideUp();
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
});
