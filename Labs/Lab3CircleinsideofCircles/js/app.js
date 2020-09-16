
function setup(){
    createCanvas(1000,1000);
}
function draw(){
    background(100);
    noFill();
   
    for(var i = 0; i<15; i++){
    stroke(200+i *100);
      
    circle(500,500,i*35);
    }
    
  }

    