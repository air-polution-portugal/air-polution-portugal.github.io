//1ª INFO QUE O USER VÊ QUANDO ABRE O PROJETO - CONTEXTUALIZAÇÃO DO PROJETO

//VARIÁVEIS PARA ARMAZENAR O TEXTO
let titulo = 'Título :)';
let about = 'Descrição - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non commodo lorem, gravida vehicula dolor. In gravida interdum euismod. Etiam molestie risus dui. Pellentesque porta leo vel erat sodales, ac malesuada orci ultricies. Vestibulum non augue pellentesque, tincidunt dui quis, pulvinar erat. Nulla facilisis sit amet nulla sit amet bibendum.';




function intro()
{
  background(195, 20, 60);   
  
  
  //FRAME
  let x_box = width/12;
  let y_box = height/6;
  let w_box = x_box + width/2;
  let h_box = 400;
  let margin = 20;
  
  fill(0, 0, 100, 0.25);
  noStroke();
  rect(x_box, y_box, w_box, h_box);
  

  //TEXT
  fill(100);
  noStroke();
  textAlign(LEFT, TOP);
  
  
  //TÍTULO
  textFont(font_Merri);
  textSize(45);
  text(titulo, x_box+margin, y_box+margin);
  
  
  //DESCRIÇÃO
  textFont(font_Lato);
  textSize(18);
  text(about, x_box+margin, y_box+90, w_box - (margin*2) );
  
  
  
  //BOTÃO - MUDAR DE SCENE
  let x = x_box + margin;
  let y = y_box + 320;
  let w = w_box - margin*2;
  let h = 50; 
  
  rect(x, y, w, h);
 
  //LABLE
  fill(195, 70, 60);
  textAlign(CENTER, CENTER);
  text("CONTINUE", x + w/2, y+ h/2);
    
  
  //INTERAÇÃO BOTÃO
  if(mouseX >= x &&
     mouseX <= x+w && 
     mouseY >= y && 
     mouseY <= y+h &&
     mouseIsPressed === true &&
     mouseIsReleased === true)
  { 
      //MUDAR DE SCENE
      scene_num = 2;
      mouseIsReleased = false;
  }
}