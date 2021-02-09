var database;
var food;
var foodStock;
var dog;
var happyDog;

function preload()
{
  doggo = loadImage("images/dogImg.png");
  doghappy = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,120,40,60)
  dog.addImage(doggo)
  database = firebase;
  foodStock = database.ref('food')
  foodStock.on("value", readStock)
}


function draw() {  
background(46,139,87)
if (keyDown(UP_ARROW)) {
  foodStock = foodStock-1;
  writeStock(food);
  dog.addImage(doghappy);
  
}

  drawSprites();
  Text = "foodStock" + "=" + foodStock, 100, 150;
  textSize = 4;
  fill('black')
}
function readStock(data){
  food = data.val();
}
function writeStock(x){
 database.ref('/').update({
   food:x
 })
}



