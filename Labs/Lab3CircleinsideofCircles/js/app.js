function setup(){
    createCanvas(400,300);
}
function draw(){

    background(100);

    nofill();

    for(var i = 0; i < 15; i++){

        stroke(255 - i * 20);

        circle(200, 150, i * 10);
    }
}