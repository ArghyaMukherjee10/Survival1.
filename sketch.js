var bg,bgImage;
var base,baseGroup,base1,base1Group;
var baseImage,base1Image;
var boy,boyImage;
function preload(){
    bgImage = loadImage("Images/tower.png")
    baseImage = loadImage("Images/base.png")
    base1Image = loadImage("Images/base1.png")
    boyImage = loadImage("Images/human.png")
}
function setup(){
    createCanvas(windowWidth/2,windowHeight);
    bg = createSprite(width/2,height/2,width,height)
    bg.addImage(bgImage);
    bg.scale = 1.7;

    boy=createSprite(width/2,height/2,10,10)
    boy.addImage(boyImage)
    boy.scale=0.3
}
function draw(){
    background(0);
    Base();
    Base1();
  
    drawSprites()
}
function Base(){
    if (frameCount% 100 === 0 ){
        base = createSprite(0,-10,10,10)
        base.x = Math.round(random(100,width-100))
        base.addImage(baseImage)
        base.velocityY = 4;
        base.lifetime = 510;
    }
}
function Base1(){
    if (frameCount% 200 === 0 ){
        base1 = createSprite(0,-10,10,10)
        base1.x = Math.round(random(100,width-100))
        base1.addImage(base1Image)
        base1.velocityY = 4;
        base1.lifetime = 510;
    }
}