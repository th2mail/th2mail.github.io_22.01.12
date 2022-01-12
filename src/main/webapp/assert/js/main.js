/**
 * 파일명 : main.js
 * 설 명 : 공통 JS
 * 최초 생성일 : 
 *
 * 수정일			수정내역 
 * ---------  -----------------------------------------------------------------
 * 
 */
// 헤더
$("header").load("/src/main/webapp/view/ScreenLayout/Header.html");

// 네비게이션
$("nav").load("/src/main/webapp/view/ScreenLayout/Navigation.html");

// introduceEX
$("#introduceEX").load("/src/main/webapp/view/Dashboard/IntroduceEX.html");

// 소개
$("#introduce").load("/src/main/webapp/view/Dashboard/Introduce.html");

// 대쉬보드
$("#dashboard").load("/src/main/webapp/view/Dashboard/Dashboard.html");

// 센서 데이터 현황
$("#data-status").load("/src/main/webapp/view/DataPreparation/DataStatus.html");

// 센서 데이터 선택
$("#data-select").load("/src/main/webapp/view/DataPreparation/DataSelect.html");

// 시계열 데이터 탐험 - Pandas Profiler
$("#explore-pandas-profiler").load("/src/main/webapp/view/DataPreparation/ExplorePandasProfiler.html");

// 시계열 데이터 탐험 - Sweetviz
$("#explore-sweetviz").load("/src/main/webapp/view/DataPreparation/ExploreSweetviz.html");

// 센서 데이터 로딩 & 프리뷰
$("#loading-preview").load("/src/main/webapp/view/DataPreparation/LoadingPreview.html");

// 센서 데이터 상관관계 그래프
$("#correlate-graph").load("/src/main/webapp/view/DataPreparation/CorrelateGraph.html");

// 결측치 시각화 및 처리
$("#visual-process-miss-value").load("/src/main/webapp/view/DataPreparation/VisualProcessMissValue.html");

// 이상치 시각화 및 처리
$("#visual-process-out-value").load("/src/main/webapp/view/DataPreparation/VisualProcessOutValue.html");

// 리셈플링 및 정규화
$("#resample-normalize").load("/src/main/webapp/view/DataPreparation/ResampleNormalize.html");

// 시계열 데이터 분해
$("#decompose").load("/src/main/webapp/view/TimeSeriesPreparation/Decompose.html");

// 시계열 정상성 검사 및 변환
$("#sanity-check-Transform").load("/src/main/webapp/view/TimeSeriesPreparation/SanityCheckTransform.html");

// 시계열 예측 with 단일 변수
$("#predict-single-variable").load("/src/main/webapp/view/TimeSeriesForecasting/PredictSingleVariable.html");

// 시계열 예측 with 다중 변수
$("#predict-multi-variable").load("/src/main/webapp/view/TimeSeriesForecasting/PredictMultiVariable.html");

// 시계열 결과 분석
$("#predict-result-analysis").load("/src/main/webapp/view/PerformanceAnalysis/PredictResultAnalysis.html");



const loginCloseBtn = document.querySelector('.la-times');

loginCloseBtn.addEventListener('click', (event) => {
  dimmed.classList.remove('active');
  loginFrm.classList.remove('active');  
});