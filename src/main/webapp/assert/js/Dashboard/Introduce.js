/**
 * 파일명 : Introduce.js
 * 설 명 : 소개 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
$(document).ready(function () {
   
  /**
   * 가운데 동그라미 "Alian"에 마우스 오버 했을 때의 처리 이벤트
   */
  $('#introduce .square:nth-child(1)').hover(function () { $('#introduce .card:nth-child(1)').css({ 'background': 'rgba(169, 169, 169, 0.123)' }); },
                                             function () { $('#introduce .card:nth-child(1)').css({ 'background': 'var(--color-white)' });
  });
  $('#introduce .square:nth-child(2)').hover(function () { $('#introduce .card:nth-child(2)').css({ 'background': 'rgba(169, 169, 169, 0.123)' }); },
                                             function () { $('#introduce .card:nth-child(2)').css({ 'background': 'var(--color-white)' });
  });
  $('#introduce .square:nth-child(3)').hover(function () { $('#introduce .card:nth-child(3)').css({ 'background': 'rgba(169, 169, 169, 0.123)' }); },
                                             function () { $('#introduce .card:nth-child(3)').css({ 'background': 'var(--color-white)' });
  });
  $('#introduce .square:nth-child(4)').hover(function () { $('#introduce .card:nth-child(4)').css({ 'background': 'rgba(169, 169, 169, 0.123)' }); },
                                             function () { $('#introduce .card:nth-child(4)').css({ 'background': 'var(--color-white)' });
    });  
  
  /**
   * 
   */
  
});//END - document.ready