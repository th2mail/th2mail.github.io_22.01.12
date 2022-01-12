/**
 * 파일명 : Dashboard-3.js
 * 설 명 : 대쉬보드 3번 화면
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */

var canvas1 = document.querySelectorAll(".canvas1");
canvas1.forEach((canvas) => {
  var draw = canvas.getContext("2d");

  //조절점이 2개
  draw.beginPath();
  draw.moveTo(0,75);
  //bezierCurveTo(조절점1x, 조절점1y, 조절점2x, 조절점2y, 선의 끝점x, 선의 끝점y)
  draw.bezierCurveTo(100,0, 200,150, 300,75);
  draw.lineWidth = 10;
  draw.strokeStyle = "rgb(27, 165, 165)";  
  draw.stroke();
});

var canvas2 = document.querySelectorAll(".canvas2");
canvas2.forEach((canvas) => {
  var draw = canvas.getContext("2d");

  //조절점이 2개
  draw.beginPath();
  draw.moveTo(0,75);
  //bezierCurveTo(조절점1x, 조절점1y, 조절점2x, 조절점2y, 선의 끝점x, 선의 끝점y)
  draw.bezierCurveTo(100,0, 200,150, 300,75);
  draw.lineWidth = 10;
  draw.strokeStyle = "rgb(246, 73, 167)";
  draw.stroke();
});

var canvas3 = document.querySelectorAll(".canvas3");
canvas3.forEach((canvas) => {
  var draw = canvas.getContext("2d");

  //조절점이 2개
  draw.beginPath();
  draw.moveTo(0,75);
  //bezierCurveTo(조절점1x, 조절점1y, 조절점2x, 조절점2y, 선의 끝점x, 선의 끝점y)
  draw.bezierCurveTo(100,0, 200,150, 300,75);
  draw.lineWidth = 10;
  draw.strokeStyle = "rgb(254, 106, 106)";
  draw.stroke();
});

var canvas4 = document.querySelectorAll(".canvas4");
canvas4.forEach((canvas) => {
  var draw = canvas.getContext("2d");

  //조절점이 2개
  draw.beginPath();
  draw.moveTo(0,75);
  //bezierCurveTo(조절점1x, 조절점1y, 조절점2x, 조절점2y, 선의 끝점x, 선의 끝점y)
  draw.bezierCurveTo(100,0, 200,150, 300,75);
  draw.lineWidth = 10;
  draw.strokeStyle = "rgb(251, 243, 76)";
  draw.stroke();
});