let xpos = 0;
let ypos = 200;   

let xspeed=5;
let yspeed=0;

function setup(){
    createCanvas(800,600);
}
function draw(){
    background(200);
    xpos=xpos+xspeed;
    ypos=ypos+yspeed;

   
    if (xpos>800){

    }


    fill(138,43,226);
    circle(xpos,ypos,30);
}