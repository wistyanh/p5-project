
//mic test that actually works to move bal up and down
let mic;

 function setup(){
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(0);
  fill(255);
  text('tap to start', width/2, 20);

  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  ellipse(width/2, y, 10, 10);
}



//only works on p5 editor and idk why
/* problems:
1. localhost simply isn't working
2. is there a way for me to like reduce the noise to make the ball less shaky and more stable?
*/
/* 
1. look for a way to stabilize ball
2. add the obstacle course -- prog incoming obstacles either must jump or 
*/

/*
let mic;
let button;
let gameStatus = false;

 function setup(){
   mic = new p5.AudioIn();
   let cnv = createCanvas(750, 750);
   background("#cce6ff");
   textFont('Helvetica', 40)
   text('skreem', 300, 100);
   button = createButton('click to start releasing ✨stress✨');
   button.position(277, 375);
   button.mousePressed(startGame);
   
}

function draw(){
  
  if (gameStatus) {
    background("#ccccff")
    fill(255);
    rect(0, 700, 750, 50);
    micLevel = mic.getLevel();
  
    let y = max(50, (height - micLevel * 1000));
    console.log(y);
    ellipse(width/2, y, 10, 10);
  }
}

function startGame() {
  button.hide();
  background("#ccccff");
  mic.start();
  gameStatus = true;
}
*/