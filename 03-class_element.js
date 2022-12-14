//CRIAR CLASS DE ELEMENTOS
class Element
{
   //VALORES QUE A CLASS RECEBE
   constructor(year_num, agricultura_value, 
               extrativa_value, transformadoras_value,
               gas_value, agua_value,
               construcao_value, comercio_value,
               transportes_value, comunicacao_value,
               financeiras_value, imobiliarias_value,
               tecnologias_value, servicos_value,
               administracao_value, educacao_value,
               saude_value, artisticas_value,
               outras_value, total_value)
   {
     //VÃO BUSCAR OS VALORES DOS DADOS QUE FORAM IMPORTADOS DA TABELA)
     this.year = year_num;
     this.total = total_value;
     
     //DEFINIR OS NOMES DE CADA SETOR
     this.label_setores = [];
     this.label_setores[0] = "agricultura_value";
     this.label_setores[1] = "extrativa_value";
     this.label_setores[2] = "transformadoras_value";
     this.label_setores[3] = "gas_value";
     this.label_setores[4] = "agua_value";
     this.label_setores[5] = "construcao_value";
     this.label_setores[6] = "comercio_value";
     this.label_setores[7] = "transportes_value";
     this.label_setores[8] = "comunicacao_value";
     this.label_setores[9] = "financeiras_value";
     this.label_setores[10] = "imobiliarias_value";
     this.label_setores[11] = "tecnologias_value";
     this.label_setores[12] = "servicos_value";
     this.label_setores[13] = "administracao_value";
     this.label_setores[14] = "educacao_value";
     this.label_setores[15] = "saude_value";
     this.label_setores[16] = "artisticas_value";
     this.label_setores[17] = "outras_value";
     
     
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
     this.setores[8] = comunicacao_value;
     this.setores[9] = financeiras_value;
     this.setores[10] = imobiliarias_value;
     this.setores[11] = tecnologias_value;
     this.setores[12] = servicos_value;
     this.setores[13] = administracao_value;
     this.setores[14] = educacao_value;
     this.setores[15] = saude_value;
     this.setores[16] = artisticas_value;
     this.setores[17] = outras_value;
     
     
     
     //i = Nº SETOR
     for(let i=0; i<this.setores.length; i++)
     {
       //CRIAR NOVA PARTICLE
       const p = new c2.Particle (random(width), random(height));
       //RÁIO DA PARTICLE = MAPEAR VALOR DA TABELA PARA VALOR MAIS PEQUENO E FÁCIL DE VISUALIZAR
       p.radius = map(this.setores[i], 0, 26812.8, 20, 200);
       p.cor = color ( 
             195,
             map(this.setores[i], 0, total_value, 60, 30),
             40);
       p.cor2 = color (145, 100, 100);
             //p.cor = lerpColor(azul_claro, azul_escuro, map(this.setores[i], 0, total_value, 0, 1) );
       //p.cor = azul_claro;
       
       //ADICIONAR A NOVA PARTICLE AO MUNDO
       world.addParticle(p);
     }
     
     //console.log(this.setores[0]);
   }
  
  
   
  //DESENHAR E UPDATE DE CADA PARTICLE 
  drawElement () 
  {
    ellipseMode(RADIUS);  
    
    //I = Nº SETORES, PARA CADA SETOR DESENHAR PARTICLE (POSIÇÃO X E POSIÇÃO Y, COM RAIO)
    for(let i=0; i<this.setores.length; i++)
    {
      fill(world.particles[i].cor2);
      ellipse(world.particles[i].position.x, world.particles[i].position.y, world.particles[i].radius);
      point(world.particles[i].position.x, world.particles[i].position.y);
    }
  }
  
  
  
  //INTERAÇÃO COM O MOUSE
  drawTootip () 
  {    
    //PARA CADA SETOR/PARTICLE, MEDIR A DISTÂNCIA DO MOUSE AO CENTRO
    for(let i=0; i<this.setores.length; i++) 
    {
      this.distancia = dist (mouseX, mouseY, world.particles[i].position.x, world.particles[i].position.y);
      
      //mudança de cor ao clicar
      if (this.distancia <= world.particles[i].radius && mouseIsPressed===true) 
      {
        
        //texto - legendas
        noStroke();
        fill(0);
        textSize(24);
        textAlign(LEFT);
      
        
        
        /*responsive - mobile
        a cor altera ao clicar
        o texto muda de posição se a window ultrapassar os 500 pixeis*/
        if(width>500){ 
          text(this.label_setores[i],width/2+100,height/2);
          text("Descrição",width/2+100,height/2+30);
          //text(this.setores[i],width/2+100,height/2+30);
         }
        else{
          textSize(20);
          text(this.label_setores[i],width/3,height/2+250);
          text("Descrição",width/3,height/2+280);
          //text(this.setores[i],width/3,height/2+280);
        }


      }
      
    else{
      stroke(0);
      strokeWeight(1);
      fill(world.particles[i].cor);
      ellipse (world.particles[i].position.x, world.particles[i].position.y, world.particles[i].radius);
      point(world.particles[i].position.x, world.particles[i].position.y);

      }  
      
    }
  }
  
  
  //FUNÇÃO PARA REMOVER PARTICULAS, PARA CADA SETOR, REMOVER PARTICLE
  removeParticles()
  {
    for (let i=this.setores.length-1; i>=0; i--) 
    {
      const p = world.particles[i];
      world.removeParticle(p);
    }
  }
  
}
