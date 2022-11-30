function vis(){ //visualização
    background('#cccccc');
    world.update();

    for(let i=0; i<world.particles.length; i++){
        const p = world.particles[i];
        stroke("#ff0000");
        strokeWeight(1);
        fill(255,255,255);
        circle(p.position.x, p.position.y, p.radius);
        strokeWeight(2);
        point(p.position.x, p.position.y);
      

        distance = dist (mouseX, mouseY,p.position.x ,p.position.y);
        if (distance<=p.radius) 
        {
          noStroke()
          textSize(24)
          textAlign(LEFT)
          fill("#000")
          text("Agricultura",800,height/2);
          textSize(16)
          textAlign(LEFT)
          text("1.994,5	",800,height/2+20);
          textSize(16)
          textAlign(LEFT)
          //text("hshshshshshshhshshshshshshshs",800,height/2+35);
          RGB2 = color ("#ff0000");
                  
        }
        else
        {
          RGB2 = color ("#fff");
        }
        fill (RGB2);
        ellipse (p.position.x,p.position.y, p.radius, p.radius);
      
    }
  
  }