/* TO DO:
    - design level 2
    - make restart button on "GAME OVER" screen instead of just pressing enter
    - improve welcome screen
    - separate files based on object type
    - figure out how to have different levels as different objects (for readability)
    - inventory system
    - add a tutorial level
    - SOMEBODY CHECK WITH BARNEY IF WE NEED TO LEGALLY OWN ALL OUR ASSETS
    REACH GOALS:
    - design actual art
    - find background music/noise
    - include certain sounds for certain objects interacted with
    - fix UI
    - inventory UI
    - settings tab
    - switch to unity (really reaching there, woah)
*/
//world map by Bensik Imeri
//key by Victoria Lostaunu
//images
var map;
var caesarWheel; //I didn't feel like programming one, sry
var matchBox;
var log;
var houseKey;
var oldStyleKey;
var testBackground;
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

var mouseIsClicked = false;
var message = "";
var level = 2;
var scene = "";
var keys = [];
var allottedTime = 120;
var timer;
var playing = true; //boolean for whether the game is currently running or not
var sceneNum = 1;
var maxSceneNum = 3;
var items = [];

//for level 2
{
var fakeCoords = 
    [
    "1___: 42.3601 N, 71.0589 W", //1
    "_2__: 40.4168 N, 3.7038 W", //2
    "__3_: 01.3521 N, 103.8198 E", //3
    "___4: 35.6804 N, 139.7690 E"]; //might shorten to just cities for puzzle purposes //4
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
    "I",
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
  //glassSoundEffect = loadSound('assets/Sliding-a-wine-glass-on-table-A1-www.fesliyanstudios.com.mp3');
  metalJingling = loadSound('assets/Pin Drop-SoundBible.com-655931796.mp3');
  switchScenes = loadSound('assets/Pen Clicking-SoundBible.com-482574858.mp3');
  //musicBox = loudSound('assets/All I Ask of You.mp3'); //<- MAY BE LOUD let me know if I have to make a separate, quieter version that we also own the rights to 
  map = loadImage('assets/world-map-1577937.png');
  caesarWheel = loadImage('assets/caesarWheelFINAL.png');
  key = loadImage('assets/key.png');
  //footSteps = loadSound('assets/Dress-shoes-on-Concrete-Floor-super-fast-pace-running-www.FesliyanStudios.com.mp3');
  doorUnlock = loadSound('assets/door_lock.mp3');
  lockedDoor = loadSound('assets/Trying-to-Open-Door-Handle-2-www.fesliyanstudios.com.mp3');
  testBackground = loadImage('assets/pawel-czerwinski-MniDX98S7zw-unsplash.jpg');
}
function setup() {
  
  createCanvas(1000, 1100);
  
}
function draw(){ 
    // Standards for player
     message = "";
     cursor(ARROW);
    //level 2
    if(level == 2){
     

      if(sceneNum == 1 && scene==""){
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
       
        //poster
        fill(255);
        rect(40, 120, 480, 270);
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
                    level++;
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
        message = "Use the green buttons to change each letter.\nClick anywhere outside to exit.";
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
      if(sceneNum==2){
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
        image(map, 5, 280, 990, 500);//map is originally 1598 x 892
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
     if(sceneNum==3){
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
    if(level!=0){
    //Buttons to navigate between scenes
    if(scene==""){
        //Button right
        if(sceneNum!=maxSceneNum){
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
                    sceneNum++;
                    switchScenes.play();
                    mouseIsClicked = false;
                }
            }
        }
        //button left
        if(sceneNum!=1){
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
                    sceneNum--;
                    switchScenes.play();
                    mouseIsClicked = false;
                }
            }
        }
    }

  }

  //winning screen
  if(level>2){
     background(0);
      fill(0);
      rect(0,0, 1000, 1000);
      fill(255);
      text("You win!", 200, 500);
      textSize(60);
      text("Press ENTER to restart", 150, 600);
      text("Thank you for playing!", 150, 700);
      if(keyCode == ENTER){
          //timer = allottedTime;
          sceneNum=1;
          scene="";
          level=2;
          playing=true;
      }
  }
    //restarts level and timer
  if(!playing){
      background(0);
      fill(0);
      rect(0,0, 1000, 1000);
      fill(255);
      text("GAME OVER", 200, 500);
      textSize(60);
      text("Press ENTER to restart", 250, 600);
      if(keyCode == ENTER){
          //timer = allottedTime;
          sceneNum=1;
          scene="";
          level=2;
          playing=true;
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