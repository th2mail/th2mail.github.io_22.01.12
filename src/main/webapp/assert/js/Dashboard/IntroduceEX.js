/**
 * 파일명 : IntroduceEX.js
 * 설 명 : 소개 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
$(document).ready(function () {
   
  $('#introduceEX .box').hover(function () {
    $('#introduceEX .item').hide();
  }, function () {
    $('#introduceEX .item').show();
  });
  
});//END - document.ready