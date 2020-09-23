var x = [0,0,0,0,0,0,0,0,0,0,0];
var y = [0,0,0,0,0,0,0,0,0,0,0];
function setup() {

    createCanvas( 1000, 1000 );
}
function draw() 
{
    x.shift();
    x.push(mouseX);
    y.shift();
    y.push(mouseY);
    background(0,252,240);

    for(let i=0;i<10;i++)
    {
        fill(255,0,0);
    ellipse( x[i], y[i], 60, 60 );
    }
}