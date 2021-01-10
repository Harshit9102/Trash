
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject,paperObject,groundObject;
var world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paperObject=new PaperBall(200,450,70);
  dustbinObject=new Ground(width/2,670,width,20);
  groundObject=new Dustbin(1200,650);

  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1600,
      height:700,
      wireFrames:false
    }
  });

 
  
  Engine.run(engine);
  Render.run(render);
 
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 paperObject.display();
 dustbinObject.display();
 groundObject.display();

  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW ){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-70})

  } 
 }




