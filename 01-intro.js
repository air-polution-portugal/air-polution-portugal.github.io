//1ª INTRODUÇÃO À VISUALIZAÇÃO


//CÍRCULOS INTRO
let agents = [];
let num_agents = 25;


//CLASS AGENT -> CIRCULOS
class Agent extends c2.Circle {
  constructor() {
    //POSIÇÃO E RAIO RANDOM
    let x = random(width);
    let y = random(height);
    let r = random(10, width / 15);
    super(x, y, r);

    //DIREÇÃO RANDOM
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);

    //COR RANDOM (ENTRE O COLOR RANGE DAS PARTICLES)
    let light_blue = color("#96D3F3");
    let dark_blue = color("#105D97");
    this.color = lerpColor(dark_blue, light_blue, random(0, 1));
  }

  //UPDATE DA POSIÇÃO
  update() {
    this.p.x += this.vx;
    this.p.y += this.vy;

    if (this.p.x < this.r) {
      this.p.x = this.r;
      this.vx *= -1;
    } else if (this.p.x > width - this.r) {
      this.p.x = width - this.r;
      this.vx *= -1;
    }
    if (this.p.y < this.r) {
      this.p.y = this.r;
      this.vy *= -1;
    } else if (this.p.y > height - this.r) {
      this.p.y = height - this.r;
      this.vy *= -1;
    }
  }

  
  //PARTICLES - ELLIPSES ATRAVÉS DE PONTOS
  display()
  {
    //CENTRO DA ELLIPSE
    let centerX = this.p.x;
    let centerY = this.p.y;

    //(OUTROS PONTOS)
    let x, y;
    let lastX = -999;
    let lastY = -999;

    //INCREMENTAÇÃO DO ÂNGULO
    for (let ang = 0; ang < 360; ang += 8) {
      //CONVERTER DEGREES TO RADIANS
      let rad = radians(ang);

      //TRIGNOMETRIA FANCY
      x = centerX + this.r * cos(rad);
      y = centerY + this.r * sin(rad);

      //PONTOS QUE VÃO COMPOR A ELLIPSE
      //point(x,y);

      //LINHAS DESDE O CENTRO AOS PONTOS DA ELLIPSE CALCULADOS
      stroke(this.color);
      strokeWeight(0.3);
      line(centerX, centerY, x, y);
    }
  }
}

function intro() {
  background("#282E36");

  //DESENHAR E UPDATE CÍRCULOS
  for (let i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].display();
  }

  //BOTÃO - MUDAR DE SCENE
  let button_label = "START  VISUALIZATION";
  textFont(font_Lato);
  let label_size = 12;

  let x = width / 2;
  let y = height / 2;
  let w = textWidth(button_label) * 1.5;
  let h = label_size * 3;

  //BOTÃO
  fill("#DC388B");
  noStroke();
  rectMode(CENTER);
  rect(x, y, w, h, 16);

  //LABLE
  fill(100);
  textAlign(CENTER, CENTER);
  textSize(label_size);
  text(button_label, x, y);

  //INTERAÇÃO BOTÃO
  if (
    mouseX >= x - w / 2 &&
    mouseX <= x + w / 2 &&
    mouseY >= y - h / 2 &&
    mouseY <= y + h / 2 &&
    mouseIsPressed === true &&
    mouseIsReleased === true)
  {
    //SCENE DEPENDE DO TAMANHO DO ECRÃ
    if (windowWidth > 450)
    {
      //MUDAR DE SCENE - DESKTOP
      scene_num = 2;
      mouseIsReleased = false;
    }else
    {
      //MUDAR DE SCENE - MOBILE
      scene_num = 3;
      mouseIsReleased = false;
    }
  }
  //console.log(windowWidth, scene_num)
}
