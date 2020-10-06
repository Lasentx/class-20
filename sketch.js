var moving, fixed;

function setup() {
  createCanvas(1200,600);
  
  moving = createSprite(400, 200, 50, 80);
  fixed = createSprite(600, 400, 80, 50);

  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background(0);  

  moving.x = mouseX;
  moving.y = mouseY;

  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

  drawSprites();
}


/*
ALGORITHM
Logic to solve a problem

Pre-defined algorithms:
1. Detecting collision --> isTouching()
    The distance between the objects <= sum of half their widths
2. Bouncing off two objects ---> bounce()
*/