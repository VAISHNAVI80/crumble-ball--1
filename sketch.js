
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bin1,bin2,bin3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	
	paper=new Paper(50,378,20);

	bin1=new Bin(955,360,20,70);
	bin2=new Bin(1045,360,20,70);
	bin3=new Bin(1000,380,80,20);

	ground=new Ground(600,height,1200,20);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  drawSprites();

paper.display();

 bin1.display();
 bin2.display();
 bin3.display();

ground.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	
}


}

