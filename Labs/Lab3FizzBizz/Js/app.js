function setup() {
    createCanvas(1500, 1500);
}

function draw() {
    background(200);
    var y = 100;
  
    for (let i = 0; i < 25; ++ i) {
        let x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            
            fill(224,13,13);
            rect(x, y, 50);
        }
        else if (i % 5 === 0) {
            
            fill(75,169,219);
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
       
            fill(123,255,0);
            line(x+25, y+25, 50, 50);
        }
        else {
           
            fill(245,139,10);
           Triangle(x+25, y+25, 50, 50);
        }
    }
}