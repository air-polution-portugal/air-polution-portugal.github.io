//Created by Ren Yuan

function intro(){ //introdução
  //background("#dedb7b");
  
  let x = width/4;
  let y = height/2;
  let w = 300;
  let h = 50;
  
  let c = color(128,128,128,128)
  
  
  //rotateX(frameCount)
  rectMode(CENTER);
  let value = alpha(c)
  fill(c)
  
  //CAIXA - TEXTO
  rect(width/4, height/2-75,350,250);
  
  noStroke()
  fill(0)
  textSize(56)
  textAlign(CENTER)
  text("Titulo",width/4,height/3); 
  textSize(24)
  text("Descrição",width/4,height/3+50)
  
  //Retangulo para passar de página
  rect(width/4, height/2,300,50);
  
  
  if(mouseX >= x-w/2 &&
     mouseX <= x+w/2 && 
     mouseY >= y-h/2 && 
     mouseY <= y+h/2 &&
     mouseIsPressed === true &&
     mouseIsReleased === true){ //criar um botão    
      scene_num = 2;
      mouseIsReleased = false;
  }
  
  
  


}

