let posizioneX = 0;
let velocità = 1;

function setup() {
  createCanvas(508, 285);
}

function draw() {
  //sfondo
  background(183, 224, 232);

  //nuvole
  noStroke();
  fill(255);

  //nuvola sinistra
  ellipse(90, 65, 45, 35);
  ellipse(115, 55, 55, 45);
  ellipse(145, 65, 45, 30);
  rect(80, 62, 70, 18);

  //nuvola destra
  ellipse(370, 85, 35, 25);
  ellipse(390, 77, 45, 35);
  ellipse(415, 85, 35, 25);
  rect(370, 84, 50, 13);

  //acqua
  noStroke();
  fill(128, 197, 213);
  rect(0, 220, width, 70);

  //onde
  stroke(180, 225, 230);
  strokeWeight(2);
  strokeCap(ROUND);

  //ciclo for per ripetere 6 volte il disegno di due piccole linee, creando delle onde distribuite sull'acqua, la variabile i permette di spostare ogni gruppo di 85 pixel
  for (let i = 0; i < 6; i++) {
    let x = 20 + i * 85;
    line(x, 265, x + 25, 265);
    line(x + 35, 273, x + 50, 273);
  }

  //movimento della barca
  posizioneX = posizioneX + velocità;

  //se la barca supera il bordo, ricomincia da sinistra
  if (posizioneX > width) {
    posizioneX = -280;
  }

  //barca
  push();
  translate(posizioneX, 0);

  //albero della barca
  stroke(255, 140, 60);
  strokeWeight(5);
  line(240, 25, 240, 210);

  //vela sinistra
  noStroke();
  fill(255);
  triangle(170, 200, 225, 70, 230, 200);

  //vela destra
  triangle(250, 30, 250, 200, 385, 200);

  //scafo
  fill(255, 140, 60);
  quad(145, 210, 350, 210, 320, 265, 165, 265);
  triangle(165, 265, 320, 265, 295, 270);

  pop();
}
