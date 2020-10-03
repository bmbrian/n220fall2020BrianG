
 let c_x; 
 let c_y; 
 let c_xspeed = -2; 
 let c_yspeed = 2; 
 let c_radius = 30;
 
 let r_width = 400;
 let r_height = 50;  
 
 let r_x = -400;  
 let r_y = 600;  
 let r_xspeed = 2; 
 
 function setup() { 
   createCanvas(800, 700);
   c_x = width - 2*c_radius;  
   c_y = 2*c_radius;
 } 
 
 function draw() { 
   background(255);
   
   
   ellipse(c_x, c_y, 2*c_radius, 2*c_radius); 
   
   c_x += c_xspeed; 
   c_y += c_yspeed; 

   rect(r_x,r_y, r_w, r_height);
   
   if(r_x > width) {   
     r_x = -r_width;
   }
   

   r_x += r_xspeed;
   

   if(collideRect( circle_x, circle_y, rect_x, rect_y, rect_width, rect_height)) circle_yspeed = -circle_yspeed;
 }

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX + circle_radius > rectX && circleX + circle_radius  < rectX + rectW) {

  if(circleY + circle_radius  > rectY && circleY + circle_radius  < rectY + rectH) {

  return true;

  }

  }

  return false;

}
