function draw(){
	if(level == 3){ 
    //if(keyCode == DOWN_ARROW){level--; }if(keyCode == RIGHT_ARROW){level++; }//for testing purposes
    background(0);
     //Game Window
     fill(150);
     rect(0,0,1000,1000);
     // Room
     stroke(0);
     fill(67, 84, 80);
     // Top
     quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
     // Bottom
     quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
     if(sceneNum == 1){
        scene="";
        //background(0); 
       /*
        //Game Window
         fill(150);
        rect(0,0,1000,1000);
        // Room
        stroke(0);
        fill(67, 84, 80);
        // Top
        quad(0, 0 ,0, 100, 1000, 100, 1000, 0);
        // Bottom
        quad(0, 1000, 0, 900, 1000, 900, 1000, 1000);
        *//*
        //poster
        fill(255);
        rect(70, 300, 600, 400);
        fill(0);
        textSize(30);
        for(i=0; i< fakeCoords.length; i++){
            text(fakeCoords[i], 90, 460 + (i*40));
        }
     }
      
     //room2
     if(sceneNum==2){
        scene="";
        //background(0);
        /*
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
        //image(map, 70, 300);
        
     }
     /*
     if(sceneNum==3){
        scene="";
        /*  
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
        //image(caesarWheel, 300, 300);
        
     }
     */
}