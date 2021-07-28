var ship, ship_floating, edges;
var seaBackground;

function preload(){
  ship_floating = loadAnimation("ship-1.png","ship-2.png");
  seaBackground = loadImage("sea.png")
}

function setup(){
  createCanvas(1100,800);
  
  //creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_floating);
  edges = createEdgeSprites();

  //adding scale and position to ship
  ship.scale = 0.5;
  ship.x = 200;

  //creating ground
  ground=createSprite(200,180,400,10);
  ground.addImage("abc",seaBackground)
  ground.velocityX=-4
}

function draw() {
  
  drawSprites();
}