
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {

	createCanvas(1600,700);  

	engine = Engine.create();
  world = engine.world;

  BallDiameter=40;

  startBallPositionY=500;
  startBobPositionX=width/2;
	BallObject1=new Ball(640,startBallPositionY,BallDiameter);
	BallObject2=new Ball(720,startBallPositionY,BallDiameter);
	BallObject3=new Ball(800,startBallPositionY,BallDiameter);
	BallObject4=new Ball(880,startBallPositionY,BallDiameter);
  BallObject5=new Ball(960,startBallPositionY,BallDiameter);

  roofObject=new Roof(width/2,100,370,20);
  
  rope1=new String(BallObject1.body,roofObject.body,-160, 0)
  rope2=new String(BallObject2.body,roofObject.body,-80, 0)
	rope3=new String(BallObject3.body,roofObject.body,0, 0)
	rope4=new String(BallObject4.body,roofObject.body,80, 0)
	rope5=new String(BallObject5.body,roofObject.body,160, 0)

  Engine.run(engine);
  
}


function draw() {
  
  background("white");

  roofObject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  BallObject1.display();
  BallObject2.display();
  BallObject3.display();
  BallObject4.display();
  BallObject5.display();
    
  drawSprites();

  textSize(50)
  fill("black")
  text("Press Up Arrow To Start",50,150)
 
}

function keyPressed(){

if(keyCode==UP_ARROW){

Matter.Body.applyForce(BallObject1.body,BallObject1.body.position,{x:20,y:-150})

}

}

