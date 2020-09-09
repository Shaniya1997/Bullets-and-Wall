var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(200,200,50,5);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  thickness = random(22,83);
  speed = random(30,52);
  weight = random(223,321);


   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(230,230,230);
}

function draw() {
  background("black");  
 


if(hasCollided(bullet,wall)){
bullet.velocityX =0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if (damage> 10){
    wall.shapeColor = color(255,0,0);

  }

  if (damage< 10){
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}
function hasCollided(object1,object2){
object1RightEdge = object1.x +object1.width;
object2LeftEdge = object2.x;
  if(object1RightEdge >= object2LeftEdge){
    return true;
  }
  return false;
}