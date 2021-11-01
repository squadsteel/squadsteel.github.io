function setup()
{
createCanvas(600, 600);
}
function draw()
{



background( 128, 212, 255);
beginShape();
fill(51,34,0);
vertex(440,190);
vertex(470, 300);
vertex(405, 370);
vertex(440, 350);
vertex(300, 390);
vertex(250, 400);
vertex(152, 350);
vertex(170, 250);
vertex(170,200);
vertex(300,120);
endShape(CLOSE);
fill(219,205,175);
triangle(300,200, 400,100, 400,200);
fill(219,205,175);
triangle(300,200, 200,100, 200,200);

 //                                             mouth 


fill( 255, 128, 149);

ellipse(300, 555, 600, 300);//                    head 
fill( 255, 238, 204);
ellipse(300, 300, 250, 300);//                  shoulders
fill( 255, 128, 149);

fill(255);//                                     left eye 
arc(250, 270, 50, 50, 0, PI);
//arc(250, 260, 50, 50, 0, PI);
strokeWeight(8);
line(255, 270, 255, 280);

   line(300, 300, 290, 320);   //                   nose 
      line( 290, 320, 300 , 322);
   

fill(255);//                                     right eye 
arc(340, 270, 50, 50, 0, PI);
//arc(340, 260, 50, 50, 0, PI);
strokeWeight(8);
line(345, 270, 345, 280);

 noFill(); 
 arc(310, 370, 20, 20, 0, PI);
 noFill();
 arc(290, 370, 20, 20, 0, PI);

beginShape();
fill(184,171,147);

vertex(200,200);
vertex(190,250);
vertex(170, 300);
vertex(160, 320);
vertex(170, 370);
vertex(190, 390);
vertex(200, 340);
vertex(200, 340);
vertex(200, 300);
vertex(210, 280);
vertex(240, 230);
vertex(270, 240);
vertex(300, 290);
vertex(310, 280);
vertex(320, 260);
vertex(325, 230);
vertex(350, 240);
vertex(360, 260);
vertex(400, 300);
vertex(420, 400);
vertex(450, 300);
vertex(390, 190);
vertex(300, 140);

endShape(CLOSE);



}
