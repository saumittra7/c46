var backgroundImage
var goalpost1,goalpost1Img,goalpost2,goalpost2Img;
var player1,player1Img,player2,player2Img
var ball,ballImage
var wall1,wall2,wall3,wall4
var Edges
var player1score =0
var player2score = 0
var gameState = "serve"
var ResetButton, ResetButtonImage






function preload(){
 backgroundImage=loadImage("football stadium.jpg")   
goalpost1Img = loadImage("goalpost no bg.png")
goalpost2Img = loadImage("goalpost2.png")
player1Img = loadImage("character1.png")
player2Img = loadImage("character2.png")
ballImage = loadImage ("football ball.png")
ResetButtonImage = loadImage("Reset.png")

}


function setup(){
    createCanvas(1000,800)
    goalpost1 = createSprite(230,400,50,100)
    goalpost1.addImage(goalpost1Img)
    goalpost1.scale =0.5

    goalpost2 = createSprite(760,400,50,100)
    goalpost2.addImage(goalpost2Img)
    goalpost2.scale = 0.5


    player1 = createSprite(320,400,50,50)
    player1.addImage(player1Img)
    player1.scale = 0.3


    player2 = createSprite(630,400,50,50)
    player2.addImage(player2Img)
    player2.scale =  0.2


    ball = createSprite(500,400,20,20)
    ball.addImage(ballImage);
    ball.scale = 0.2


    wall1 = createSprite(500,200,600,10)
    wall2 = createSprite(500,600,600,10)
    wall3 = createSprite(180,400,10,400)
    wall4 = createSprite(800,400,10,400)
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false

    Edges = createEdgeSprites()
    ball.velocityX =5
    ball.velocityY = -5


    ResetButton = createSprite(500,150,50,50)
    ResetButton.addImage(ResetButtonImage)
    ResetButton.scale = 0.1
 


}




function draw(){
background(backgroundImage)

textSize (20)
fill ("black")
text(player1score,420,250)
text(player2score,620,250)

if (gameState == "play" ){
    
    
    
if(keyDown(UP_ARROW)){
   player2.y = player2.y - 2
   

}
if(keyDown(DOWN_ARROW)){
player2.y = player2.y + 2
}

if(keyDown(LEFT_ARROW)){
player2.x = player2.x -2

}
if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x +2


}
if(keyDown("w")){

    player1.y = player1.y -2
}
if(keyDown("s")){
    player1.y = player1.y + 2
}

if (keyDown("a")){
    player1.x = player1.x -2

}
if(keyDown("d")){
    player1.x = player1.x +2
}
if(ball.isTouching(goalpost1)){
player2score +=1
ball.x = 500
}
if(ball.isTouching(goalpost2)){
    player1score += 1
    ball.x = 500
}
ball.bounceOff(wall1)
ball.bounceOff(wall2)
ball.bounceOff(wall3)
ball.bounceOff(wall4)
ball.bounceOff(player1)
ball.bounceOff(player2)



if(keyDown("space")){

  gameState == "serve"
    
    ball.velocityX = 5
   ball.velocityY = -5

}
if(mousePressedOver(Reset)){
    Reset()
}
}
if(player1score===5||player2score ===5){
    gameState  ="end"

}
if( gameState == "end"){
    ball.velocityX = 0 
    ball.velocityY = 0
    
    
    text("GameOver",500,400)
   
}





drawSprites()
}
function Reset(){
    gameState = "serve"
    player1score =0
    player2score = 0
    player1.x =320
    player1 .y =400
    player2.x = 630
    player2.y = 400

}
