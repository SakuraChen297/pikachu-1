let a = document.querySelector(window);
let face = document.querySelector(".face.left");
let leftEye = document.querySelector(".eye.left");
let cool = document.querySelector(".cool");
if (a.style.min - width === "500px") {
  face.onclick = () => {
    leftEye.style.opacity = 0;
    cool.style.display = "block";
  };
}
