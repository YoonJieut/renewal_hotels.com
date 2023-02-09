$('document').ready(function(){

// 이미지 슬라이드(옆으로이동)//////////////////////////////////
setInterval(function(){
  $('div.slide ul.slide_box').animate({left:'-1300px'},600, function(){
    $('div.slide ul.slide_box').append($('div.slide ul.slide_box li').eq(0));
    $('div.slide ul.slide_box').css({left: 0});
  });
},4000);

//how_many popup

$('.how_many').click(function(){
  $('#how_many').fadeIn();
});
$('button.close').click(function(){
  $('#how_many').fadeOut();
});



// function count(type){
//   // 어른인원 수량 넣는 박스 불러오기
//   // 해당 박스 안에 있는 내용 불러오기
//   let ad_hm_value = document.getElementsByClassName('ad_hm_value')[0];
//   let number = ad_hm_value.innerText;

//   // 위에랑 동일 아동용
//   let ch_hm_value = document.getElementsByClassName('ch_hm_value')[0]
//   let number2 = ch_hm_value.innerText;

//   // 마이너스에 number >0, 0 밑으로 못 내려가게 막기
//   if(type === 'minus' && number>0){
//     number = parseInt(number)-1;
//   }else if(type === 'plus'){
//     number = parseInt(number)+1;
//   }else if(type === 'minus2' && number2>0){
//     number2 = parseInt(number2)-1;
//   }else if (type === 'plus2'){
//     number2 = parseInt(number2)+1;
//   };

// // 각각 어른용, 아동용으로 그 값을 넣어둠
// ad_hm_value.innerText = number
// ch_hm_value.innerText = number2

// // //팝업창에 해당되는 총인원수를 불러와서 입력
// document.getElementsByClassName('how_text')[0].innerText = parseInt(number)+parseInt(number2);
// };


// Swipe///////////
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
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

// jQuery ui 달력

$(function() {
  //input을 datepicker로 선언
  $("#datepicker").datepicker({
      dateFormat: 'yy-mm-dd' //달력 날짜 형태
      ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
      ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
      ,changeYear: true //option값 년 선택 가능
      ,changeMonth: true //option값  월 선택 가능                
      // ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
      // ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
      // ,buttonImageOnly: false //버튼 이미지만 깔끔하게 보이게함
      // ,buttonText: "선택" //버튼 호버 텍스트              
      ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
      ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
      ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
      ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
      ,autosize: true
  });                    
  
  //초기값을 오늘 날짜로 설정해줘야 합니다.
  $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
});


});

//btn 기능

function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;

// 아동
  const resultElement2 = document.getElementById('result2');
  let number2 = resultElement2.innerText;
  
  if(type === 'plus2') {
    number2 = parseInt(number2) + 1;
  }else if(type === 'minus2' && number2>0)  {
    number2 = parseInt(number2) - 1;
  }
  resultElement2.innerText = number2;

  document.getElementsByClassName('how_text')[0].innerText = parseInt(number)+parseInt(number2);
};
