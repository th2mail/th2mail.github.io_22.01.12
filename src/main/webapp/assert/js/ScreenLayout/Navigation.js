/**
 * 파일명 : Navigation.js
 * 설 명 : 
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
const nav_list = document.querySelector('.nav_list');
const rightbar = document.querySelector('.rightbar');
const menus = document.querySelectorAll('.menu');
// const close_item = document.querySelector('.rightbar .close');
const txt_list = document.querySelectorAll('.sidebar ul li a');

/**
 * 메뉴를 클릭했을 때 실행되는 이벤트 함수
 */ 
nav_list.addEventListener('click', (event) => {

  // 네비게이션을 연다(Open).
  rightbar.classList.add('active');

  // 메뉴가 선택됐다는 표시를 지운다.
  menus.forEach((menu) => {
    menu.classList.remove('active');
    menu.classList.add('open');
  });

  // 사용자가 클릭한 메뉴를 선택한다.
  let target = event.target;
  if (target.parentNode.nodeName == 'A') {
    target = target.parentNode.parentNode;
  } else if (target.parentNode.nodeName == 'LI') {
    target = target.parentNode;
  } else {
    return;
  }
  target.classList.add('active');
  target.classList.add('open');

  txt_list.forEach((txt) => {
    txt.style.color = "#818487";
  });
  target.children[0].style.color = "#fff";

  // 메인화면의 너비를 줄인다.
  document.querySelector('.main-content').style.marginLeft = "344px";

  // 타이틀을 선택한 메뉴 이름으로 바꾼다.
  document.querySelector('.sidebar .rightbar input.title').value = target.dataset.title;

  // // $('.sidebar .rightbar .item').css({ "display": "none" });
  const subItems = document.querySelectorAll('.sidebar .rightbar .item');
  subItems.forEach((subItem) => {
    // subItem.style.visibility = "hidden";
    subItem.style.display = "none";
  });

  let subItem;
  if (target.dataset.title == `데이터 탐험`) {
    subItem = document.querySelector('.sidebar .rightbar .item.three');
  } else if (target.dataset.title == `시계열 데이터 분해`) {
    subItem = document.querySelector('.sidebar .rightbar .item.seven');
  } else if (target.dataset.title == `시계열 정상성 검사 및 변환`) {
    subItem = document.querySelector('.sidebar .rightbar .item.eight');
  } else if (target.dataset.title == `단변수 예측`) {
    subItem = document.querySelector('.sidebar .rightbar .item.nine');
  } else if (target.dataset.title == `다변수 예측`) {
    subItem = document.querySelector('.sidebar .rightbar .item.ten');
  } else if (target.dataset.title == `시계열 예측 분석 (차트)`) {
    subItem = document.querySelector('.sidebar .rightbar .item.twelve');    
  }
  // subItem.style.visibility = "visible";
  subItem.style.display = "block";
});

/**
 * 네비게이션의 닫기(<) 버튼을 클릭했을 때 실행되는 이벤트 함수
 */ 
// close_item.addEventListener('click', (event) => {
  
//   // 네비게이션을 닫는다(Close).
//   rightbar.classList.remove('active');

//   // 메뉴가 선택됐다는 표시를 지운다.
//   menus.forEach((menu) => {
//     menu.classList.remove('active');
//     menu.classList.remove('open');
//   });

//   txt_list.forEach((txt) => {
//     txt.style.color = "#818487";
//   });
  
//   // 메인화면의 너비를 넓힌다.
//   document.querySelector('.main-content').style.marginLeft = "78px";
// });













