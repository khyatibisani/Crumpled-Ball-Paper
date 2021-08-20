
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1, dustbin2, dustbin3;
var groundSprite;

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground = new Ground(800,690,1600,10);
	paper = new Paper(100,680,50);
	dustbin1 = new Dustbin(1200,670,200,20);
	dustbin2 = new Dustbin(1110,600,20,120);
	dustbin3 = new Dustbin(1290,600,20,120);

	
}


function draw() {
  background(0);
  //Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();



 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body, paper.body.position,{x:125,y:-120});
	}
}

