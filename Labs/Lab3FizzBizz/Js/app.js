function setup(){
    createCanvas(800,600);
}
function draw(){

            var x=100;
        
            for ( var i=0; i<600;i+=50){
        
            fill(0);
        
            ellipse(i,x,50,50); 
            if(i%3==0) {
        
            fill(140,3,252);
            ellipse(i,x,50,50); 
        }
         if(i%5==0){
        
            fill(13,224,80); 
            square(i+25,x-25,50);
        
        }
        
            if(i%3==0 && i%5==0){
        
            fill(8,0,255); 
            square(i+25,x-25,50);
        
        }
        
    }
        
}