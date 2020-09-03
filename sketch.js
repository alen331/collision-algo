var sprite1, sprite2;

function setup() {
  createCanvas(800,400);

  sprite1 = createSprite(400, 200, 50, 50);
  sprite1.shapeColor = "red";
  sprite2 = createSprite(100, 200, 60, 60);
  sprite2.shapeColor = "red";
}

function draw() {
  background(0);  
sprite1.x = World.mouseX;
sprite1.y = World.mouseY;

if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
  && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2
  &&sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2
  && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2){
    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";
  }

else {
  sprite1.shapeColor = "red";
  sprite2.shapeColor = "red";
}
  drawSprites();
}