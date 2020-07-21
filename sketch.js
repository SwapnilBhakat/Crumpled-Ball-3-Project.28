var packageBody,ground,slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(800,590,1600,20)
 paperBall=new Paper(200,300)
 dustbin=new Dustbin(1200,570,200,20)
 slingshot =new SlingShot(paperBall.body,{x:200, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 ground.display();
 paperBall.display();
 dustbin.display();
 slingshot.display();    

}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:300,y:-1000});
	}
}

function mouseDragged(){
    Matter.Body.setPosition( paperBall.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){ 
    if(keyCode === 32)
    { slingshot.attach(paperBall.body ); }
}



