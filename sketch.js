const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var rope;
var ground;
var engine;
var world;
var ball1,ball2,ball3,ball4

function preload(){


}
function setup() {
 var canvas = createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(750,590,1500,20);
ball1 = new Ball(200,200,80,80);
ball2 = new Ball(500,200,80,80);
ball3 = new Ball(400,100,70,70);
ball4 = new Ball(300,200,80,80);
rope = new Rope(ball1.body,{x:500,y:50});
}
function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
   
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}