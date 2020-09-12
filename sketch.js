
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin,ground;
var dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper=new Paper(350,660,120,20);

	ground=new Ground(600,height,1200,20);
	groundSprite.shapeColor=color(255)

	dustbin=createSprite(355,660,400,24);
dustbin.shapeColor="red";

dustbin2=createSprite(560,520,20,300);
dustbin2.shapeColor="red";

dustbin3=createSprite(160,520,20,300);
dustbin3.shapeColor="red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
paper.display();
ground.display();
dustbin2.display();
dustbin.display();
dustbin3.display();
drawSprites();
}
function keyPressed(){

	if(keyCode=== UP_ARROW){
		
		
		Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85});

	}
}



