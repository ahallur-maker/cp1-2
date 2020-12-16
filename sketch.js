var paper1, binr, binb, binl, ground1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin_img = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Gr(750, 680, 1500, 20)
paper1 = new paper(100, 100, 30)
binb = new Bin(1200, 670, 200, 20)
binr = new Bin(1300, 600, 20, 100)
binl = new Bin(1100, 600, 20, 100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  image(dustbin_img, 1100, 500, 200, 200)
  ground1.display()
  paper1.display()
  //binb.display()
  //binr.display()
  //binl.display()
  drawSprites();
 
}


function keyPressed(){
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85})

}

}
