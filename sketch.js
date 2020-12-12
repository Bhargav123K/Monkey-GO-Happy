
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(450,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x)
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
}


function draw() {
background("white")
 
  if(ground.x<0){
    ground.x = ground.width/2 
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
    
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  
  
  food();
  obstacles();
  
  if(obstacleGroup.isTouching(monkey)){
     
     monkey.velocityX = 0
     ground.velocityX = 0
     obstacleGroup.setVelocityXEach(0)
     FoodGroup.setVelocityXEach(0) 
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    
     }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,130,50);
  
  drawSprites();
}

function food(){
  
if (frameCount % 80 === 0) {
  
   banana = createSprite(450, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -4;
    banana.lifetime = 120
  
    FoodGroup.add(banana);
}   
}

function obstacles(){
  
  if (frameCount % 300 === 0){
    
     obstacle= createSprite(450, 320, 40, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15
    obstacle.velocityX = -4;
    obstacle.lifetime = 120
  
    obstacleGroup.add(obstacle);
  }
}



