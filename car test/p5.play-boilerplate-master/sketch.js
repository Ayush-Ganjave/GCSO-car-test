var speed,weight
var car,wall

function setup() {
  createCanvas(860,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(830, 200, 60, height/2);
  
  car.velocityX=random(50,200)
  
  speed=random(25,31)
  weight=random(400,1500)
  
}

function draw() {
  background("black");
  
  if(car.velocityX < 100 && car.isTouching(wall)){
  car.shapeColor=color("yellow") 
  }
  if(car.velocityX > 180 && car.isTouching(wall)){
    car.shapeColor=color("red") 
    }
    if(car.velocityX > 100 && car.velocityX < 180 && car.isTouching(wall)){
      car.shapeColor=color("green") 
      }
      if(car.isTouching(wall)){
        car.velocity=0
      }
      
    
  
  drawSprites();
}