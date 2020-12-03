const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1;
var box2;


function setup() {
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(200,100,20,20);
  ground1=new Ground(300,100,70,80);
  box2=new Box(150,70,30,30);
  
}

function draw() {
  background('black');
  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();
}