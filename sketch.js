var trex ,trex_running;
var groundImage;
var cloudImage;

function preload()
{
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);

  //create a trex sprite
  trex = createSprite(50,150,20,50);-
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(390, 180, 1000, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;

  //creating invisible ground
  invisibleGround = createSprite(390, 200, 1000, 20);
  invisibleGround.visible = false;
}

function draw(){
  background("Grey");

  //console.log(frameCount);

  //console.log(trex.y);
  if (keyDown("space") && trex.y < 170)
  {
    trex.y = trex.y - 10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }

  ground.velocityX = -5;
  //console.log(ground.x);

  trex.collide(invisibleGround);
  spawnClouds()

  drawSprites();
}

function spawnClouds()
{
  if(frameCount % 60 === 0)
  {
    var cloud = createSprite(600, 100, 50, 10);
    cloud.addImage("cloud", cloudImage);
    cloud.velocityX = -3;
    cloud.y = Math.round(random(10, 60));
    cloud.scale = 0.6;
    console.log(cloud.y);
  }
}
