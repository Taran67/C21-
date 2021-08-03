const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var top1;
var right;
var down;
var left;
var ball;

var button1;
var button2;




function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  top1 = new Ground(200, 10, 400, 20);
  right = new Ground(390, 200, 20, 400)
  down = new Ground(200, 390, 400, 20)
  left = new Ground(10, 200, 20, 400)

  var ball_options = {
    restitution: 1,
  }

  ball = Bodies.circle(200, 200, 20, ball_options)
  World.add(world, ball);

  button1 = createImg('right.png')
  button1.position(220, 30);
  button1.size(50, 50)
  button1.mouseClicked(hforce)

  button2 = createImg('up.png')
  button2.position(20, 30);
  button2.size(50, 50)
  button2.mouseClicked(yforce)

  
}

function draw() {
  background(51);

  top1.show();
  right.show();
  down.show();
  left.show();
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine);
  
}

function hforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})
}

function yforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}




