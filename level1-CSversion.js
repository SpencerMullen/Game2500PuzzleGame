  // level 1
  if(level == 1){
    background(0);
    //if(keyCode == UP_ARROW){level++; }//for testing purposes
     
    if(scene != "room3numpad")
      code = "";

    // Room 1
    if(sceneNum==1){
      //Game Window
      background(0);
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
      //poster
      fill(255);
      rect(180, 120, 500, 300);
      fill(0);
      textSize(30);
      for(i=0; i< equations.length; i++){
        text(equations[i], 210, 160 + (i*40));
       }
      // Door
      noStroke();
      fill(160,82,45);
      rect(300, 550, 200, 350);
      fill(235, 195, 52);
      ellipse(450,700,30,30);
      // Door Action
      if(mouseX > 300 && mouseX < 500 && mouseY > 550 && mouseY < 900){
        cursor('grab');
        if(!keyUsed){
            message = "Door is locked.";
        }
        if(hasKey){
            if(keyUsed){
                message = "Door is unlocked. Hit ENTER to continue";
                
             }
            if(mouseIsClicked){
                //doorLocked.play();
                keyUsed=true;
                 mouseIsClicked=false;
            }
           
        }
      }
       if(keyCode==ENTER && keyUsed){
            level++; //shows winning screen but doesn not restart level idk why
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
          sceneNum++;
          mouseIsClicked = false;
        }
      }}
      */
      

    }

    // Room 2
    if(sceneNum == 2){
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
          sceneNum++;
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
          sceneNum--;
          mouseIsClicked = false;
        }
      }
      }
      */
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
      text("742 + 6315 = ?", 300,500);
      message = "Click anywhere to exit.";
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked = false;
      }
    }
    
    if(sceneNum==3){
      background(0);
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
        fill(214, 162, 19);
        circle(375,450, 50)
        rect(368,450, 10, 75);
        rect(350,495, 20, 10);
        rect(350,515, 20, 10);
        fill(90, 102, 102);
        circle(375,450,30);
      }
      if(mouseX > 300 && mouseX < 450 && mouseY> 400 && mouseY < 550){
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
      if(!(mouseX > 300 && mouseX < 450 && mouseY> 400 && mouseY < 550)){message = "";} //attempt at fixing the madness
      if(!enteredCode){
        let holderColor = color(19, 172, 214);
        holderColor.setAlpha(50);
        fill(holderColor);
        stroke(0);
        rect(250,400,250,150);
      }
      if(enteredCode){
        
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
          sceneNum--;
          mouseIsClicked = false;
        }
      }}*/
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
      for(i=0; i<10; i++){
        //left side
        if(i%2==0){
            fill(73, 72, 105);
            rect(230, 370 + (i*50), 155, 75);
            fill(0);
            textSize(60);
            text(i, 307.5, 400 + (i*50));
        }
        //right side
        if(i%2!=0){
            fill(73, 72, 105);
            rect(515, 370 + ((i-1)*50), 155, 75); 
            fill(0);
            textSize(60);
            text(i, 577.5, 426 + ((i-1)*50)); //x val of number should be at rectXLength/2+ rectXCoord - textSize/4 
            //y val of number is the bottom left corner
            //y val of number should be at rectYCoord + rectYLength/2 + textSize/4 + something idk
        }
      }
      //rect(230, 370, 90, 50);
      //rect(600, 450, 30, 20);
      
      fill(0);
      textSize(50);
      text(code, 240,310);

      message = "Type in the password and press the enter button or click anywhere else to exit.";
      if(mouseIsClicked == true){
        scene = "";
        mouseIsClicked = false;
      }
     if(code=="7257"){enteredCode=true; }//glassSoundEffect.play();
    }

  }
  