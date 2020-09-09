function setup() {
    createCanvas(400, 300);
   
      
    if(mouseX>200)
    {
    fill("red");
    circle(mouseX,mouseY,30);
    }
    else
    {
    fill("blue");
    circle(mouseX,mouseY,30);
    }
    } 
