
//mic test that actually works to move bal up and down
// let mic;

//  function setup(){
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(userStartAudio);
//   textAlign(CENTER);
//   mic = new p5.AudioIn();
//   mic.start();
// }

// function draw(){
//   background(0);
//   fill(255);
//   text('tap to start', width/2, 20);

//   micLevel = mic.getLevel();
//   let y = height - micLevel * height;
//   ellipse(width/2, y, 10, 10);
// }



//only works on p5 editor and idk why
/* problems:
1. localhost simply isn't working
2. is there a way for me to like reduce the noise to make the ball less shaky and more stable?
*/
/* 
1. look for a way to stabilize ball
2. add the obstacle course -- prog incoming obstacles either must jump or 
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
  let moving = false;
  let player;
  let playerOnGround = true;
  
  
  if (gameStatus) {
    background("#ccccff");
    rect(0, 700, 1000, 50);
    if (!moving) {
      micLevel = mic.getLevel() * 1000;
    } else {
      
    }
    
    
    
//     if (!moving) {
//       pHeight = height - micLevel * height;
//       moving = true;
//     }
    
//     if (moving) {
//       player = ellipse(width/4, min(pHeight, 690), 20, 20);
//       playerOnGround = false;
//       if ()
//     }
    
    //pHeight = height - micLevel * height;
    //let player = ellipse(width/4, min(pHeight, 690), 20, 20);
    
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


