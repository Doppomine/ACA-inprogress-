
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var akiCWalking, aki ,akiCStanding;
var mazeImg;
var akiFMS, akiImgFMS;
var wall1

function preload()
{
	mazeImg = loadImage('assets/Maze.png')
	akiImgFMS = loadImage('assets/ANN.png')
	akiCWalking = loadAnimation('assets/M1.png','assets/M2.png','assets/M3.png','assets/MO1.png','assets/MO2.png','assets/MO3.png')
	akiCStanding = loadAnimation('assets/S.png')
}

function setup() {
	createCanvas(windowWidth,windowHeight);
    aki = createSprite(468,100)
	aki.addAnimation("standing",akiCStanding)
	aki.scale = 0.25
    
	//verticle
	wall1 = createSprite(425,378,14,690);
	wall2 = createSprite(1111,378,14,690);
    wall3 = createSprite(491,390,14,240);
	wall4 = createSprite(558,491,14,190);
	wall5 = createSprite(498,114,14,150);
	wall6 = createSprite(558,170,14,120);
	//sideways
	wall7 = createSprite(770,34,700,14);
	wall8 = createSprite(770,723,700,14);
	wall9 = createSprite(630,232,150,14);
	wall9 = createSprite(520,179,60,14);
	
	
	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  



  imageMode(CENTER)
  image(mazeImg,windowWidth/2,windowHeight/2,700,700)
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY)

  
  drawSprites();
 
}



