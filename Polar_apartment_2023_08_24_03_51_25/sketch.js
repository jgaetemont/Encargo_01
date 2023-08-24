let centerX, centerY;
let prevMouseX, prevMouseY;

function setup() {
  createCanvas(500, 500);
  centerX = width / 2;
  centerY = height / 2;
  prevMouseX = centerX;
  prevMouseY = centerY;
  background(255);
}

function draw() {
  // Calcula las coordenadas de los vértices del triángulo
  let x1 = centerX + (mouseX - centerX) / 2;
  let y1 = centerY + (mouseY - centerY) / 2;
  let x2 = centerX + cos(radians(120)) * 4;
  let y2 = centerY + sin(radians(120)) * 4;
  let x3 = centerX + cos(radians(240)) * 4;
  let y3 = centerY + sin(radians(240)) * 4;

  // Dibuja un rastro de colores con el movimiento previo del ratón
  let d = dist(mouseX, mouseY, prevMouseX, prevMouseY);
  let colorValue = map(d, 0, 20, 255, 0);
  stroke(colorValue, 0, 255 - colorValue, 50);
  line(mouseX, mouseY, prevMouseX, prevMouseY);
  
  // Actualiza las coordenadas previas del ratón
  prevMouseX = mouseX;
  prevMouseY = mouseY;

  // Dibuja el triángulo negro que sigue la posición del ratón
  fill(0);
  triangle(x1, y1, x2, y2, x3, y3);
}
