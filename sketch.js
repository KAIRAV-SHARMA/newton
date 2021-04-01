
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stud = new Stand(400,200)
	stu =  new Cradle(200,500,100)
	studd = new Chain(stu.body,{x:200,y:200})
	stu2 = new Cradle(350,500,100);
	studd2 = new Chain(stu2.body,{x:350,y:200})
	stu3 = new Cradle(500,500,100);
	studd3 = new Chain(stu3.body,{x:500,y:200})

	stu4 = new Cradle(650,500,100);
	studd4 = new Chain(stu4.body,{x:650,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  stud.display();
  studd.display();
  stu.display();
 
  studd2.display();
  stu2.display();

  studd3.display();
  stu3.display();

  studd4.display();
  stu4.display();
  drawSprites();
 
}



