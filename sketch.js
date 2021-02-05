
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite, ground;
var dustbinSide1, dustbinSide2;
var dustbinBottomSprite, dustbinBottom;
var paper, paperSprite;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(400, 400, 1000, 10);
	groundSprite.shapeColor = "red";

	var ground_options = {isStatic : true}
	ground = Bodies.rectangle(400,400,1000,10,ground_options);
	World.add(world, ground);

	dustbinBottomSprite = createSprite(700, 390, 105, 10);
	dustbinBottomSprite.shapeColor = "green";
	var bottom_options = {isStatic : true}
	dustbinBottom = Bodies.rectangle(700, 390, 105, 10, bottom_options);
	World.add(world, bottom_options);

	dustbinSide1 = new dustbin(650, 350);
	dustbinSide2 = new dustbin(750, 350);

	paperSprite = createSprite(200, 380, 15, 15);
	paperSprite.visible=false;
	paper = new crumpledpaper(100, 300);
	
	Engine.run(engine);  
}


function draw() 
{
    rectMode(CENTER);
    background(0);

	dustbinSide1.display();
	dustbinSide2.display();
	paper.display();

	keyPressed();
    drawSprites(); 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
    {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-12});
	}
}