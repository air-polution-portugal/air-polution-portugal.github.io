/*
<h1>Carbon Intensity of the Economy</h1>
<h2>Portugal | 1995 - 2020</h2>

DEVELOPERS:
_Carolina Mendonça | nº 3200349
_Eduardo Vitorino | nº 3200337


\\"Perspetivas"
_2022-23
_3º Ano | 1º Semestre
_Laboratório de Projeto
_Design Gráfico e Multimédia
_ESAD - Escola Superior Arte e Design, Politécnico de Leiria
_Docente: Marco Heleno
_18/01/2023
*/


let font_Merri, font_Lato;
let scene_num, mouseIsReleased;
let tabela_dados, world, worldMobile, elemento, elementoMobile;
let my_range_slider, slider_value, new_slider_value;
let icon_back, icon_info, radius_button = 25;


//PRELOAD TABELA DE DADOS
function preload()
{
  //TABELA DE DADOS
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
  
  
  //CRIAR PARTICLES INTRO
  let num_agents = 25;
  for (let i = 0; i < num_agents; i++) agents[i] = new Agent();
  

  //SLIDER - INTERAÇÃO PARA O USER ESCOLHER O ANO DE VISUALIZAÇÃO DE DADOS
  my_range_slider = new RangeSlider (0, tabela_dados.getRowCount()-1, 1, 0); // (min, max, step, default value)
  
  slider_value = 0;
  new_slider_value = 0;
   
  //CRIAR WORLD E PARTICLES & IMPORTAR DADOS
  re_Start();
}



//SETUP PARA VISUALIZAÇÃO DE DADOS
function re_Start() 
{
  //CRIAR WORLDS - DESKTOP e MOBILE
  world = new c2.World(new c2.Rect(0, 0, width, height));
  worldMobile = new c2.World(new c2.Rect(0, 0, width, height));
  
  //DESKTOP
  let collision = new c2.Collision();
  world.addInteractionForce(collision);
  worldMobile.addInteractionForce(collision);
  
  let lineField = new c2.LineField(new c2.Line(
    (width/4*3)-100, height/2.5,
    (width/4*3)+100, height/2.5),
    0.5);  //FORÇA
  
  world.addForce(lineField);
  
  //MOBILE
  let lineFieldMobile = new c2.LineField(new c2.Line(
  (width/2)-120, height/8,
  (width/2)+120, height/8),
  0.5);  //FORÇA
  
  worldMobile.addForce(lineFieldMobile);
  
  //IMPORTAR DADOS
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


/*//(EXPORTAR FRAMES)
function keyPressed() {
saveFrames('out', 'png', 1, 25);
}*/


function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);
  re_Start();
}