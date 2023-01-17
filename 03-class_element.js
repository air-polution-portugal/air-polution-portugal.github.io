//CRIAR CLASS DE ELEMENTOS - Desktop
class Element
{
   //VALORES QUE A CLASS RECEBE
   constructor(year_num, agricultura_value, 
               extrativa_value, transformadoras_value,
               gas_value, agua_value,
               construcao_value, comercio_value,
               transportes_value,alojamento_value, comunicacao_value,
               financeiras_value, imobiliarias_value,
               tecnologias_value, servicos_value,
               administracao_value, educacao_value,
               saude_value, artisticas_value,
               outras_value, total_value)
   {
     //VÃO BUSCAR OS VALORES DOS DADOS QUE FORAM IMPORTADOS DA TABELA)
     this.year = year_num;
     this.total = total_value;
 
     
     // //DEFINIR OS NOMES DE CADA SETOR
     // this.label_setores = [];
     // this.label_setores[0] = "Setor Primário";
     // this.label_setores[1] = "Indústrias Extrativas";
     // this.label_setores[2] = "Indústrias Transformadoras";
     // this.label_setores[3] = "Elétrecidade, Gás, Vapor";
     // this.label_setores[4] = "Captação, Tratamento e Distribuição de Água";
     // this.label_setores[5] = "Construção";
     // this.label_setores[6] = "Comércio por Grosso e a Retalho";
     // this.label_setores[7] = "Transportes e Armazenagem";
     // this.label_setores[8] = "Alojamento, Restauração e Similares";
     // this.label_setores[9] = "Atividades de Informação e de Comunicação";
     // this.label_setores[10] = "Atividades Financeiras e de Seguros";
     // this.label_setores[11] = "Atividades Imobiliárias";
     // this.label_setores[12] = "Atividades de Consultoria, Científicas Técnicas e Similares";
     // this.label_setores[13] = "Atividades Administrativas e dos Serviços de Apoio";
     // this.label_setores[14] = "Administração Pública e Defesa, e Segurança Social Obrigatória";
     // this.label_setores[15] = "Educação";
     // this.label_setores[16] = "Atividades de Saúde Humana e Apoio Social";
     // this.label_setores[17] = "Atividades Artísticas, de Espetáculos, Desportivas e Recreativas";
     // this.label_setores[18] = "Outras Atividades e Serviços";
     
     //DEFINIR OS NOMES DE CADA SETOR - EN
     this.label_setores = [];
     this.label_setores[0] = "Primary Sector";
     this.label_setores[1] = "Extractive Industries";
     this.label_setores[2] = "Transforming Industries";
     this.label_setores[3] = "Energy Sector";
     this.label_setores[4] = "Water Capture, Treatment and Distribution";
     this.label_setores[5] = "Construction";
     this.label_setores[6] = "Tertiary Sector";
     this.label_setores[7] = "Transportation and Storage";
     this.label_setores[8] = "Housing and Food Service";
     this.label_setores[9] = "Information and Communication Activities";
     this.label_setores[10] = "Financial and Similar Activities";
     this.label_setores[11] = "Real Estate Activities";
     this.label_setores[12] = "Consulting, Scientific, Technical and Similar Activities";
     this.label_setores[13] = "Administrative and Support Service Activities";
     this.label_setores[14] = "Public Administration and Defense and Compulsory Social Security";
     this.label_setores[15] = "Education";
     this.label_setores[16] = "Human Health and Social Work Activities";
     this.label_setores[17] = "Arts, Entertainment, Sports, and Recreation Activities";
     this.label_setores[18] = "Other Service Activities";
     
     //DEFINIR AS DESCRIÇÕES DE CADA SETOR
     this.about_setores = [];
     this.about_setores[0] = "Atividades relacionadas com a agricultura, pecuária, caça, floresta e pesca";
     this.about_setores[1] = "Setor relacionado à extração de legnito, petróleo bruto, gás natural e preparação de minérios de ferro";
     this.about_setores[2] = "Setor relacionado à preparação e conservação de peixes, crustáceos, moluscos, frutas e de produtos hortícolas";
     this.about_setores[3] = "Setor relacionado com a produção, transporte, distribuição e comércio de eletricidade. Produção de gás, distribuição de combustíveis gasosos por condutas, comercio de gás por condutas";
     this.about_setores[4] = "Distribuição água, esgotos, gestão de resíduos e serviços de descontaminação";
     this.about_setores[5] = "Setor que inclui a promoção imobiliária (desenvolvimento de projetos de edifícios), Construção de edifícios (residenciais e não residenciais), Construção de estradas, pontes, túneis, pistas de aeroportos e vias-férreas";
     this.about_setores[6] = "Inclui a secção de reparação de veículos automóveis, bem como a instalação e reparação de bens de uso pessoal e doméstico. (Automóveis, Motociclos)";
     this.about_setores[7] = "Área relacionada com o transporte por oleodutos ou gasodutos, transportes aéreos de passageiros, armazenagem, atividades auxiliares dos transportes";
     this.about_setores[8] = "Atividade relacionada com a edição de livros, de jornais, rádio, cinematográficas, de vídeo e de produção de programas de televisão";
     this.about_setores[9] = "Setor relacionado com os estabelecimentos hoteleiros, residências para férias e outros alojamentos de curta duração, parques de campismo e de caravanismo";
     this.about_setores[10] = "Setor que engloba as atividades de gestão de fundos e auxilia serviços financeiros, expeto seguros e fundos de pensão";
     this.about_setores[11] = "Setor relacionado à compra, venda e arrendamento de bens imobiliários";
     this.about_setores[12] = "Setor relacionado com as atividades jurídicas e cartórios notariais, contabilidade e auditoria, consultoria fiscal e atividades de arquitetura, de engenharia e técnicas afins)";
     this.about_setores[13] = "Atividades que se relacionam serviços administrativos e de apoio (aluguer de veículos automóveis, aluguer de bens de uso pessoal e domésticos, atividade de empresas de trabalho temporário, agências de viagem e operadores turísticos)";
     this.about_setores[14] = "Setor relacionado com as atividades sociais, culturais e económicas, negócios estrangeiros, atividades de defesa, justiça, segurança e ordem pública";
     this.about_setores[15] = "Setor relacionado serviços de educação (Educação pré-escolar, Ensino básico (1º, 2º e 3º ciclo), ensino pós-secundário não superior e superior)";
     this.about_setores[16] = "Atividades dos estabelecimentos de saúde com internamento, pratica clínica em ambulatório, de medicina dentária e de odontologia";
     this.about_setores[17] = "Serviços criativos, artísticos e de espetáculo (Atividades de teatro, música e dança; Atividades das bibliotecas, museus e outras atividades culturais; Lotarias e outros jogos de aposta, Atividades desportivas)";
     this.about_setores[18] = "Reparação de computadores e de equipamentos de comunicação, Reparação de bens de uso pessoal e doméstico";
     
     
     //DEFINIR OS VALORES DE CADA SETOR PARA O ANO QUE FOI IMPORTADO
     this.setores = [];
     this.setores[0] = agricultura_value;
     this.setores[1] = extrativa_value;
     this.setores[2] = transformadoras_value;
     this.setores[3] = gas_value;
     this.setores[4] = agua_value;
     this.setores[5] = construcao_value;
     this.setores[6] = comercio_value;
     this.setores[7] = transportes_value;
     this.setores[8] = alojamento_value;
     this.setores[9] = comunicacao_value;
     this.setores[10] = financeiras_value;
     this.setores[11] = imobiliarias_value;
     this.setores[12] = tecnologias_value;
     this.setores[13] = servicos_value;
     this.setores[14] = administracao_value;
     this.setores[15] = educacao_value;
     this.setores[16] = saude_value;
     this.setores[17] = artisticas_value;
     this.setores[18] = outras_value;

     
     //GUARDAR O INDEX DO SETOR SELECIONADO
     this.setor_selecionado = -1;
     
     
     //i = Nº SETOR - PARA CADA SETOR CRIAR NOVA PARTICLE
     for(let i=0; i<this.setores.length; i++)
     {
       //CRIAR NOVA PARTICLE
       const p = new c2.Particle (random(width), random(height));
       //RÁIO DA PARTICLE = MAPEAR VALOR DA TABELA PARA VALOR MAIS PEQUENO E FÁCIL DE VISUALIZAR
       p.radius = map(this.setores[i], 0, 26812.8, 20, 200);
              
       //COLOR RANGE DEPENDE DO TAMANHO DA PARTICLE
       //let light_blue = color ('#9ED4F1');
       // let dark_blue = color ('#1270B1');
       let light_blue = color ('#96D3F3');
       let dark_blue = color ('#105D97');
       
       p.cor_azul = lerpColor(dark_blue, light_blue,
               map (this.setores[i], 0, 2000, 0, 1) );
       
       //p.cor_azul = color(random(360), 50, 100);
       
     
       //COR INTERAÇÃO
       p.cor_rosa = color ('#DC388B');
       
       //ADICIONAR A NOVA PARTICLE AO MUNDO
       world.addParticle(p);
     }
   }
  
  
   
  //DESENHAR E UPDATE DE CADA PARTICLE
  drawElement() 
  {
    //VERIFICAR SE ALGUMA PARTICLE ESTÁ SELECIONADA
    this.checkClick();
    
    ellipseMode(RADIUS);  
    //stroke(100);
    
    noFill();
    strokeWeight(0.4);      
    
    //I = Nº SETORES
    for(let i=0; i<this.setores.length; i++)
    {
      //SE A PARTICLE NÃO ESTÁ SELECIONA (DEFAULT) ---> AZUL
      if (this.setor_selecionado != i) 
      {
        //fill(world.particles[i].cor_azul);
        stroke(world.particles[i].cor_azul);
      }
      else
      
      //SE A PARTICLE ESTÁ SELECIONADA ---> ROSA
      if (this.setor_selecionado === i) 
      {
        this.drawTootip(i);
        //fill(world.particles[i].cor_rosa);
        stroke(world.particles[i].cor_rosa);

      }
      
      
      //DESENHAR PARTICLES
      //PARA CADA SETOR DESENHAR PARTICLE (POSIÇÃO X E POSIÇÃO Y, COM RAIO)
      
      
      //ORIGINAL (ELLIPSES)
      /*
      ellipse(world.particles[i].position.x, world.particles[i].position.y, world.particles[i].radius);
      point(world.particles[i].position.x, world.particles[i].position.y);
      */
      
      
      //DESENHAR UMA ELLIPSE ATRAVÉS DE PONTOS!
      //CENTRO DA ELLIPSE
      let centerX = world.particles[i].position.x;
      let centerY = world.particles[i].position.y;

      //VARIÁVEIS PARA DESENHAR A ELLIPSE ATRAVÉS DE PONTOS (OUTROS PONTOS)
      let x, y;
      let lastX = -999;
      let lastY = -999;
      
      //INCREMENTAÇÃO DO ÂNGULO
      for (let ang = 0; ang<360; ang+=8)
      {
        //console.log(num_linhas);
        
        //CONVERTER DEGREES TO RADIANS
        let rad = radians(ang);

        //TRIGNOMETRIA FANCY
          //RAIO = HIPOTENUSA ENTRE CENTRO DA ELLIPSE (centerX, centerY) E UM PONTO DA ELLIPSE
          //SINE OF ANGLE x = OPPOSITE OVER HYPOTENUSE
          //COSINE OF ANGLE x = ADJACENT OVER HYPOTENUSE
        x = centerX + (world.particles[i].radius * cos(rad) );
        y = centerY + (world.particles[i].radius * sin(rad) );

        //PONTOS QUE VÃO COMPOR A ELLIPSE
        //point(x,y);

        //LINHAS DESDE O CENTRO AOS PONTOS DA ELLIPSE CALCULADOS
        line(centerX, centerY, x, y);
      }  
    }
  }
  
  
  
  //INTERAÇÃO COM O MOUSE - SELECIONAR PARTICLE
  checkClick() 
  {
    //PARA CADA SETOR/PARTICLE, MEDIR A DISTÂNCIA DO MOUSE AO CENTRO
    for(let i=0; i<this.setores.length; i++) 
    {
      this.distancia = dist (mouseX, mouseY, world.particles[i].position.x, world.particles[i].position.y);
      
      //SE O MOUSE ESTIVER DENTRO DA PARTICLE E FOR PRESSED - FICA SELECIONADA
      if (this.distancia <= world.particles[i].radius && 
          mouseIsPressed === true) 
      {
        this.setor_selecionado = i;
      }
    }
  }
  
  
  
  
  //MOSTRAR LEGENDA SOBRE SETOR DA PARTICLE SELECIONADA
  drawTootip (i) 
  {          
    //TEXT
    noStroke();
    fill(100);
    textSize(22);
    textAlign(LEFT);
    let x = width/12;
    let y = height/4;
    let w = textWidth(this.label_setores[i]);
    let space = 80;
    let margin = 30;
    
    
    //DEFINIR UM MÍNIMO PARA A LARGURA DAS LINHAS
    if(w < 350) w=450;
    //console.log(w);
    
    //DEFINIR LARGURA TEXT BOX
    let t_max_width = w-space;
    
    //CALCULAR A PERCENTAGEM DE UM SETOR RELATIVAMENTE AO TOAL ANUAL
    let percentagem = (this.setores[i]*100) / this.total;
    percentagem = percentagem.toFixed(2);
    //console.log(percentagem);
    
    
    //TÍTULO
    textSize(14);
    text("SETOR", x-10, y); 
    
    stroke(100);
    line(x-10, y + 15, x+w, y + 15);

    
    //LABLE SETOR
    noStroke();
    textSize(22);
    text(this.label_setores[i], x-10, y + 30);
    
    
    //DESCRIÇÃO
    y+=100;
    stroke(100);
    line(x-10, y, x+w, y);
    
    noStroke();
    textSize(14);
    textAlign(LEFT, TOP);

    text("ABOUT", x-10, y+10);
    rectMode(CORNER);
    text(this.about_setores[i], x+space, y+10, t_max_width);
    //console.log(w, t_max_width);
    
    
    //VALORES
    y+=100;
    stroke(100);
    line(x-10, y, x+w, y);
    
    noStroke();
    text("VALUE", x-10, y+10);
    text(this.setores[i] + ' t  de  ' + this.total + ' t total anual', x+space, y+10);
    text( percentagem + " %", x+space, y+30);
    
    //frame - descrição setores
    fill(100, 0.25);
    rect(x-margin,y-220,(x+w)+10,300,10)
  }
  
  
  
  //LEGENDA GERAL DAS PARTICLES - MOUSE PRESSED
  mostrar_legenda ()
  {
    //BOTÃO
    let x = width-50;
    let y = height-50;
    
    fill('#DC388B');
    stroke(100);
    strokeWeight(1.5);
    ellipse(x, y, radius_button);
    
    //ICON
    imageMode(CENTER);
    image(icon_info, x, y, radius_button, radius_button);
   
    
    
    //MOSTRAR LEGENDA, QUANDO O USER PRESSEIONA O BOTÃO
    this.distancia = dist (mouseX, mouseY, x, y); 
  
    if (this.distancia <= radius_button && mouseIsPressed===true) 
    {   
      //FRAME - TABELA DE LABELS
      let x_box = (width/12)-30;
      let y_box = (height/12)+30;
      let w_box = x_box + (width/2)-30;
      let h_box = 650;
      let margin = 20;
      
      rectMode(CORNER);
      noStroke();      
      fill(100, 0.25);
      rect(x_box, y_box, w_box, h_box, 24);
  

      //TÍTULO
      fill(100);
      noStroke();
      textAlign(LEFT, TOP);
      textFont(font_Merri);
      textSize(22);
      text("legenda", x_box+margin, y_box+margin);
  
      
      //IDENTIFICAÇÃO DAS PARTICLES
      //LABELS
      let text_size = 14;
      let raio = text_size-3;
      let x = x_box+margin;
      let y = y_box+70;
      
      //PARA CADA PARTICLE
      for(let i=0; i<this.setores.length; i++) 
      {  
        //... É ATRIBUÍDO UM INDEX (NÚMERO)
        textAlign(CENTER, CENTER);
        textFont(font_Lato);
        textSize(text_size);
        fill(100);
        text([i],
             world.particles[i].position.x,
             world.particles[i].position.y);
        
        
        //... QUE O USER PODE COMPARAR NA TABELA DE LABELS
        textFont(font_Lato);
        textAlign(LEFT, CENTER);
        textSize(text_size);
        
        //NOME SETOR
        text(this.label_setores[i], x + raio*2.5, y);
        
        //VALOR SETOR
        let text_width = textWidth(this.label_setores[i]);
        text(' | Valor: '+ this.setores[i], x + text_width + raio*4, y);
        
        
        fill('#DC388B');
        ellipse(x+raio, y+3.5, raio);
        
        //Nº PARTICLE (TABELA)
        textAlign(CENTER, CENTER);
        fill(100);
        text([i], x+ raio, y);
        
        y += 30;
        
        //2ª COLUNA DE LABELS
        /*if(i === (this.setores.length/2)-1)
        {
          x = x_box+margin + 250;
          y = y_box+80;
        }*/
        
        this.setor_selecionado = -1;
      }
    }
  }
  
  
  //FUNÇÃO PARA REMOVER PARTICULAS
  removeParticles()
  {
    for (let i=this.setores.length-1; i>=0; i--) 
    {
      const p = world.particles[i];
      world.removeParticle(p);
    }
  }
  
}
