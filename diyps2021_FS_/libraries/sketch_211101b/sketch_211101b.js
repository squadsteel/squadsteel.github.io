var x = 0;
var y = 0;
var R =200; 
var G =1;
var B = 1; 
function setup() {
   background(204);
 createCanvas(600, 600);
}
function draw() {
  
  
  
  
if ( x <600){
  fill(R,G,B);
 ellipse(x, y,10,10); // Left
x= x + 10; 
}
else {
  y=y+10;
x=0;
}
}
