var mar, marImg, barco, barcoImg
function preload(){
  marImg = loadImage("sea.png");
  barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite (400,200);
  mar.addImage (marImg);
  mar.velocityX = -5;
  mar.scale = 0.3;

  barco = createSprite (130,200);
  barco.addAnimation ("barco",barcoImg);
  barco.scale = 0.25;
}

function draw() {
  background("blue");
    drawSprites();

 
}
