/*
AIR POLUTION - PORTUGAL

\\Developers:
_Carolina Mendonça | nº 3200349
_Eduardo Vitorino | nº3200337


\\"Perspetivas"
_2022-23
_3º Ano | 1º Semestre
_Laboratório de Projeto
_Design Gráfico e Multimédia
_ESAD - Escola Superior Arte e Design, Politécnico de Leiria
_Docente: Marco Heleno
_14/12/2022
*/


let font_Merri, font_Lato;
let scene_num, mouseIsReleased;
let tabela_dados, world, elemento;
let my_range_slider, slider_value, new_slider_value;


//PRELOAD TABELA DE DADOS
function preload()
{
  tabela_dados = loadTable("00-Dados.csv", "csv", "header");
  
  //TEXT FONTS
  font_Merri = loadFont('00_Font_Merriweather-Regular.ttf');
  font_Lato = loadFont('00_Font_Lato-Regular.ttf');
}


function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB, 360, 100, 100);
  
  
  //VARIÁVEIS - MUDAR DE SCENE
  scene_num = 1;
  mouseIsReleased = true;
  
  
  //SETUP PARA VISUALIZAÇÃO DE DADOS
  //CRIAR WORLD
  world = new c2.World(new c2.Rect(0, 0, width, height));
  

  //SLIDER - INTERAÇÃO PARA O USER ESCOLHER O ANO DE VISUALIZAÇÃO DE DADOS
  my_range_slider = new RangeSlider (0, 17, 1, 0); // (min, max, step, default value)
  
  slider_value = 0;
  new_slider_value = 0;
  importData(slider_value);  
  
  
  //COLISÃO ENTRE PARTICLES
  let collision = new c2.Collision();
  world.addInteractionForce(collision);

  //CONVERGÊNCIA DAS PARTICLES PARA UM PONTO
  let pointField = new c2.PointField(new c2.Point(width/4+20, height/2), 1);
  world.addForce(pointField);
}



function draw()
{
  background('#F0E6E6');
  
  
  //SCENE MANAGER
  if (scene_num === 1)
    intro();
  else if (scene_num === 2)
    visData(); 
}



function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);
}