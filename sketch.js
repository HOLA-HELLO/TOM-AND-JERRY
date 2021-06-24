var jerry,jerry1IMG,jerry2IMG,jerry3IMG,jerry4IMG;
var tom,tom1IMG,tom2IMG,tom3IMG,tom4IMG;
var background,backgroundIMG;

function preload() {
   
    jerry1IMG = loadImage("jerryOne.png");
    jerry2IMG = loadImage("jerryTwo.png");
    jerry3IMG = loadImage("jerryThree.png");
    jerry4IMG = loadImage("jerryFour.png");

    tom1IMG = loadImage("tomOne.png");
    tom2IMG = loadImage("tomTwo.png");
    tom3IMG = loadImage("tomThree.png");
    tom4IMG = loadImage("tomFour.png");

    backgroundIMG = loadImage("garden.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(780,600);
    tom.addAnimation("gato1",tom4IMG);

    jerry = createSprite(280,600);
    jerry.addAnimation("raton1", jerry1IMG);
    

    

}

function draw() {

    background(backgroundIMG);

   if(tom.x - jerry.x <(tom.width - jerry.width)/2){

    tom.velocityX=0;
    tom.addAnimation("gatoTranqulo", tom3IMG);
    tom.changeAnimation("gatoTranqulo", tom3IMG);
    cat.x=300;
    cat.scale = 0.2;

   }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

    jerry.addAnimation("ratonBurlon", jerry3IMG);
    jerry.changeAnimation("ratonBurlon",jerry3IMG);
    jerry.fameDelay = 25;

    tom.velocityX = -5;
    tom.addAnimation("gato2",tom2IMG);
    jerry.changeAnimation("gato2",tom2IMG);
  }

}
