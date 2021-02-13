//only works on p5 editor and idk why
/* problems:
1. localhost simply isn't working
2. slow down player
3. add collision detector
4. restart button won't go away
*/
let mic;
let button;
let gameStatus;
let newHeight = 200;
let newWidth = 1000;

 function setup(){
   mic = new p5.AudioIn();
   createCanvas(1000, 750);
   background("#cce6ff");
   textFont('Helvetica', 50)
   text('✨skreem✨', 365, 200);
   
   textSize(20);
   text('sorry this is ugly asf im artistically challenged', 575, 725);
   
   button = createButton('click here to begin!');
   button.position(440, 375);
   button.mousePressed(startGame);
   
}

function draw(){
  let pHeight = second();
  
  
  if (gameStatus) {
    background("#ccccff");
    rect(0, 700, 1000, 50);
    micLevel = mic.getLevel() * 5;
    
    
    pHeight = height - micLevel * height;
    let player = ellipse(width/4, min(pHeight, 690), 20, 20);
    
    //rect(x_start_from_left, y_start_from_top, w, h);
    
    
    newWidth = newWidth - 5;
    let enemy = rect(newWidth, 700-newHeight, 50, newHeight);
    
    if (newWidth <= -50) {
      newWidth = 1000;
      newHeight = random(150, 500);
    }
  }
  
  if (gameStatus == false) {
    background("#ccccff");
    textFont('Helvetica', 100)
    text('GAME OVER', 200, 200);
  
    button = createButton('click here to restart!');
    button.position(440, 375);
    button.mousePressed(startGame);
    
  }
  
}



function startGame() {
  button.hide();
  background("#ccccff");
  mic.start();
  gameStatus = true;
}


