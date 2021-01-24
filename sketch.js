var canvas;
var cat, catImg1, catImg2, catLastImg;
var mouse, mouseImg1, mouseImg2, mouseLastImg;
var bg,bgImg;

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png");
catImg1 = loadAnimation("images/tomOne.png");
catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
catLastImg = loadAnimation("images/tomFour.png");
mouseImg1 = loadAnimation("images/jerryOne.png");
mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
mouseLastImg = loadAnimation("images/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(800,600,10,10);
    cat.addAnimation("cat_sitting",catImg1);
    cat.scale = 0.2;

    mouse=createSprite(200,600,10,10);
    mouse.addAnimation("mouse_standing",mouseImg1);
    mouse.scale = 0.15;
}

function draw() {
    background(bgImg);    
    
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImg",catLastImg);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("catLastImg");
    mouse.addAnimation("mouseLastImg",mouseLastImg);
    mouse.changeAnimation("mouseLastImg");
    mouse.scale = 0.15;
}

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("cat_running",catImg2);
    cat.changeAnimation("cat_running");

    mouse.addAnimation("mouse_teasing", mouseImg2);
    mouse.changeAnimation("mouse_teasing");
    
}
}