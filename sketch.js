var canvas;
var jungle, pc_image, npc_image;
var bro_image, jungle_image;
var pc, point, junk,bro;

var vx=0;
var vy=0;
var g=0.05;

function preload()
{ 
 pc_image = loadImage("assets/player.png");
 jungle_image = loadImage("assets/Background.png");
}

function setup() 
{
  createCanvas(400,400)
  pc = createSprite(50,310,100,200);
  pc.addImage(pc_image);
  pc.scale=0.1;
  
}

function draw() 
{
  background(51);
  image(jungle_image,0,0,0,0);

  drawSprites();
}