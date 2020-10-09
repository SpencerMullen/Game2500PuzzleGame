/* TO DO:
    - design level 2
    - design level 3
    - improve welcome screen
    - inventory system
    - add a tutorial level
    - find background music/noise
    - include certain sounds for certain objects interacted with
    - fix UI
    - inventory UI
    - SOMEBODY CHECK WITH BARNEY IF WE NEED TO LEGALLY OWN ALL OUR ASSETS
    REACH GOALS:
    - separate files based on object type
    - figure out how to have different levels as different objects (for readability)
    - design actual art
    - settings tab
    - switch to unity (really reaching there, woah)
*/
//world map by Bensik Imeri
//house key by Victoria Lostaunu
//older key by Clker-Free-Vector-Images from Pixabay 
//images
var mapImage;
var caesarWheel; //I didn't feel like programming one, sry
var matchBox;
//var log;
var houseKey;
var oldStyleKey;
//var mirror;
//var mirrorGhost;
//sounds
var glassSoundEffect;
var metalJingling;
var lockedDoor;
var keyClick;
var shuffling;
var musicBox;
var switchScenes;
var musicBox;
var footSteps;
var doorUnlock;
var lockedDoor;

var mouseIsClicked = false;
var message = "";
var roomNum = 0;
var scene = "";
var keys = [];
var allottedTime = 120;
var timer;
var playing = true; //boolean for whether the game is currently running or not
var wallNum = 1;
var maxWallNum = 3;
var items = [];
var difficulty;

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

  //for level 2
{
  var fakeCoords = 
      [
      "1: 42.3601 N, 71.0589 W", //1
      "2: 40.4168 N, 3.7038 W", //2
      "3: 01.3521 N, 103.8198 E", //3
      "4: 35.6804 N, 139.7690 E"]; //might shorten to just cities for puzzle purposes //4
  var realCoords =
      ["Johannesburg: 26.2041 S, 28.0473 E", //5
      "Rio de Janerio: 22.9068 S, 43.1729 W",//6
      "Nuuk: 64.1814 N, 51.6941 W",//7
      "Melbourne: 37.8136 S, 144.9631 E",//8
      "LA: 34.0522 N, 118.2437 W",//9
      "Kyoto: 35.0116 N, 135.7681 E",//10
      "Beijing: 39.9042 N, 116.4074 E",//11
      "London: 51.5074 N, 0.1278 W",//12
      "Dubai: 25.2048 N, 55.2708 E"];//13
      //Scott South Pole Station: -90.0000 Longitude: -139.2667
  var allCoords = [
      "Boston: 42.3601 N, 71.0589 W",
      "Madrid: 40.4168 N, 3.7038 W",
      "Singapore: 1.3521 N, 103.8198 E",
      "Tokyo: 35.6804 N, 139.7690 E",
      "Johannesburg: 26.2041 S, 28.0473 E", //5
      "Rio de Janerio: 22.9068 S, 43.1729 W",//6
      "Nuuk: 64.1814 N, 51.6941 W",//7
      "Melbourne: 37.8136 S, 144.9631 E",//8
      "LA: 34.0522 N, 118.2437 W",//9
      "Kyoto: 35.0116 N, 135.7681 E",//10
      "Beijing: 39.9042 N, 116.4074 E",//11
      "London: 51.5074 N, 0.1278 W",//12
      "Dubai: 25.2048 N, 55.2708 E"];//,
      //"City: 234,23408 J, 2345,234 T"];
  var realCoordNumsYVal = [ //latitude
      42.3601,
      40.4168,
      1.3521,
      35.6804,
      -26.2041,
      -22.9068,
      64.1814,
      -37.8136,
      34.0522,
      35.0116,
      39.9042,
      51.5074,
      25.2048,//0,
      ];
  var realCoordNumsXVal = [ //Longitude
      -71.0589,
      -3.7038,
      103.8198,
      139.7690,
      28.0473,
      -43.1729,
      -51.6941,
      144.9631,
      -118.2437,
      135.7681,
      116.4074,
      -0.1278,
      55.2708,//0,
      ];
  var coordValuesX = [
      ((realCoordNumsXVal[0]/180)*495) + 447.5,
      ((realCoordNumsXVal[1]/180)*495) + 447.5,
      ((realCoordNumsXVal[2]/180)*495) + 447.5,
      ((realCoordNumsXVal[3]/180)*495) + 447.5,
      ((realCoordNumsXVal[4]/180)*495) + 447.5,
      ((realCoordNumsXVal[5]/180)*495) + 447.5,
      ((realCoordNumsXVal[6]/180)*495) + 447.5,
      ((realCoordNumsXVal[7]/180)*495) + 447.5,
      ((realCoordNumsXVal[8]/180)*495) + 447.5,
      ((realCoordNumsXVal[9]/180)*495) + 447.5,
      ((realCoordNumsXVal[10]/180)*495) + 447.5,
      ((realCoordNumsXVal[11]/180)*495) + 447.5,
      ((realCoordNumsXVal[12]/180)*495) + 447.5];//,
      //((realCoordNumsXVal[13]/180)*495) + 447.5];
  var coordValuesY = [
      ((realCoordNumsYVal[0]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[1]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[2]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[3]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[4]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[5]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[6]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[7]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[8]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[9]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[10]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[11]/90)*250)*-1 + 630,
      ((realCoordNumsYVal[12]/90)*250)*-1 + 630];//,
      //((realCoordNumsYVal[13]/90)*250)*-1 + 630,];
  //spells: cake, bagy, logs, door but correct one is "logs"
  var letterSpot1 = [
      "C",
      "B",
      "L",
      "D"];
  var letterSpot2 = [
      "O",
      "A",
      "C",
      "W"];
  var letterSpot3 = [
      "N",
      "O",
      "K",
      "G"];
  var letterSpot4 = [
      "Y",
      "E",
      "R",
      "S"];
  var lS1 = 0;
  var lS2 = 0;
  var lS3 = 0;
  var lS4 = 0;
  var enteredCode = false;
  var doorSoundPlayed = false;
  }


function preload() {
  glassSoundEffect = loadSound('assets/Sliding-a-wine-glass-on-table-A1-www.fesliyanstudios.com.mp3');
  houseKey = loadImage('assets/key.png');
  oldStyleKey = loadImage('assets/key-30417_1280.png');
  //metalJingling = loadSound('assets/Pin Drop-SoundBible.com-655931796.mp3');
  switchScenes = loadSound('assets/Pen Clicking-SoundBible.com-482574858.mp3');
  //musicBox = loadSound('assets/All I Ask of You.mp3'); //<- MAY BE LOUD let me know if I have to make a separate, quieter version that we also own the rights to 
  mapImage = loadImage('assets/world-map-1577937.png');
  caesarWheel = loadImage('assets/caesarWheelFinal.png');
  //footSteps = loadSound('assets/Dress-shoes-on-Concrete-Floor-super-fast-pace-running-www.FesliyanStudios.com.mp3');
  //level2 = loadScript('level2.js');
  doorUnlock = loadSound('assets/door_lock.mp3');
  lockedDoor = loadSound('assets/Trying-to-Open-Door-Handle-2-www.fesliyanstudios.com.mp3');
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
    text("Select a difficulty to begin.", 100, 650);
    
    fill(71, 199, 20);
    rect (100, 800, 150, 150);
    fill(207, 214, 13);
    rect (400, 800, 150, 150);
    fill(207, 34, 19);
    rect (700, 800, 150, 150);
    fill(255);
    textSize(50);
    text("EASY", 107, 890);
    textSize(35);
    text("MEDIUM", 405, 890);
    textSize(50);
    text("HARD", 705, 890);

    if(mouseX > 100 && mouseX < 250 && mouseY > 800 && mouseY < 950){
      cursor("grab");
      if(mouseIsClicked){
        difficulty = "easy";
        roomNum++;
        mouseIsClicked = false;
      }
    }
    if(mouseX > 400 && mouseX < 550 && mouseY > 800 && mouseY < 950){
      cursor("grab");
      if(mouseIsClicked){
        difficulty = "medium";
        roomNum++;
        mouseIsClicked = false;
      }
    }
    if(mouseX > 700 && mouseX < 850 && mouseY > 800 && mouseY < 950){
      cursor("grab");
      if(mouseIsClicked){
        difficulty = "hard";
        roomNum++;
        mouseIsClicked = false;
      }
    }
  }

  // level 1
  if(roomNum == 1){
    background(0);
    if(scene != "room3numpad")
      code = "";

    // Room 1
    if(wallNum==1){
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
        if(doorIsLocked){
          message = "Door is locked.";
        }
        if(hasKey){
          message = "Door is locked. Use key?";
          if(mouseIsClicked){
            lockedDoor.play();
            doorIsLocked = false;
            hasKey = false;
            mouseIsClicked=false;
          }
        }
        if(!doorIsLocked){
          message = "Enter door?";
        }
        if(!doorIsLocked && mouseIsClicked){
          roomNum++;
          enteredCode = false;
          mouseIsClicked = false;
        }
      }

    }

    // Room 2
    if(wallNum==2){
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
        cursor("grab");
        message = "Inspect poster?";
        if(mouseIsClicked == true){
          scene = "room2poster";
          mouseIsClicked = false;
        }
      }
      if(difficulty == "easy"){
        noStroke();
        fill(123, 50, 168);
        rect(300,710, 55, 70);
        stroke(0);
        fill(255);
        rect(305,705, 50, 70);
        fill(123, 50, 168);
        rect(300,700, 50, 70);
      }
      if(mouseX > 300 && mouseX < 355 && mouseY > 710 && mouseY < 770 && difficulty == "easy"){
        cursor("grab");
        message = "Open textbook?";
        if(mouseIsClicked == true){
          scene = "room2textbook";
          mouseIsClicked= false;
        }
      }
    }

    // Room 2 Textbook
    if(scene == "room2textbook"){
      background(0);
      fill(160,50,30);
      rect(0,0,1000,1000);
      fill(123, 50, 168);
      rect(60,200,880,700);
      fill(255);
      rect(100,200,800,700);
      rect(100,200,400,700);
      fill(0);
      textSize(40);

      fill(0);
      textSize(30);
      text("How to convert           decimal to hexadecimal.", 240, 250);
      text("Divide by 16 until you   reach a number less than\n16, keeping track of     remainders", 200, 400);
      text("Put the remainders         together to make \n     a hexadecimal           number", 200, 700);
      
      message = "Click here to exit."
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked= false;
      }
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
      message = "Click here to exit.";
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
      
      if(difficulty == "easy"){
        textSize(16);
        text("   dec\n\n\n\n hex",255,305);
      }
      if(difficulty == "medium"){
        textSize(16);
        text("   10\n\n\n\n 16",255,305);
      }

      message = "Click here to exit.";
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked = false;
      }
    }
    
    if(wallNum==3 && scene==""){
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
    }

    if(scene == "room3numpad"){
      //Game Window
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
        message = "Reset";
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

      message = "Type in the password using your keyboard and click the ENTER key or click\nthe RESET key to reset the code or click the back button to exit.";
      
      
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

  if(roomNum == 2){
     

    if(wallNum == 1 && scene==""){
      background(0); 
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      // Room
      stroke(0);
      fill(67, 84, 80);
      //image(testBackground, 0, 0, 1500, 1000);//originally 5832 x 3888
      // Top
      quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
      // Bottom
      quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
     
      if(difficulty == "medium"){
        fakeCoords = [
          "1___: 42.3601 N, 71.0589 W", //1
          "_2__: 40.4168 N, 3.7038 W", //2
          "__3_: 01.3521 N, 103.8198 E", //3
          "___4: 35.6804 N, 139.7690 E"]; //might shorten to just cities for puzzle purposes //4
      }

      if(difficulty == "easy"){
        fakeCoords = [
          "1st letter of: 42.3601 N, 71.0589 W", //1
          "2nd letter of: 40.4168 N, 3.7038 W", //2
          "3rd letter of: 01.3521 N, 103.8198 E", //3
          "4th letter of: 35.6804 N, 139.7690 E"]; //might shorten to just cities for puzzle purposes //4
      }

      //poster
      fill(255);
      rect(40, 120, 500, 270);
      fill(0);
      textSize(30);
      for(i=0; i< fakeCoords.length; i++){
          text(fakeCoords[i], 60, 220 + (i*40));
      }

      //door
      if(!enteredCode){
          noStroke();
          fill(160,82,45);
          rect(300, 550, 200, 350);
          fill(235, 195, 52);
          ellipse(450,700,30,30);
        }
        if(enteredCode){
          noStroke();
          fill(0);
          rect(300, 550, 200, 350);
          fill(235, 195, 52);
          ellipse(590,680,30,30);
          fill(160,82,45);
          quad(500, 550, 600, 500, 600, 800, 500, 900);
        }
      if(mouseX > 300 && mouseX < 500 && mouseY > 550 && mouseY < 900){
          cursor('grab');
          if(!enteredCode){
              message = "The door is locked.";
              if(mouseIsClicked){
                  lockedDoor.play();
                  mouseIsClicked = false;
              }
          }
          if(enteredCode){
              message = "Door is unlocked. Click to continue.";
              if(mouseIsClicked){
                  //doorUnlock.play();
                  roomNum++;
                  mouseIsClicked = false;
              }                    
          }
      }

      //keypad
      fill(230, 225, 181);
      rect(600, 600, 140, 90);//keypad itself
      fill(174, 174, 72); //Buttons
      rect(605, 622, 25, 40);
      rect(640, 622, 25, 40);
      rect(675, 622, 25, 40);
      rect(710, 622, 25, 40);

      if(mouseX > 600 && mouseX < 740 && mouseY > 600 && mouseY < 690){
          cursor('grab');
          message = "Inspect keypad?";
          if(mouseIsClicked == true){
              scene = "room1Numpad";
              //footSteps.play();
              mouseIsClicked = false;
          }
      }

      

   }
   //numpad
   if(scene=="room1Numpad"){
      background(0); 
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      // Room
      stroke(0);
      fill(67, 84, 80);
      //image(testBackground, 0, 0, 1500, 1000);
      //keypad
      fill(230, 225, 181);
      rect(50, 270, 900, 530);//keypad itself
      fill(174, 174, 72); //Letter Backgrounds
      rect(80, 380, 180, 310);
      rect(290, 380, 180, 310);
      rect(530, 380, 180, 310);
      rect(740, 380, 180, 310);
      
      //directory arrow background
      fill(0, 153, 0);
      //top row
      rect(80, 300, 180, 70);
      rect(290, 300, 180, 70);
      rect(530, 300, 180, 70);
      rect(740, 300, 180, 70);
      //bottom row
      rect(80, 700, 180, 70);
      rect(290, 700, 180, 70);
      rect(530, 700, 180, 70);
      rect(740, 700, 180, 70);
      
      fill(0);
      textSize(200);
      message = "Use the green buttons to change each letter.\nClick here outside to exit.";
      if(!mouseIsClicked){ //only way I could figure out how to update the letters
          text(letterSpot1[lS1], 90, 620);
          text(letterSpot2[lS2], 300, 620);
          text(letterSpot3[lS3], 540, 620);
          text(letterSpot4[lS4], 750, 620);
      }
      
      if(lS1==2 && lS2==0 && lS3==3 && lS4==3 && !doorSoundPlayed){ //halp
          doorUnlock.play(); //having problems with this again
          doorSoundPlayed = true;
          enteredCode = true;
      }
      
      //all the if statements to change the letter
          //changes letter displayed by one
          //Spot 1
          if(mouseX > 80 && mouseX < 260 && mouseY > 300 && mouseY < 370){//top button
              if(mouseIsClicked){
                  lS1++;
                  mouseIsClicked=false;
                  if(lS1==letterSpot1.length){
                      lS1=0;
                  }
              }
          }
          if(mouseX > 80 && mouseX < 260 && mouseY > 700 && mouseY < 770){//bottom button
              if(mouseIsClicked){
                  lS1--;
                  mouseIsClicked=false;
                  if(lS1<0){
                      lS1=letterSpot1.length-1;
                  }
              }
          }
          //Spot 2
          if(mouseX > 290 && mouseX < 470 && mouseY > 300 && mouseY < 370){//top button
              if(mouseIsClicked){
                  lS2++;
                  mouseIsClicked=false;
                  if(lS2==letterSpot2.length){
                      lS2=0;
                  }
              }
          }
          if(mouseX > 290 && mouseX < 470 && mouseY > 700 && mouseY < 770){//bottom button
              if(mouseIsClicked){
                  lS2--;
                  mouseIsClicked=false;
                  if(lS2<0){
                      lS2=letterSpot2.length-1;
                  }
              }
          }
          //Spot 3
          if(mouseX > 530 && mouseX < 710 && mouseY > 300 && mouseY < 370){//top button
              if(mouseIsClicked){
                  lS3++;
                  mouseIsClicked=false;
                  if(lS3==letterSpot3.length){
                      lS3=0;
                  }
              }
          }
          if(mouseX > 530 && mouseX < 710 && mouseY > 700 && mouseY < 770){//bottom button
              if(mouseIsClicked){
                  lS3--;
                  mouseIsClicked=false;
                  if(lS3<0){
                      lS3=letterSpot3.length-1;
                  }
              }
          }
          //Spot 4
          if(mouseX > 740 && mouseX < 920 && mouseY > 300 && mouseY < 370){//top button
              if(mouseIsClicked){
                  lS4++;
                  mouseIsClicked=false;
                  if(lS4==letterSpot4.length){
                      lS4=0;
                  }
              }
          }
          if(mouseX > 740 && mouseX < 920 && mouseY > 700 && mouseY < 770){//bottom button
              if(mouseIsClicked){
                  lS4--;
                  mouseIsClicked=false;
                  if(lS4<0){
                      lS4=letterSpot4.length-1;
                  }
              }
          }

      if(mouseX < 50 || mouseX > 950 || mouseY < 270 || mouseY > 770){ //exits scene
          if(mouseIsClicked){
              scene = "";
              //footSteps.play();
              mouseIsClicked = false;
         }
      }
   }
    //map room
    if(wallNum==2){
      background(0);
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      // Room
      stroke(0);
      fill(67, 84, 80);
      //image(testBackground, 0, 0, 1500, 1000);
      // Top
      quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
      // Bottom
      quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
      //map
      image(mapImage, 5, 280, 990, 500);//map is originally 1598 x 892
      //city points
      //fill(255);
      //ellipse(447.5, 630, 5); //test circle for reference point
      for(i=0; i<realCoordNumsXVal.length; i++){ //they're not accurate, but *close enough*
         //if(i==13){
          //fill(255);
         //}
         //if(i!=13){
          fill(77, 101, 144);
         //}
         ellipse(coordValuesX[i], coordValuesY[i], 20);
         
      }//tried to simplify it instead of having to graph every single one, but oh well

      //cities
          //fill(77, 101, 144);
          //Boston
      
      //fuckton of if statements to change color of circle when mouse hovers over it and to display the name and coordinates of the city
          //Boston
          if(mouseX> coordValuesX[0]-10 && mouseX< coordValuesX[0]+10 && mouseY > coordValuesY[0]-10 &&  mouseY < coordValuesY[0]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[0], coordValuesY[0], 20, 20);
              fill(255);
              text(allCoords[0], mouseX, mouseY);
          }
          //Madrid
          if(mouseX> coordValuesX[1]-10 && mouseX< coordValuesX[1]+10 && mouseY > coordValuesY[1]-10 &&  mouseY < coordValuesY[1]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[1], coordValuesY[1], 20, 20);
              fill(255);
              text(allCoords[1], mouseX, mouseY);
          }
          //Singapore
          if(mouseX> coordValuesX[2]-10 && mouseX< coordValuesX[2]+10 && mouseY > coordValuesY[2]-10 &&  mouseY < coordValuesY[2]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[2], coordValuesY[2], 20, 20);
              fill(255);
              text(allCoords[2], mouseX-370, mouseY);
          }
          //Tokyo
          if(mouseX> coordValuesX[3]-7 && mouseX< coordValuesX[3]+7 && mouseY > coordValuesY[3]-7 &&  mouseY < coordValuesY[3]+7 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[3], coordValuesY[3], 20, 20);
              fill(255);
              text(allCoords[3], mouseX-340, mouseY);
          }
          //Johannesburg
          if(mouseX> coordValuesX[4]-10 && mouseX< coordValuesX[4]+10 && mouseY > coordValuesY[4]-10 &&  mouseY < coordValuesY[4]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[4], coordValuesY[4], 20, 20);
              fill(255);
              text(allCoords[4], mouseX, mouseY+10);
          }
          //Rio
          if(mouseX> coordValuesX[5]-10 && mouseX< coordValuesX[5]+10 && mouseY > coordValuesY[5]-10 &&  mouseY < coordValuesY[5]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[5], coordValuesY[5], 20, 20);
              fill(255);
              text(allCoords[5], mouseX, mouseY);
          }
          //Nuuk
          if(mouseX> coordValuesX[6]-10 && mouseX< coordValuesX[6]+10 && mouseY > coordValuesY[6]-10 &&  mouseY < coordValuesY[6]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[6], coordValuesY[6], 20, 20);
              fill(255);
              text(allCoords[6], mouseX, mouseY);
          }
          //Melbourne
          if(mouseX> coordValuesX[7]-10 && mouseX< coordValuesX[7]+10 && mouseY > coordValuesY[7]-10 &&  mouseY < coordValuesY[7]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[7], coordValuesY[7], 20, 20);
              fill(255);
              text(allCoords[7], mouseX-360, mouseY);
          }
          //LA
          if(mouseX> coordValuesX[8]-10 && mouseX< coordValuesX[8]+10 && mouseY > coordValuesY[8]-10 &&  mouseY < coordValuesY[8]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[8], coordValuesY[8], 20, 20);
              fill(255);
              text(allCoords[8], mouseX, mouseY);
          }
          //Kyoto
          if(mouseX> coordValuesX[9]-7 && mouseX< coordValuesX[9]+7 && mouseY > coordValuesY[9]-7 &&  mouseY < coordValuesY[9]+7 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[9], coordValuesY[9], 20, 20);
              fill(255);
              text(allCoords[9], mouseX-330, mouseY+20);
          }
          //Beijing
          if(mouseX> coordValuesX[10]-10 && mouseX< coordValuesX[10]+10 && mouseY > coordValuesY[10]-10 &&  mouseY < coordValuesY[10]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[10], coordValuesY[10], 20, 20);
              fill(255);
              text(allCoords[10], mouseX-340, mouseY);
          }
          //London
          if(mouseX> coordValuesX[11]-10 && mouseX< coordValuesX[11]+10 && mouseY > coordValuesY[11]-10 &&  mouseY < coordValuesY[11]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[11], coordValuesY[11], 20, 20);
              fill(255);
              text(allCoords[11], mouseX, mouseY);
          }
          //Dubai
          if(mouseX> coordValuesX[12]-10 && mouseX< coordValuesX[12]+10 && mouseY > coordValuesY[12]-10 &&  mouseY < coordValuesY[12]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[12], coordValuesY[12], 20, 20);
              fill(255);
              text(allCoords[12], mouseX, mouseY);
          }
          /*
          if(mouseX> coordValuesX[13]-10 && mouseX< coordValuesX[13]+10 && mouseY > coordValuesY[13]-10 &&  mouseY < coordValuesY[13]+10 ){
              fill(230, 255, 0);
              ellipse(coordValuesX[13], coordValuesY[13], 20, 20);
              fill(255);
              text(allCoords[13], mouseX, mouseY);
          }*/ //test rollover and name with the last thing in the array
      
          /*
          fill(77, 101, 144);
          ellipse(400, 600, 20, 20);
          if(mouseX > 390 && mouseX < 410 && mouseY > 590 && mouseY < 610){
              fill(230, 255, 0);
              ellipse(400, 600, 20, 20);
              fill(255);
              text(allCoords[2], mouseX, mouseY);
          }
          */ //testing the scrollover & city name feature

   }
   if(wallNum==3){
      background(0);   
      //Game Window
      fill(150);
      rect(0,0,1000,1000);
      // Room
      stroke(0);
      fill(67, 84, 80);
      //image(testBackground, 0, 0, 1500, 1000);
      // Top
      quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
      // Bottom
      quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
      image(caesarWheel, 200, 250, 600, 600);
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
                switchScenes.play();
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
                switchScenes.play();
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
        scene="";
        wallNum=1;
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
      if(mouseIsClicked && roomNum == 2){
        
      }
  } 

//winning screen
  if(roomNum>2){
     background(0);
      fill(0);
      rect(0,0, 1000, 1000);
      fill(255);
      text("You win!", 200, 500);
      textSize(60);
      text("Click anywhere to restart", 150, 600);
      text("Thank you for playing!", 150, 700);
      if(mouseIsClicked){
          //timer = allottedTime;
          wallNum=1;
          scene="";
          roomNum=0;
          playing=true;
          enteredCode = false;
          doorIsLocked = true;
          //lvl1 variables
          lvl1ButtonPressed = false;
          //lvl2 variables
          lS1=0; lS2=0; lS3=0; lS4=0;
          doorSoundPlayed = false;
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
  if (scene === "room3numpad") {
    if (code.length < 5) {
      code += key.toString();
      if (key.code === BACKSPACE || key.code === DELETE) {
        code = code.substring(0, code.length - 2);
      }
    }
  }
};