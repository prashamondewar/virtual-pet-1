var database;
var foodS;
var foodStock; 
var dog;
var happyDog; 
function preload() { 
doggo = loadImage("images/dogImg.png"); 
doghappy = loadImage("images/dogImg1.png") }

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,120,40,60)
  dog.addImage(doggo)
  database = firebase.database;
  foodStock = database.ref("food")
  foodStock.on("value", readStock)
}


function draw() {  
background(46,139,87)
if (keyDown(UP_ARROW)) {
  foodStock = foodStock-1;
  writeStock(foodS);
  dog.addImage(doghappy);
  
}

  drawSprites();
  Text = "foodStock" + "=" + foodS, 200, 150;
  textSize = 14;
  fill('black')
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){ x=0; }
  else{ x=x-1; } 
  database.ref('/').update({ food:x }) 
}
 



