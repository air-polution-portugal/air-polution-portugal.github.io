//VISUALIZAÇÃO DE DADOS & INTERAÇÃO USER


function visData()
{    
  world.update();

  //CRIAR CÍRCULOS
  elemento.drawElement();
  
  //INTERAÇÃO MOUSE
  elemento.drawTootip ();
  
  
  
   //SLIDER - INTERAÇÃO PARA O USER ESCOLHER O ANO DE VISUALIZAÇÃO DE DADOS
  //(VALOR DO SLIDER, VAI SER INTRODUZIDO NA FUNÇÃO DATA IMPORT PARA IMPORTAR OS DADOS DE UM ANO ESPECÍFICO)
  
  //POSIÇÃO SLIDER
  const x = (width/4)*3;
  const y = height/4;
  const w = width/4;
  const h = 15;
  
  my_range_slider.position (x-w/2, y-h/2);    //(x, y)
  my_range_slider.size (w, h);    //(width, height)
  
  //FRAME EXTERIOR SLIDER
  noFill();
  stroke (0);
  
  rect (my_range_slider.slider().x, my_range_slider.slider().y, my_range_slider.slider().w, my_range_slider.slider().h);

  //LINHAS (STEPS) SLIDER
  for (let i=0; i<=my_range_slider.numTickMarks(); i++) 
  {
    line (i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 - h/4,
          i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 + h/4);
  }

  //CAMINHO - SLIDER
  line (my_range_slider.track().x1, my_range_slider.track().y1, my_range_slider.track().x2, my_range_slider.track().y2);
  
  //POINTER SLIDER
  fill (0);
  noStroke();
  //ellipse (my_range_slider.thumb().x, my_range_slider.thumb().y, 10);
  triangle(
    my_range_slider.thumb().x, my_range_slider.thumb().y,
    my_range_slider.thumb().x-10, my_range_slider.thumb().y-20,
    my_range_slider.thumb().x+10, my_range_slider.thumb().y-20);

  //LEGENDA SLIDER
  slider_value = my_range_slider.value();
  textFont(font_Lato);
  textAlign (CENTER, CENTER);
  textSize (20);
  text (slider_value, my_range_slider.thumb().x, my_range_slider.thumb().y - 35);
  
  
  slider_value = my_range_slider.value();
  //console.log(slider_value, new_slider_value);
  mudarAno();  
}


//INTERAÇÃO MOUSE - MUDAR O ANO DE VISUALIZAÇÃO DOS DADOS
function mudarAno()
{
  //SE O VALOR QUE O SLIDER DEVOLVE MUDAR
  if (slider_value !== new_slider_value)
  {
    new_slider_value = slider_value;

    //OS DADOS SÃO NOVAMENTE IMPORTADOS DA TABELA, ROW/ANO DEPENDE DO VALOR DO SLIDER
    importData(new_slider_value); 
  }
}


//MOUSE - QUANDO SE SOLTA O BOTÃO DO MOUSE, MUDA A SCENE
function mouseReleased()
{
  mouseIsReleased = true;
}