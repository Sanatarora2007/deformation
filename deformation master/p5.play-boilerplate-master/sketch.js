var car, wall
var speed,weight
var deformation

function setup() {
  createCanvas(1600,400);
  wall=createSprite(750, 200, 15, 200);
  car= createSprite(75,200,50,50);
  weight=random(1552,3000)
  speed=random(15,65)
  deformation=(0.5*weight*speed*speed)/22500
  console.log(deformation)
  car.velocityX=speed
}

function draw() {
  background(0);  
  car.shapeColor="blue"
  wall.shapeColor="white"
  car.collide(wall)
  if(deformation<100 && deformation>1){
    car.shapeColor="green"
  }
  if(deformation>100 && deformation<180){
    car.shapeColor="yellow"
  }
  if(deformation>180){
    car.shapeColor="red"
  }
  
  drawSprites();
}