//IMPORTAR DADOS DA TABELA - (É IMPORTADA APENAS UMA ROW/ANO DE CADA VEZ)

function importData (new_slider_value)
{
  //SE EXISTIREM PARTICLES, ELIMINAR - desktop
  if (world.particles.length > 0) 
  {
    elemento.removeParticles();
  }
  
    //SE EXISTIREM PARTICLES, ELIMINAR - mobile
  if (worldMobile.particles.length > 0) 
  {
    elementoMobile.removeParticles();
  }
  
  //Nº ROW/ANO A SER IMPORTADO DEPENDE DO VALOR QUE O SLIDER DEVOLVE
  let row = slider_value;
  
      
      //... GET A STRING/VALOR DA COLUNA "nome da coluna"
      const year = tabela_dados.getString(row, "anos");
      
      const agricultura = tabela_dados.getNum(row, "agricultura_producao_animal_ caca_floresta_e_pesca");
      const extrativa = tabela_dados.getNum(row, "industrias_extractivas");
      const transformadoras = tabela_dados.getNum(row, "industrias_transformadoras");
      const gas = tabela_dados.getNum(row,"electridade_gas_vapor");
      const agua = tabela_dados.getNum(row, "captacao_tratamento_distribuicao_de_ agua");
      const construcao = tabela_dados.getNum(row,"construcao");
      const comercio = tabela_dados.getNum(row, "comercio_por_grosso_e_a_retalho");
      const transportes = tabela_dados.getNum(row, "transportes_e_armazenagem");
      const alojamento = tabela_dados.getNum(row, "alojamento_restauracao_e_similares");
      const comunicacao = tabela_dados.getNum(row, "actividades_de_informacao_e_de_comunicacao");
      const financeiras = tabela_dados.getNum(row, "actividades_financeiras_e_de_seguros");
      const imobiliarias = tabela_dados.getNum(row, "actividades_imobiliarias");
      const tecnologias = tabela_dados.getNum(row, "actividades_de_consultoria_cientificas_tecnicas_e_similares");
      const servicos = tabela_dados.getNum(row, "actividades_administrativas_e_dos_servicos_de_apoio");
      const administracao = tabela_dados.getNum(row, "administracao_publica_e_defesa_e_seguranca_social_obrigatoria");
      const educacao = tabela_dados.getNum(row, "educacao");
      const saude = tabela_dados.getNum(row, "actividades_de_saude_humana_e _apoio_social");
      const artisticas = tabela_dados.getNum(row, "actividades_artisticas_de_espectaculos_desportivas_e_recreativas");
      const outras = tabela_dados.getNum(row, "outras_actividades_de_servicos"); 
      
      const total = tabela_dados.getNum(row, "total");
      
      //console.log (year, agricultura, extrativa, transformadoras, gas, agua, construcao, comercio, transportes, alojamento, comunicacao, financeiras, imobiliarias, tecnologias, servicos, administracao, educacao, saude, artisticas, outras, total);
      
      
      //CRIAR NOVO ELEMENTO NO ARRAY, COM OS DADOS DA TABELA - Desktop
      elemento = new Element (year, agricultura, extrativa, transformadoras, gas, agua, construcao, comercio, transportes, alojamento, comunicacao, financeiras, imobiliarias, tecnologias, servicos, administracao, educacao, saude, artisticas, outras, total);
  
        //CRIAR NOVO ELEMENTO NO ARRAY, COM OS DADOS DA TABELA - Mobile
      elementoMobile = new ElementMobile (year, agricultura, extrativa, transformadoras, gas, agua, construcao, comercio, transportes, alojamento, comunicacao, financeiras, imobiliarias, tecnologias, servicos, administracao, educacao, saude, artisticas, outras, total);
}
