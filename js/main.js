/** @type {HTMLCanvasElement}*/
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

window.addEventListener("mousemove", function (e) {
  if (drawing) {
    for (let i = 0; i < 3; i++) {
      const root = new Root(e.x, e.y);
      root.update();
    }
  }
});

window.addEventListener("mousedown", () => {
  drawing = true;
});

window.addEventListener("mouseup", () => {
  drawing = false;
});
