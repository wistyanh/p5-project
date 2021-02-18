//add timer/scoreboard + extra enemies + top score

let mic;
let button1;
let button2;
let gameStatus;
let enemyHeight;
let enemyWidth;
let restart;

let pX;
let pY;
let xVel;
let yVel;
let xAcc;
let yAcc;


 function setup(){
   mic = new p5.AudioIn();
   createCanvas(1000, 750);
   background("#cce6ff");
   textFont('Helvetica', 50)
   text('✨skreem✨', 365, 200);
   
   textSize(20);
   text('sorry this is ugly asf im artistically challenged', 575, 725);
   
   button1 = createButton('click here to begin!');
   button1.position(440, 375);
   button1.mousePressed(startGame);
   
   button2 = createButton('click here to restart!');
   button2.position(440, 375);
   button2.hide();
   button2.mousePressed(startGame);
   
   mic.start();
   mic.amp(1.0);
   
}

function draw(){
  let sec = second();
  let enemyYStart;
  
  
  
  if (gameStatus) {
    background("#ccccff");
    rect(0, 700, 1000, 50);

    micLevel = mic.getLevel() * 100;
    console.log("micLevel is " + micLevel);
    
    let player = ellipse(pX, pY, 20, 20);
    
    if (micLevel > 3) {
      
      yAcc = -0.1;
    } else {
      yAcc = 0.2;
    }
    
    pY += yVel;
    yVel += yAcc;
    
    if (pY > 690) {
      yVel = yVel * -1;
    } else if (pY <= 5) {
      yVel = 0.15 ;
    }
  
    enemyWidth = enemyWidth - 7;
    enemyYStart = 700-enemyHeight;
    let enemy = rect(enemyWidth, enemyYStart, 50, enemyHeight);
    
    if (enemyWidth <= -50) {
      enemyWidth = 1000;
      enemyHeight = random(150, 500);
    }

    if (pX+20 >= enemyWidth && pX+20 <= enemyWidth+50 && pY >= enemyYStart) {
      gameStatus = false;
    }
    
  }
  
  
  
  
  if (gameStatus == false) {
    background("#ccccff");
    textFont('Helvetica', 100)
    text('GAME OVER', 200, 200);
    restart =  true;
    
    button2.show();
    
  }
  
}



function startGame() {
  button1.hide();
  if (restart) {
    button2.hide();
    restart = false;
  }
  background("#ccccff");
  enemyHeight = 200;
  enemyWidth = 1000;
  restart = false;

  pX = width/4;
  pY = 690;
  xVel = 0;
  yVel = 0;
  xAcc = 0;
  yAcc = 0.1;
  
  gameStatus = true;
}