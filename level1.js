/* TO DO:
    - design level 2
    - finish keypad in room 3
    - figure out how to play audio
    - make restart button on "GAME OVER" screen instead of just pressing enter
    - improve welcome screen
    - separate files based on object type
    - figure out how to have different levels as different objects (for readability)
    - inventory system
    - add a tutorial level
    REACH GOALS:
    - design actual art
    - find background music/noise
    - include certain sounds for certain objects interacted with
    - fix UI
    - inventory UI
    - settings tab
*/
//images
let houseKey;
let oldStyleKey;
//sounds
let glassSoundEffect;
let metalJingling;
let lockedDoor;
let keyClick;
let shuffling;
let musicBox;

var mouseIsClicked = false;
var message = "";
var roomNum = 0;
var scene = "";
var keys = [];
var timer;
var playing = true; //boolean for whether the game is currently running or not
var wallNum = 1;
var maxWallNum = 3;

//for level 1
{
var lvl1allottedTime = 480;
var doorIsLocked = true;
var enteredCode = false;
var hasKey = false;
var code = "";
var keyUsed = false;
var lvl1ButtonPressed = false;
var lvl1Timer = 0;
}

function preload() {
  glassSoundEffect = loadSound('assets/Sliding-a-wine-glass-on-table-A1-www.fesliyanstudios.com.mp3');
  houseKey = loadImage('assets/key.png');
  oldStyleKey = loadImage('assets/key-30417_1280.png');
}
function setup() {
  
  createCanvas(1000, 1100);
  
}

  
function draw() {
  // Standards for player
  message = "";
  cursor(ARROW);

  //opening screen 
  if(roomNum==0){
    fill(0);
    rect(0, 0, 1000, 1000);
    textSize(70);
    fill(255);
    text("Esape Room Game", 150, 300);
    text("by Group 5", 270, 470);
    text("Click anywhere to begin.", 100, 650);
    
    if(mouseIsClicked){
      //timer = lvl1allottedTime;
      roomNum++;
      mouseIsClicked = false;
    }
  }

  // level 1
  if(roomNum == 1){
    background(0);
    if(scene != "room3numpad")
      code = "";

    // Room 1
    if(wallNum==1&&scene==""){
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      
      // Room
      stroke(0);
      fill(120);
      // Top
      quad(0, 0 ,100, 100, 1000, 100, 1000, 0);
      // Left
      quad(0, 0 ,100, 100, 100, 900, 0, 1000);
      // Bottom
      quad(0, 1000, 100, 900, 1000, 900, 1000, 1000);

      // Door
      if(doorIsLocked){
        noStroke();
        fill(160,82,45);
        rect(300, 550, 200, 350);
        fill(235, 195, 52);
        ellipse(450,700,30,30);
      }
      if(!doorIsLocked){
        noStroke();
        fill(0);
        rect(300, 550, 200, 350);
        fill(235, 195, 52);
        ellipse(590,680,30,30);
        fill(160,82,45);
        quad(500, 550, 600, 500, 600, 800, 500, 900);
      }
      // Door Action
      if(mouseX > 300 && mouseX < 500 && mouseY > 550 && mouseY < 900){
        cursor('grab');
        message = "Door is locked.";
        if(hasKey){
          message = "Door is locked. Use key?";
          if(mouseIsClicked){
            //doorLocked.play();
            doorIsLocked = false;
            mouseIsClicked=false;
          }
        }
        if(!doorIsLocked){
          message = "Enter door?";
        }
        if(!doorIsLocked && mouseIsClicked){
          scene = "win";
        }
      }
/*
      // Buttons
      {
      // Button Right
      noStroke();
      fill(52, 235, 165);
      rect(890,600, 90,90);
      fill(255);
      triangle(900, 610, 900, 680, 970, 645);
      // Button Action
      if(mouseX > 890 && mouseX < 980 && mouseY > 600 && mouseY < 690){
        cursor('grab');
        message = "Move right?";
        if(mouseIsClicked == true){
          scene = "room2";
          wallNum++;
          mouseIsClicked = false;
        }
      }}
      */

    }

    // Room 2
    if(wallNum==2&&scene==""){
      background(0);
      fill(150);
      rect(0,0,1000,1000);

      // Room
      stroke(0);
      fill(120);
      // Top
      quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
      // Bottom
      quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);

      // Table
      stroke(0);
      fill(160,82,45);
      rect (180,780, 30,150);
      rect (130,780, 30,170);
      rect (730,780, 30,150);
      rect (680,800, 30,150);
      push();
      fill(160,50,30);
      rotate(0.03);
      rect (130, 700, 670, 100);
      pop();
      // Paper
      fill(255);
      push();
      rotate (-1.2);
      rect(-520,780,50,100);
      pop();
      // Paper Action
      if(mouseX > 540 && mouseX < 650 && mouseY > 712 && mouseY < 802){
        cursor('grab');
        message = "Inspect paper?";
        if(mouseIsClicked == true){
          scene = "room2paper";
          mouseIsClicked = false;
        }
      }

      //Poster
      push();
      fill(255);
      rotate(0.03);
      rect(100,200, 250,100);
      pop();
      if(mouseX > 100 && mouseX < 350 && mouseY > 200 && mouseY < 300){
        cursor('grab');
        message = "Inspect poster?";
        if(mouseIsClicked == true){
          scene = "room2poster";
          mouseIsClicked = false;
        }
      }
/*
      //Buttons
      {
      // Button Right
      noStroke();
      fill(52, 235, 165);
      rect(890,600, 90,90);
      fill(255);
      triangle(900, 610, 900, 680, 970, 645);
      // Button Action
      if(mouseX > 890 && mouseX < 980 && mouseY > 600 && mouseY < 690){
        cursor('grab');
        message = "Move right?";
        if(mouseIsClicked == true){
          scene = "room3";
          wallNum++;
          mouseIsClicked = false;
        }
      }

      // Button Left
      noStroke();
      fill(52, 235, 165);
      rect(20,600, 90,90);
      fill(255);
      triangle(100, 610, 100, 680, 30, 645);
      // Button Action
      if(mouseX > 20 && mouseX < 110 && mouseY > 600 && mouseY < 690){
        cursor('grab');
        message = "Move left?";
        if(mouseIsClicked == true){
          scene = "room1";
          wallNum--;
          mouseIsClicked = false;
        }
      }
      }*/

    }

    // Room 2 Paper
    if(scene == "room2paper"){
      background(0);
      fill(160,50,30);
      rect(0,0,1000,1000);
      fill(255);
      rect(200,200,500,700);
      fill(0);
      textSize(40);
      text("786 + 6315 = ???", 300,500);
      message = "Click anywhere to exit.";
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked = false;
      }
    }

    // Room 2 Poster (Hint)
    if(scene == "room2poster"){
      background(0);
      fill(150);
      rect(0,0,1000,1000);
      fill(255);
      rect(100,200,400,250);
      stroke(100, 179, 52);
      strokeWeight(5);
      ellipse(220,370,200,100);
      stroke(0);
      strokeWeight(1);
      fill(0);
      textSize(30);
      text("  9 + 2 = 11\n\n  9 + 2 = B", 120, 300);
      textSize(16);
      text("   10\n\n\n\n 16",255,305);

      message = "Click anywhere to exit.";
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked = false;
      }
    }
    
    if(wallNum==3&& scene==""){
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      
      // Room
      stroke(0);
      fill(120);
      // Top
      quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
      // Bottom
      quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
      // Right
      quad(1000,0, 900, 100, 900, 900, 1000, 1000);

      // Key Holder
      noStroke();
      fill(90, 102, 102);
      rect(300,400,150,150);
      if(hasKey==false){
        /*fill(214, 162, 19);
        circle(375,450, 50)
        rect(368,450, 10, 75);
        rect(350,495, 20, 10);
        rect(350,515, 20, 10);
        fill(90, 102, 102);
        circle(375,450,30);*/
        push();
        rotate(0);
        image(oldStyleKey, 300, 440, 140, 70);
        pop();
      }
      if(mouseX > 300 && mouseX < 450 && mouseY> 400 && mouseY < 550 && !hasKey){
          cursor('grab');
          if(!enteredCode){
            message = "Key is surrounded by glass.";
          }
          if(enteredCode){
            message = "Take key?";
            if(mouseIsClicked == true){
                hasKey=true;
                mouseIsClicked = false;
            }
        }
          
      }
      if(!enteredCode){
        let holderColor = color(19, 172, 214);
        holderColor.setAlpha(50);
        fill(holderColor);
        stroke(0);
        rect(250,400,250,150);
      }

      // Dial Pad
      fill(100);
      rect(530,400, 120, 150);
      fill(74, 100, 133);
      rect(540,410, 100, 20);
      fill(73, 72, 105);
      rect(550, 450, 30, 20);
      rect(600, 450, 30, 20);
      rect(550, 480, 30, 20);
      rect(600, 480, 30, 20);
      rect(550, 510, 30, 20);
      rect(600, 510, 30, 20);
      if(mouseX > 530 && mouseX < 650 && mouseY > 400 && mouseY < 550){
        cursor('grab');
        message = "Inspect num pad?";
        if(mouseIsClicked == true){
          scene = "room3numpad";
          mouseIsClicked = false;
        }
      }
/*
      // Buttons
      {
      // Button Left
      noStroke();
      fill(52, 235, 165);
      rect(20,600, 90,90);
      fill(255);
      triangle(100, 610, 100, 680, 30, 645);
      // Button Action
      if(mouseX > 20 && mouseX < 110 && mouseY > 600 && mouseY < 690){
        cursor('grab');
        message = "Move left?";
        if(mouseIsClicked == true){
          scene = "room2";
          wallNum--;
          mouseIsClicked = false;
        }
      }}*/
    }

    if(scene == "room3numpad"){
      //Game Window
      stroke(0);
      strokeWeight(1);
      fill(150);
      rect(0,0,1000,1000);
      fill(100);
      rect(200,200,500,700);
      fill(74, 100, 133);
      rect(230,230, 440, 120);
      //buttons
      fill(73, 72, 105);
      rect(240, 470, 150, 70);
      rect(520, 470, 150, 70);
      rect(240, 570, 150, 70);
      rect(520, 570, 150, 70);
      rect(240, 670, 150, 70);
      rect(520, 670, 150, 70);
      fill(0);
      textSize(50);
      text("Reset", 240, 520);
      text("Enter", 520, 520);
      message = "Type in the password and press the ENTER key or click\nthe back button to exit.";

      if(mouseX > 240 && mouseX<390 && mouseY>470 && mouseY<540){
        cursor('grab');
        message = "Reset";
        if(mouseIsClicked){
          code = "";
          lvl1ButtonPressed = false;
          mouseIsClicked = false;
        }
      }

      if(mouseX > 520 && mouseX < 670 && mouseY> 470 && mouseY< 540){
        cursor('grab');
        message = "Enter";
        if(mouseIsClicked){
          lvl1ButtonPressed = true;
          if(code.toUpperCase(code) == "6A9B"){
            enteredCode = true;
          }
          mouseIsClicked=false;
        }
      }
      
      
      fill(0);
      textSize(50);
      if(code.toUpperCase() != "6A9B" && lvl1ButtonPressed){
        fill(184, 40, 74);
      }
      if(enteredCode == true){
        fill(50, 168, 84);
      }
      text(code, 240,310);
      
      
      // Button Left
      noStroke();
      fill(52, 235, 165);
      rect(20,600, 90,90);
      fill(255);
      triangle(100, 610, 100, 680, 30, 645);
      // Button Action
      if(mouseX > 20 && mouseX < 110 && mouseY > 600 && mouseY < 690){
        cursor('grab');
        message = "Exit?";
        if(mouseIsClicked == true){
          scene = "";
          mouseIsClicked = false;
        }
      }

      if(code.toUpperCase() == "6A9B" && lvl1ButtonPressed){
        glassSoundEffect.play();
        code = "ACCEPTED";
        enteredCode = true; 
        }
    }

  }
  
  
 //timer & buttons
 if(roomNum!=0){
      
    if(wallNum!=maxWallNum&& scene==""){
        // Button Right
        noStroke();
        fill(52, 235, 165);
         rect(890,600, 90,90);
        fill(255);
        triangle(900, 610, 900, 680, 970, 645);
        // Button Action
        if(mouseX > 890 && mouseX < 980 && mouseY > 600 && mouseY < 690){
            cursor('grab');
            message = "Move right?";
            if(mouseIsClicked == true){
                wallNum++;
                mouseIsClicked = false;
            }
         }
      }
    if(wallNum!=1 && scene == ""){
        // Button Left
        noStroke();
        fill(52, 235, 165);
        rect(20,600, 90,90);
        fill(255);
        triangle(100, 610, 100, 680, 30, 645);
        // Button Action
        if(mouseX > 20 && mouseX < 110 && mouseY > 600 && mouseY < 690){
            cursor('grab');
            message = "Move left?";
            if(mouseIsClicked == true){
                wallNum--;
                mouseIsClicked = false;
            }
        }
    }
    /*
    //timer
    //sets up visual timer
    var seconds = timer%60;
    if(seconds < 10){seconds = "0" + seconds;} //represents the seconds as ":00" or ":01" instead of ":0" or ":1"
    fill(255);
    textSize(25);
    if(scene != "win")
      text("TIME: " + floor(timer/60) + ":" + seconds , 830, 1050); //separates the minutes and seconds, since timer is just the remaining seconds
    //timer commands
    if (frameCount % 60 == 0 && timer > 0) { timer--;} // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      if (timer == 0) {playing = false;}   */   
  }

  //Game Over Screen and Restart
  if(!playing){
      background(0);
      fill(0);
      rect(0,0, 1000, 1000);
      fill(255);
      text("GAME OVER", 250, 500);
      textSize(60);
      text("Click anywhere to restart", 200, 600);
      message="";
      cursor(ARROW);
      // Level 1 Game Over
      if(mouseIsClicked && roomNum == 1){
        scene="room1";
        roomNum = 1;
        playing=true;
        doorIsLocked = true;
        enteredCode = false;
        hasKey = false;
        code = "";
        keyUsed = false;
        lvl1ButtonPressed = false;
        timer = lvl1allottedTime;
        mouseIsClicked = false;
      }   
  } 
// Interaction Message
fill(255);
textSize(25);
text(message, 10,1050);

// Mouse Event Resetter
mouseIsClicked = false;
}

/**********************Event Handlers***********************************/


// Mouse Clicked Event Handlers
function mouseClicked(){
  mouseIsClicked = true;
};

// Keys Pressed Event Handlers
var keyPressed = function() {
  keys[keyCode] = true;
};

var keyReleased = function() {
  keys[keyCode] = false;
};

var keyTyped = function() {
  if (scene === "room3numpad" && !lvl1ButtonPressed) {
    if (code.length < 5) {
      code += key.toString();
      if (key.code === BACKSPACE || key.code === DELETE) {
        code = code.substring(0, code.length - 2);
      }
    }
  }
};