/**
 * 파일명 : dashboard.js
 * 설 명 : 대쉬보드 5번 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
$(document).ready(function () {



  // "데이터 준비" 큰 동그라미에 마우스를 올려놨을 때, 동작하는 함수
  $('#dashboard .cards.first .card.one .item .circle').hover(function () {
    
    // "데이터 준비, 1.센서 데이터 변환 ~ 6.데이터 전처리"에 동그라미 색깔을 자주색으로 바꾼다.
    $('#dashboard .cards.first .card .item .circle').css({
      'background': 'var(--color-wine)'
    });
    
    // "데이터 준비"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard .cards.first .card').css({
      'border-top': '5px dashed var(--color-wine)'
    });

    $('#dashboard .cards.first .card.four, \
    #dashboard .cards.first .card.five, \
    #dashboard .cards.first .card.six, \
    #dashboard .cards.first .card.seven').css({
      'border-bottom': '5px dashed var(--color-wine)'
    });

    $('#dashboard .cards.first .card.seven').css({
      'border-right': '5px dashed var(--color-wine)',
      'border-bottom': '5px dashed var(--color-wine)'
    });

    $('#dashboard .cards.second .card').css({
      'border-top': '5px dashed var(--color-wine)'
    });

    $('#dashboard .cards.second .card.one').css({
      'border-left': '5px dashed var(--color-wine)'
    });

    $('#dashboard .cards.second .card.four').css({
      'border-top': 'none'
    });

  }, function () {
    
    // "데이터 준비, 1.센서 데이터 변환 ~ 6.데이터 전처리"에 동그라미 색깔을 흰색으로 바꾼다.
    $('#dashboard .cards.first .card .item .circle').css({
      'background': 'var(--color-white)'
    });

    // "데이터 준비"에 선을 점선(dashed)에서 실선(solid)으로 바꾼다.
    $('#dashboard .cards.first .card').css({
      'border-top': '5px solid var(--color-wine)'
    });

    $('#dashboard .cards.first .card.four, \
    #dashboard .cards.first .card.five, \
    #dashboard .cards.first .card.six, \
    #dashboard .cards.first .card.seven').css({
      'border-bottom': '5px solid var(--color-wine)'
    });

    $('#dashboard .cards.first .card.seven').css({
      'border-right': '5px solid var(--color-wine)',
      'border-bottom': '5px solid var(--color-wine)'
    });

    $('#dashboard .cards.second .card').css({
      'border-top': '5px solid var(--color-wine)'
    });

    $('#dashboard .cards.second .card.one').css({
      'border-left': '5px solid var(--color-wine)'
    });

    $('#dashboard .cards.second .card.four').css({
      'border-top': 'none'
    });

  }); // End of Func.



  // "시계열 준비" 큰 동그라미에 마우스를 올려놨을 때, 동작하는 함수
  $('#dashboard .cards.second .card.one .item .circle').hover(function () {

    // "7.시계열 데이터 분해, 8.시계열 정상성 검사 및 변환"에 동그라미 색깔을 보라색으로 바꾼다.
    $('#dashboard .cards.second .card.two .item .circle, \
    #dashboard .cards.second .card.three .item .circle').css({
      'background': 'var(--color-purple)'
    });

    // "시계열 준비"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard .cards.second .card.one').css({
      'border-bottom': '5px dashed var(--color-purple)'
    });

    $('#dashboard .cards.third .card.two, \
    #dashboard .cards.third .card.three').css({
      'border-top': '5px dashed var(--color-purple)'
    });

  }, function () {
    
    // "7.시계열 데이터 분해, 8.시계열 정상성 검사 및 변환"에 동그라미 색깔을 흰색으로 바꾼다.
    $('#dashboard .cards.second .card.two .item .circle, \
    #dashboard .cards.second .card.three .item .circle').css({
      'background': 'var(--color-white)'
    });

    // "시계열 준비"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard .cards.second .card.one').css({
      'border-bottom': '5px solid var(--color-purple)'
    });

    $('#dashboard .cards.third .card.two, \
    #dashboard .cards.third .card.three').css({
      'border-top': '5px solid var(--color-purple)'
    });

  }); // End of Func.



  // "시계열 예측" 큰 동그라미에 마우스를 올려놨을 때, 동작하는 함수
  $('#dashboard .cards.second .card.four .item div:nth-child(1)').hover(function () {
    
    // "시계열 예측"에 선을 실선(solid)에서 점선(dashed)으로 바꾼다.
    $('#dashboard .cards.second .card.four .item').css({
      'border': '5px dashed var(--color-green)'
    });

    $('#dashboard .cards.third .card.seven').css({
      'border-right': '5px dashed var(--color-green)',
      'border-bottom': '5px dashed var(--color-green)',
      'border-radius': '0 0 20px 0'
    });

    $('#dashboard .cards.fourth .card').css({
      'border-top': '5px dashed var(--color-green)',
      'top': '-15px'
    });

    $('#dashboard .cards.fourth .card.seven').css({
      'border-top': 'none'
    });

    $('#dashboard .cards.fourth .card.one').css({
      'border-left': '5px dashed var(--color-green)'
    });

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(3)',
      'background: var(--color-green) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(4) a::before',
      'background: var(--color-green) !important;'
    );

    $('#dashboard .cards.second .card.four div:nth-child(6)').css({
      'background': 'var(--color-green)'
    });

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(7)::before',
      'background: var(--color-green) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(8)::before',
      'background: var(--color-green) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(9)::before',
      'background: var(--color-green) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(10)::before',
      'background: var(--color-green) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(11)::before',
      'background: var(--color-green) !important;'
    );

  }, function () {

    // "시계열 예측"에 선을 점선(dashed)에서 실선(solid)으로 바꾼다.
    $('#dashboard .cards.second .card.four .item').css({
      'border': '5px solid var(--color-green)'
    });

    $('#dashboard .cards.third .card.seven').css({
      'border-right': '5px solid var(--color-green)',
      'border-bottom': '5px solid var(--color-green)',
      'border-radius': '0 0 20px 0'
    });

    $('#dashboard .cards.fourth .card').css({
      'border-top': '5px solid var(--color-green)',
      'top': '-15px'
    });

    $('#dashboard .cards.fourth .card.seven').css({
      'border-top': 'none'
    });

    $('#dashboard .cards.fourth .card.one').css({
      'border-left': '5px solid var(--color-green)'
    });

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(3)',
      'background: var(--color-white) !important;'
    );
    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(4) a::before',
      'background: var(--color-white) !important;'
    );

    $('#dashboard .cards.second .card.four div:nth-child(6)').css({
      'background': 'var(--color-white)'
    });

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(7)::before',
      'background: var(--color-white) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(8)::before',
      'background: var(--color-white) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(9)::before',
      'background: var(--color-white) !important;'
    );

    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(10)::before',
      'background: var(--color-white) !important;'
    );
    
    document.styleSheets[0].addRule(
      '#dashboard .cards.second .card.four .item div:nth-child(11)::before',
      'background: var(--color-white) !important;'
    );

  });

  // 7. 시계열 데이터 분해의 circle을 hover했을 때 실행되는 이벤트
  $('#dashboard .cards.second .card.two .item .circle').hover(function () {
    $("#dashboard .cards.second .card.three > .item").hide("fast");
  }, function () {
    $("#dashboard .cards.second .card.three > .item").show("slow");
  });

  // 8. 시계열 정상성 검사 및 변환의 circle을 hover했을 때 실행되는 이벤트
  $('#dashboard .cards.second .card.three .item .circle').hover(function () {
    $("#dashboard .cards.second .card.two > .item").hide("fast");
  }, function () {
    $("#dashboard .cards.second .card.two > .item").show("slow");
  });

}); // End of document.ready

