var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy = loadImage("images/fairy.png");
}

function setup() {
	createCanvas(800, 750);
	fairy = createSprite (300,300);


	
	fairyImg = loadAnimation("images/fairyImagen1.png","images/faiyrImagen2.png")
    fairyVoice = loadSound("sound/JoyMusic.mp3");
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  

  drawSprites();
  fairy.display();
  if(keyDown("left_arrow")){
	fairy.x=fairy.x-10;
  }
  if(keyDown("right_arrow")){
	fairy.x=fairy.x+10;
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(star.y> 470 && starBody.position.y> 470){
	 Matter.body.setStatic(starBody,true);
	}
	
} 
}
