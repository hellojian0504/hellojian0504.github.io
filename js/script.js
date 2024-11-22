// 사과 한 알의 색깔: 한 사진에서 특정 지점의 색상 추출
const appleImage = document.getElementById('single-apple');
const colorInfo = document.getElementById('color-info');
const rgbValue = document.getElementById('rgb-value');
const colorCircle = document.querySelector('.color-circle');

// 사과 사진의 특정 지점 색상 가져오기
appleImage.addEventListener('mousemove', e => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = appleImage.width;
  canvas.height = appleImage.height;

  // 이미지를 캔버스에 그리기
  ctx.drawImage(appleImage, 0, 0);

  // 커서 위치에서의 색상 데이터 가져오기
  const rect = appleImage.getBoundingClientRect();
  const x = e.clientX - rect.left; // 커서의 X 좌표
  const y = e.clientY - rect.top;  // 커서의 Y 좌표
  const pixel = ctx.getImageData(x, y, 1, 1).data;

  // RGB 값 표시
  const rgb = `RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  rgbValue.textContent = rgb;

  // 색상 원형 표시
  colorCircle.style.backgroundColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
});
