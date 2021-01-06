const Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var wire;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18, b19,b20;
var ball;
var ground;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(350,650,40);
  wire = new Wire(ball.body, {x:350, y:200});
  ground=new Ground(400,750);

  rectMode(CENTER);

  b1= new Box(500,500,40,40);
  b2= new Box(500,540,40,40);
  b3= new Box(500,580,40,40);
  b4= new Box(500,620,40,40);
  b5= new Box(540,500,40,40);
  b6= new Box(540,540,40,40);
  b7= new Box(540,580,40,40);
  b8= new Box(540,620,40,40);
  b9= new Box(580,500,40,40);
  b10= new Box(580,540,40,40);
  b11= new Box(580,580,40,40);
  b12= new Box(580,620,40,40);
  b13= new Box(620,500,40,40);
  b14= new Box(620,540,40,40);
  b15= new Box(620,580,40,40);
  b16= new Box(620,620,40,40);
  b17= new Box(660,500,40,40);
  b18= new Box(660,540,40,40);
  b19= new Box(660,580,40,40);
  b20= new Box(660,620,40,40);


}
 


function draw() {
  background("white");

  Engine.update(engine);
  ball.display();
  wire.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
}

function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
