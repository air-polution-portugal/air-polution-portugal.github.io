function context(){ //contexto
  
  background(255);
  noStroke();
  
  let x1 = map (mouseX,0,width,100,150)
  let x2 = map(mouseX, 0, width, 0, 100, true);
  
  ellipse(x1, height/3,100,25)
  ellipse(x2,height/2, 25, 25);
  
  let x = width/2;
  let y = height/2
  let w = 100
  let h = 100
  
  
  //rotateX(frameCount)
  rectMode(CENTER);
  fill(0)
  textSize(24)
  textAlign(CENTER)
  text("Titulo",width/2,height/3); 
  text("alalalallalalalala",width/2,height/3+80)
  rect(width/2, height/2,300,50);
  
  
  if(mouseX >= x-w/2 &&
     mouseX <= x+w/2 && 
     mouseY >= y-h/2 && 
     mouseY <= y+h/2 &&
     mouseIsPressed === true &&
     mouseIsReleased === true){ //criar um botão
    
    scene_num = 3;
    mouseIsReleased = false;
  }

}