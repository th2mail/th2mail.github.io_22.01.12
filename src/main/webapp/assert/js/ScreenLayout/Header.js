/**
 * 파일명 : Header.js
 * 설 명 : 
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */

const searchBtn = document.querySelector('#search-btn');
const searchFrm = document.querySelector('.search-frm');

const loginBtn = document.querySelector('#login-btn');
const loginFrm = document.querySelector('.login-frm');
const dimmed = document.querySelector('.dimmed');

searchBtn.addEventListener('click', (event) => {
  searchFrm.classList.toggle('active');

  dimmed.classList.remove('active');
  loginFrm.classList.remove('active');  
});

loginBtn.addEventListener('click', (event) => {
  searchFrm.classList.remove('active');

  dimmed.classList.toggle('active');
  loginFrm.classList.toggle('active');  
});