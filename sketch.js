var carrot, carrotImage;
var girl, girlImage;
var sweet, sweetImage;
var backGround, backgroundImage;
var ground, invisibleGround;
var FoodGroup, obstaclesGroup;
var gameOver, gameOverImage;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  carrotImage = loadImage("images/carrot.jpg");
  potatoImage = loadImage("images/potato.jpg");
  broccoliImage = loadImage("images/broccoli.jpg");
  cabbageImage = loadImage("images/cabbage.jpg");
  bonusImage=loadImage("images/bonus.png")
  girlImage = loadImage("images/girl.jpg");
  sweet1Image = loadImage("images/Cupcake.jpg");
  sweet2Image = loadImage("images/cupcake.jpg");
  sweet3Image = loadImage("images/candy.jpg");
  sweet4Image = loadImage("images/candy cane.jpg");
  sweet5Image = loadImage("images/lolipop.jpg");
  sweet6Image = loadImage("images/icecream.jpg");
  sweet7Image = loadImage("images/macroon.png");
  sweet8Image = loadImage("images/sweet.jpg");
  backgroundImage = loadImage("images/background.jpg");
  resetImage=loadImage("images/images.jpg")
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  gameOverImage= loadImage("images/gameover.png")
}

function setup() {
  createCanvas(800, 600);
  backGround = createSprite(1000,330, 100, 300);
  backGround.addImage(backgroundImage);
  backGround.scale = 0.9;
  backGround.velocityX = -2;
  backGround.x = backGround.width/2;
 
  girl = createSprite(80,450, 20, 20);
  girl.addImage(girlImage);
  girl.scale = 0.20;
  invisibleGround = createSprite(600,550,6700, 10);
  invisibleGround.visible = false;
  girl.debug = true
 
  gameover = createSprite(400,250,200,500);
  gameover.addImage(gameOverImage);
  gameover.scale = 3.5;
  reset=createSprite(200,180,200,500)
  reset.addImage(resetImage)

score=0;
}

function draw() {
  background(0);
  if(gameState === PLAY){
 gameover.visible = false;
 reset.visible =false;
 
   if(backGround.x<380){
    backGround.x = backGround.width/2;
 }
  if (keyDown("space")) {
    girl.velocityY = -10;
  }
  girl.velocityY = girl.velocityY + 0.6;
  
  spawnFood();
  spawnObstacles();
 if (obstaclesGroup.isTouching(girl)) {
gameState=END;
}}

  else if (gameState === END) {
      gameover.visible = true;
      // reset.visible = true;
       
     obstaclesGroup.visible = false;
     FoodGroup.visible = false;
          
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0); 
  }
 
  girl.collide(invisibleGround);

  drawSprites()
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  }

  function spawnFood() {
    if(frameCount % 120 === 0) {
     var sweet = createSprite(500,165,10,40);
     sweet.velocityX = -(7);
      
      //generate random obstacles
      var rand = Math.round(random(1,8));
      switch(rand) {
        case 1: sweet.addImage(sweet1Image);
                break;
        case 2: sweet.addImage(sweet2Image);
                break;
        case 3: sweet.addImage(sweet3Image);
                break;
        case 4: sweet.addImage(sweet4Image);
                break;
        case 5: sweet.addImage(sweet5Image);
                break;
        case 6: sweet.addImage(sweet6Image);
                break;
        case 7: sweet.addImage(sweet7Image);
                break;
        case 8: sweet.addImage(sweet8Image);
                break;
        default: break;
        } 
      
      sweet.lifetime = 600;
  sweet.scale=0.4
      FoodGroup.add(sweet)
    } }


function spawnObstacles() {
  
    if(frameCount % 75 === 0) {
      var obstacle = createSprite(500,165,10,40);
      obstacle.velocityX = -(6 + score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: obstacle.addImage(potatoImage);
                break;
        case 2: obstacle.addImage(carrotImage);
                break;
        case 3: obstacle.addImage(cabbageImage);
                break;
        case 4: obstacle.addImage( broccoliImage);
                break;
        default: break;
        } 
      
      obstacle.lifetime = 600;
      obstacle.scale=0.1
      obstaclesGroup.add(obstacle)
    } }

   