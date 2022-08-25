var flappy;
var ground, invisibleGround, groundImage;

var obstacleup, obstacledown;



function preload() {

  groundImage = loadImage("fondo.png");
  flappyImage = loadImage("flappy.gif");

  obstacle_down = loadImage("obstacle1.jpg")
  obstacle_up = loadImage("obstacle2.jpg")
}

function setup() {
createCanvas(800, 400);
  
//crear sprite de fondo
ground = createSprite(100,150);
ground.addImage("ground",groundImage);
ground.velocityX = -2;
  
invisibleGround= createSprite(200,390,400,10);

//crear sprite de Trex
flappy = createSprite(50,160,20,50);
flappy.addImage("running", flappyImage);
flappy.scale = 0.4;
}

function draw() {
background(220);

//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")) {
  flappy.velocityY = -10;
}

flappy.velocityY = flappy.velocityY + 0.8

spawnObstaclesdown();
spawnObstaclesup();

if (ground.x <  350) {
 ground.x = ground.width / 2;
}

flappy.collide(invisibleGround);
invisibleGround.visible = false;



drawSprites();
}


function spawnObstaclesdown() {
  //escribir aquí el código para aparecer los obstaculos de abajo
  if (frameCount % 50 === 0) {
    obstacledown = createSprite(800,165,10,40);
    obstacledown.addImage(obstacle_down)
    obstacledown.y = Math.round(random(350, 500))
    obstacledown.scale = 0.4;
    obstacledown.velocityX = -6;    
    }
}

function spawnObstaclesup() {
  //escribir aquí el código para aparecer los obstaculos de abajo
  if (frameCount % 50 === 0) {
    obstacledown = createSprite(800,15,10,40);
    obstacledown.addImage(obstacle_up)
    obstacledown.y = Math.round(random(0, 50))
    obstacledown.scale = 0.4;
    obstacledown.velocityX = -6;    
    }
}