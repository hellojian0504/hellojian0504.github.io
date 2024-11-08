// RGB 분석 기능
const appleImage = document.getElementById("apple-image");
const rgbDisplay = document.getElementById("rgb-display");

appleImage.addEventListener("mousemove", (e) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = appleImage.width;
  canvas.height = appleImage.height;
  context.drawImage(appleImage, 0, 0);

  const x = e.offsetX;
  const y = e.offsetY;
  const pixel = context.getImageData(x, y, 1, 1).data;
  const rgbColor = `RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

  rgbDisplay.textContent = rgbColor;
});

// 조명 변화 기능
const lightDisplay = document.getElementById("light-display");

function changeLight(color) {
  switch(color) {
    case 'white':
      lightDisplay.style.backgroundColor = "white";
      lightDisplay.textContent = "백색광";
      break;
    case 'blue':
      lightDisplay.style.backgroundColor = "blue";
      lightDisplay.textContent = "청색광";
      break;
    case 'red':
      lightDisplay.style.backgroundColor = "red";
      lightDisplay.textContent = "적색광";
      break;
  }
}
