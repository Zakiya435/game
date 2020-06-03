var man,man_img,man_right,man_left;
var bg;
var ground,ground2,ground3,ground4,invisibleGround;
var germ,germ2,germs_img;
var bullet,pills;
var door,door_img;



function preload()
{
  //images
  bg = loadImage("sprites/bg.jpg");
  man_left = loadImage("sprites/left1.gif");
  man_right = loadImage("sprites/right1.gif");
  pills = loadImage("sprites/pills.png");
  germs_img = loadImage("sprites/viruses.png");
  door_img = loadImage("sprites/door.png");
}



function setup() 
{
  createCanvas(1200,700);

  //man details
  man = createSprite(50,645, 50, 50);
  man.addAnimation("right",man_right);
  man.addAnimation("left",man_left);  
  man.scale = 0.4;  
  man.setCollider("rectangle",0,0,40,250);

  //germs
  //first level germ
  germ = createSprite(1200,645,30,30);
  germ.addImage("germ",germs_img);
  germ.scale = 0.25;
  germ.velocityX = -10;
  //second level germ
  germ2 = createSprite(0,445,30,30);
  germ2.addImage("germ",germs_img);
  germ2.scale = 0.25;
  germ2.velocityX = 10;

  
  //ground
  ground = createSprite(600,699,1200,5);
  ground.shapeColor = '#0f0';
  ground2 = createSprite(400,500,1000,5);
  ground2.shapeColor = '#0f0';
  ground3 = createSprite(750,300,1150,5);
  ground3.shapeColor = '#0f0';
  ground4 = createSprite(400,150,1100,5);
  ground4.shapeColor = '#0f0';
  //edges
  topedge = createSprite(600,0,1200,2);
  bottomedge = createSprite(600,700,1200,2);
  leftedge = createSprite(0,350,2,1000);
  rightedge = createSprite(1200,350,2,1000);
  // invisible ground
  invisibleGround = createSprite(370,480,900,5)
  invisibleGround.visible = false;


  //door
  door = createSprite(70,70,100,150);
  door.addAnimation("door",door_img);
  door.scale = 0.7;

}



function draw() 
{
  background(bg);

  //collision of ground and edges
  man.collide(ground);
  man.collide(ground2);
  man.collide(ground3);
  man.collide(ground4); 
  man.collide(topedge);
  man.collide(bottomedge);
  man.collide(leftedge);
  man.collide(rightedge);
  man.collide(germ);
  man.collide(germ2);
  germ2.collide(invisibleGround);
   
  

  //controls of man
  if(keyDown("RIGHT_ARROW"))
  {
   man.changeAnimation("right",man_right);
   man.x += 10;          
  }
  if(keyDown("LEFT_ARROW"))
  {
    man.changeAnimation("left",man_left);
    man.x -= 10;
  }
  if(keyDown("UP_ARROW"))
  {        
    man.velocityY -= 7;
  }


  //gravity
  man.velocityY = man.velocityY + 0.8;
  germ2.velocityY = germ2.velocityY + 0.8;


  //bullets when space is pressed
  if(keyDown("space"))
  {
    bullet = createSprite(man.x+20,man.y+15,10,20);
    bullet.addImage("pill",pills);
    bullet.scale = 0.1;

    //direction of bullets according to levels
    if((man.y <= 450 && man.y >= 290)||(man.y >=0 && man.y <=150))
    {
      bullet.velocityX = -15;
    }
    else
    {
      bullet.velocityX = 15;
    }
    /*bullet.collide(germ);
    bullet.collide(germ2);
    if(bullet.collide(germ))
    {
      console.log("collided");
    }
    else if(bullet.collide(germ2))
    {
      bullet.x = 2000;
      germ2.x  = 2000;
    }*/
  }  

  //if the germ touches man
  if(man.collide(germ))
  {
    
  }

  drawSprites();
}