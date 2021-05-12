var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(600,390,80,50);
  movingRect.shapeColor = "green";

}

function draw() {
  background(108,0,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2){
     
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";


  }else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";

  }
  drawSprites();
}