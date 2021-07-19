const Engine = Matter.Engine;
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint





var engine,world;
var player,g




function preload(){



}


function setup(){
   createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  player = new Player(200,200)
g = new ground(10,350)
  
 
}


function draw(){
  background("green")
  Engine.update(engine)
 player.display()
 g.display()
}
