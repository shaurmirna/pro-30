const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var img;
var polygon;
function preload() {
  img = loadImage('polygon.png');
}

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(500,300,140,10);
  ground2 = new Ground(1000,200,120,10);

  //box1 = new Box(420,230,20,30);
  box2 = new Box(450,275,30,40);
  box3 = new Box(480,275,30,40);
  box4 = new Box(510,275,30,40);
  box5 = new Box(530,275,30,40);

  box6 = new Box(460,235,30,40);
  box7 = new Box(490,235,30,40);
  box8 = new Box(520,235,30,40);

  box9 = new Box(490,195,30,40);


  box10 = new Box(980,175,30,40);
  box11 = new Box(990,175,30,40);
  box12 = new Box(1030,175,30,40);
  box13 = new Box(990,140,30,40);

  box14 = new Box(1020,140,30,40);
  box15 = new Box(1000,110,30,40);
 
  polygon = Bodies.circle(50,200,20);
  //polygon.shapeColour= 254,244,0;
  World.add(world,polygon);

  sling= new SlingShot(polygon,{x:100, y : 200});

  
}

function draw() {
  background(0);
  Engine.update(engine);   
  
  ground.display();
  ground1.display();
  ground2.display();
  //box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  sling.display();
  polygon.display();
  keyPressed();
  imageMode(CENTRE);
  image(img, polygon.position.x , polygon.position.y ,40 ,40);

  
//  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function keyPressed(){
  if(keyCode === 32){
  sling.attach(polygon);
  }
}