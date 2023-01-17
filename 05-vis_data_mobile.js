//VISUALIZAÇÃO DE DADOS & INTERAÇÃO USER - mobile


function visDataMobile()
{    
  worldMobile.update();

  //CRIAR CÍRCULOS
  elementoMobile.drawElementMobile();
  
  //MOSTRAR LEGENDA DAS PARTICLES (MANTER MOUSE PRESSED)
  elementoMobile.mostrar_legendaMobile();
  
  
  
   //SLIDER - INTERAÇÃO PARA O USER ESCOLHER O ANO DE VISUALIZAÇÃO DE DADOS
  //(VALOR DO SLIDER, VAI SER INTRODUZIDO NA FUNÇÃO DATA IMPORT PARA IMPORTAR OS DADOS DE UM ANO ESPECÍFICO)
  
  //POSIÇÃO SLIDER
  const x = (width/2);
  const y = (height/5)*4.6;
  const w = width/2;
  const h = 40;
  
  my_range_slider.position (x-w/2, y-h/2);    //(x, y)
  my_range_slider.size (w, h);    //(width, height)
  
  //FRAME EXTERIOR SLIDER
  /*noFill();
  stroke (100);
  
  rect (my_range_slider.slider().x, my_range_slider.slider().y, my_range_slider.slider().w, my_range_slider.slider().h);*/

  //LINHAS (STEPS) SLIDER
  stroke (100);
  strokeWeight(0.5);
  for (let i=0; i<=my_range_slider.numTickMarks(); i++) 
  {
    line (i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 - h/6,
          i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 + h/6);
  }

  //CAMINHO - SLIDER
  line (my_range_slider.track().x1, my_range_slider.track().y1, my_range_slider.track().x2, my_range_slider.track().y2);
  
  //POINTER SLIDER
  fill ('#DC388B');
  noStroke();
  //ellipse (my_range_slider.thumb().x, my_range_slider.thumb().y, 10);
  triangle(
    my_range_slider.thumb().x, my_range_slider.thumb().y,
    my_range_slider.thumb().x-10, my_range_slider.thumb().y-20,
    my_range_slider.thumb().x+10, my_range_slider.thumb().y-20);

  //LEGENDA SLIDER
  slider_value = my_range_slider.value();
  noStroke();
  fill(100);
  textFont(font_Lato);
  textAlign (CENTER, CENTER);
  textSize (16);
  //text (slider_value, my_range_slider.thumb().x, my_range_slider.thumb().y - 35);
  text (elementoMobile.year, my_range_slider.thumb().x, my_range_slider.thumb().y - 35);
  
  
  slider_value = my_range_slider.value();
  //console.log(slider_value, new_slider_value);
  
  mudarAno();
  
  back();
}



//INTERAÇÃO MOUSE - MUDAR O ANO DE VISUALIZAÇÃO DOS DADOS
function mudarAno()
{
  //SE O VALOR QUE O SLIDER DEVOLVE MUDAR
  if (slider_value !== new_slider_value &&
     mouseIsPressed === false)
  {
    new_slider_value = slider_value;

    //OS DADOS SÃO NOVAMENTE IMPORTADOS DA TABELA, ROW/ANO DEPENDE DO VALOR DO SLIDER
    importData(new_slider_value); 
  }
}


//BOTÃO PARA VOLTAR ATRÁS -> INTRO (ANTES DA VISUALIZAÇÃO SER INICIADA)
function back()
{
  //BOTÃO
  let x = 50;
  let y = 50;

  fill('#DC388B');
  stroke(100);
  strokeWeight(1.5);
  ellipse(x, y, radius_button);

  //ICON
  imageMode(CENTER);
  image(icon_back, x, y, radius_button, radius_button);
  
  
  //MEDIR DISTÂNCIA DO MOUSE AO CENTRO DO BOTÃO,
  this.distancia = dist (mouseX, mouseY, x, y); 

  //QUANDO O USER PRESSEIONA O BOTÃO
  if (this.distancia <= radius_button &&
      mouseIsPressed===true) 
  {
    //MUDAR DE SCENE (BACK -> VOLTAR À SCENE UM)
    scene_num = 1;
    mouseIsReleased = false;
  }   
}



//MOUSE - QUANDO SE SOLTA O BOTÃO DO MOUSE, MUDA A SCENE
function mouseReleased()
{
  mouseIsReleased = true;
}