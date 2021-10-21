import "./styles.css";

let canvas = document.getElementById("bigCanvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "hsl(120, 30%, 30%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStart(event) {
  ctx.fillStyle = "yellow";
  console.log("x: " + event.clientX + ", y: " + event.clientY);
  ctx.fillText(":)", event.clientX, event.clientY);
}

function drawEnd(event) {
  ctx.fillStyle = "red";
  console.log("x: " + event.clientX + ", y: " + event.clientY);
  ctx.fillText(":)", event.clientX, event.clientY);
}

function mouseMove(event) {
  ctx.fillStyle = "red";
  console.log("x: " + event.clientX + ", y: " + event.clientY);
  ctx.fillText(":)", event.clientX, event.clientY);
}

canvas.addEventListener("mousedown", drawStart);
canvas.addEventListener("mouseup", drawEnd);
canvas.addEventListener("mousemove", mouseMove);
