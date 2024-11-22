// 사과 한 알의 색깔: 이미지 색상 추출
document.querySelectorAll('.apple-gallery img').forEach(img => {
  img.addEventListener('mousemove', e => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const x = e.offsetX;
    const y = e.offsetY;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const rgb = `RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    // 가장 큰 색상 성분 표시
    const dominantColor = ['Red', 'Green', 'Blue'][[pixel[0], pixel[1], pixel[2]].indexOf(Math.max(...pixel))];

    document.getElementById('rgb-value').textContent = `${rgb} (${dominantColor})`;
    document.querySelector('.color-circle').style.backgroundColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  });
});

// 사과와 빛: 조명 색상 조절
document.querySelectorAll('input[type="range"]').forEach(slider => {
  slider.addEventListener('input', () => {
    const r = document.getElementById('red').value;
    const g = document.getElementById('green').value;
    const b = document.getElementById('blue').value;

    document.getElementById('apple').style.filter = 
      `brightness(1.2) sepia(1) saturate(1.5) hue-rotate(${r}deg)`;
    document.getElementById('apple').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
});
