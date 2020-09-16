function setup(){
    createCanvas(300,220);
}
 var x=0,y=0;
 function draw(){
    for(i=0; i<4; i++){
   for(j=0; j<=i; j++)
{
    fill(255,0,25);
   rect(x, y, 50, 50);

    x+=55;
}
    x=0;
    y+=55;
}
}