var playerPaddle;
var computerPaddle;


function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
computerPaddle=new Paddle();
}


function draw() {
  //set background to white
  background("blue");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  computerPaddle.yPosition=200;
  computerPaddle.display();
  //draw the ball
  rect(200,200,10,10);
}