
var ball;

//Crear espacio de nombre para Engine
const Engine = Matter.Engine;
//Crear espacio de nombre para World
const World = Matter.World;
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies;
//Crear espacio de nombre para Body
const Body = Matter.Body;

function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create (); 
  //Agregar world a engine
  world = engine.World;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   /*var ground_options ={
     isStatic: true
   };*/
  
  
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 


  
  drawSprites();
}

