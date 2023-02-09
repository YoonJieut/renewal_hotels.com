$('document').ready(function(){

// 이미지 슬라이드 (옆으로 이동)//////////////////////////////////
setInterval(function(){
  $('div.slide ul.slide_box').animate({left:'-1300px'},600, function(){
    $('div.slide ul.slide_box').append($('div.slide ul.slide_box li').eq(0));
    $('div.slide ul.slide_box').css({left: 0});
  });
},4000);


});

// Swipe///////////
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizen',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});