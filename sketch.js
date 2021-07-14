
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;






function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball;

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2	
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundobj.display();
}


function keyReleased() {
	if (keyCode === DOWN_ARROW) { 
	  balls[balls.length - 1].shoot();
	}
  }
  
