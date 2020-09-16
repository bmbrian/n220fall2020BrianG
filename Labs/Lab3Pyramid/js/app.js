function setup(){
    createCanvas(800,600);
}
 var x=0;
var y=0;
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