/*
AIR POLUTION - PORTUGAL

\\Developers:
_Carolina Mendonça | nº 3200349
_Eduardo Vitorino | nº 3200337


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
let tabela_dados, world, worldMobile, elemento, elementoMobile;
let my_range_slider, slider_value, new_slider_value;
let icon_back, icon_info, radius_button = 25;


//PRELOAD TABELA DE DADOS
function preload()
{
  tabela_dados = loadTable("00-PreLoad/Dados.csv", "csv", "header");
  
  //TEXT FONTS
  font_Merri = loadFont('00_Font_Merriweather-Regular.ttf');
  font_Lato = loadFont('00_Font_Lato-Regular.ttf');
  
  //ICONS
  icon_back = loadImage('00-PreLoad/Icons/back.svg');
  icon_info = loadImage('00-PreLoad/Icons/info.svg');
}


function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB, 360, 100, 100);
    
  
  //VARIÁVEIS - MUDAR DE SCENE
  scene_num = 1;
  mouseIsReleased = true;
  
  
  //CRIAR CÍRCULOS INTRO
  let num_agents = 25;

  for (let i = 0; i < num_agents; i++) agents[i] = new Agent();
  

  //SLIDER - INTERAÇÃO PARA O USER ESCOLHER O ANO DE VISUALIZAÇÃO DE DADOS
  my_range_slider = new RangeSlider (0, tabela_dados.getRowCount()-1, 1, 0); // (min, max, step, default value)
  
  slider_value = 0;
  new_slider_value = 0;
   
  //CRIAR WORLD E PARTICLES & IMPORTAR DADOS
  re_Start();
  
  console.log(windowWidth);
}



//SETUP PARA VISUALIZAÇÃO DE DADOS
function re_Start() 
{
  //CRIAR WORLDS - Desktop e Mobile
  world = new c2.World(new c2.Rect(0, 0, width, height));
  worldMobile = new c2.World(new c2.Rect(0, 0, width, height));
  
  let collision = new c2.Collision();
  world.addInteractionForce(collision);
  worldMobile.addInteractionForce(collision);
  
  let lineField = new c2.LineField(new c2.Line(
    (width/4*3)-100, height/2.5,
    (width/4*3)+100, height/2.5),
    0.5);  //FORÇA
  
  world.addForce(lineField);
  
  
  let lineFieldMobile = new c2.LineField(new c2.Line(
  (width/2)-120, height/2,
  (width/2)+120, height/2),
  0.6);  //FORÇA
  
  worldMobile.addForce(lineFieldMobile);
  
  importData(slider_value); 
}



function draw()
{
  background('#282E36');
  
  
  //SCENE MANAGER
  if (scene_num === 1)
    intro();
  else if (scene_num === 2)
    visDataDesktop();
  else if (scene_num === 3)
    visDataMobile();
}



function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);
  re_Start();
}