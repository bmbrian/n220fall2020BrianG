
   let red = 0, green = 0, blue = 0;
   
   document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;

  
   function red_1(){
       
       red += 1;
     
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
 
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }

  
   function red_5(){
       red += 5;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
   function red_10(){
       red += 10;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }

   function green_1(){
       green +=1;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
   function green_5(){
       green +=5;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
   function green_10(){
       green +=10;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
  
   function blue_1(){
       blue +=1;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
   function blue_5(){
       blue +=5;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
   function blue_10(){
       blue +=10;
       document.getElementById("color_box").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
       document.getElementById("rgb_value").innerHTML = `${red},${green},${blue}`;
   }
