//only works on p5 editor and idk why
/* problems:
3. slow down player
4. add collision detector
*/
let mic;
let button1;
let button2;
let gameStatus;
let enemyHeight = 200;
let enemyWidth = 1000;
let restart = false;

let pX;
let pY = 690;
let xVel = 0;
let yVel = 0;
let xAcc = 0;
let yAcc = 1;

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
   
}

function draw(){
  let sec = second();
  let enemyYStart;
  pX = width/4;
  
  
  
  if (gameStatus) {
    background("#ccccff");
    rect(0, 700, 1000, 50);

    micLevel = mic.getLevel() * 100;
    console.log("micLevel is " + micLevel);
    
    let player = ellipse(pX, pY, 20, 20);
    
    if (micLevel > 2) {
      
      yAcc = -.1;
    } else {
      yAcc = .2;
    }
    
    pY += yVel;
    yVel += yAcc;
    console.log("pY is " + pY + " yVel is " + yVel);
    
    if (pY > 690) {
      yVel = yVel * -1;
    } else if (pY < 0) {
      yVel = (yVel * -1)  / 4;
    }
  
    
    // micLevel = mic.getLevel() * 10;
    // console.log(micLevel);
    // let pHeight = height - micLevel * height;
    // let player = ellipse(width/4, min(pHeight, 690), 20, 20);
    
    
    
    
    enemyWidth = enemyWidth - 5;
    enemyYStart = 700-enemyHeight;
    let enemy = rect(enemyWidth, enemyYStart, 50, enemyHeight);
    
    if (enemyWidth <= -50) {
      enemyWidth = 1000;
      enemyHeight = random(150, 500);
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
  mic.start();
  gameStatus = true;
}