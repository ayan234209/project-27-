
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob(250,350,30,30);
	bob2 = new Bob(310,350,30,30);
	bob3 = new Bob(370,350,30,30);
	bob4 = new Bob(430,350,30,30);
	bob5 = new Bob(490,350,30,30);
	roof = new Roof(370,150,350,20);
	rope1 = new Rope(bob1.body,roof.body,-120,0);
	rope2 = new Rope(bob2.body,roof.body,-60,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,60,0);
	rope5 = new Rope(bob5.body,roof.body,120,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10})


	}

}






