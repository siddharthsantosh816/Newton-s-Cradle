
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1, ground;
var bob1, bob2, bob3, bob4, bob5;
const bobDm= 40

function preload(){
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(400,150,290,20);
	//ground=new Roof(320,420,990,20)
	bob1=new Bob(320,400,bobDm/2);
	bob2=new Bob(360,400,bobDm/2);
	bob3=new Bob(400,400,bobDm/2);
	bob4=new Bob(440,400,bobDm/2);
	bob5=new Bob(480,400,bobDm/2);
	rope1= new Rope(bob1.body, roof1.body, -bobDm*2, 0);
	rope2= new Rope(bob2.body, roof1.body, -bobDm, 0);
	rope3= new Rope(bob3.body, roof1.body, 0,0 );
	rope4= new Rope(bob4.body, roof1.body, bobDm, 0);
	rope5= new Rope(bob5.body, roof1.body, bobDm*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
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

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
		//move bob1 to left
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-100})
    }
	if (keyCode === UP_ARROW) {
		//move bob1 and bob2 to left
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-100})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-100, y:-100})
    }
	if (keyCode === RIGHT_ARROW) {
		//move bob1, bob2 and bob3 to left
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-110, y:-100})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-110, y:-100})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-110, y:-100})
	}
	if (keyCode === DOWN_ARROW) {
		//move bob1 and bob2  to left and bob4 and bob5 to right
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-110, y:-100})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-110, y:-100})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:110, y:-100})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:110, y:-100})
	}	
	if (keyCode === TAB) {
		//move bob1, bob2 and bob3 to left and bob5 to right
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-100})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-100, y:-100})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-100, y:-100})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100, y:-100})
	}
		
    


}




