var ballx = 35;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var imagebg; 
var test =10;
var disttial;
var distback;
var distneck;
var distear;
var distPawOne;
var distPawTwo ;
var distPawThree;
var distPawFour;
var distTummyOne;
var distTummyTwo;
var distChest;

var tail = 35;
var back = 35;
var neck = 20;
var ears = 30;
var paw = 30; 
var tummy = 30;
var chest = 30;

var prog = 200; 
var tailprog = 0;
var backprog = 0;
var neckprog = 0;
var earprog = 0; 
var chestprog = 0; 
var negprog = 0;
var time = 0;
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  background(220, 141, 155); //RGB Value

} // end setup


function preload() {
imagebg = loadImage('bg.png');

}

function draw() {

  image(imagebg, 0, 0);
noFill();
circle(200, 370, 70);  //tail
circle(340, 390, 70);  // upper back
circle(450, 365, 40);  // neck 
circle(520, 300, 60);  //ears
circle(100, 560, 60);  //paw1
circle(250, 560, 60);  //paw2
circle(420, 560, 60);  //paw3
circle(540, 560, 60);  //paw4
circle(300, 450, 60);  //tummy1
circle(360, 460, 60);  //tummy2
circle(455, 440, 60);  //chest

 disttail = dist(200, 370, mouseX, mouseY);
 distback = dist(340, 390, mouseX, mouseY);
 distneck = dist(450, 365, mouseX, mouseY);
 distear = dist(520, 300, mouseX, mouseY);
 distPawOne = dist(100, 560, mouseX, mouseY);
 distPawTwo = dist(250, 560, mouseX, mouseY);
 distPawThree = dist(420, 560, mouseX, mouseY);
 distPawFour = dist(540, 560, mouseX, mouseY);
 distTummyOne = dist(300, 450, mouseX, mouseY);
 distTummyTwo = dist(360, 460, mouseX, mouseY);
 distChest =  dist(455, 440, mouseX, mouseY);
  
checktail();
checkback();
checkneck();
checkear();
checkpaw();
checktummy();
checkchest();

 fill(222);
 quad(200, 200, 200, 220 , 400, 220, 400, 200);
 fill(2);
 quad(200, 200, 200, 220 , prog, 220, prog, 200);
 time++;
       text(time, 300, 300);

      text('pet the cat in the time limit to learn the art of cat peting ', 300, 170);


 if (prog > 395){
   text('congrats you learned hpw to pet cats' , 300, 250);
 }
 if (gameState == 'f' || time > 1300 & prog < 375){
      text('wow you really need to study up on how to pet cats ', 300, 250);

 }
} // end draw

function checktail(){
  if (disttail < tail){
 test = 1;
 tailprog++;
 if (tailprog < 100){
 prog = prog +1/2;
 }
}
}

function checkback(){
  if (distback < back){
 test = 50;
  backprog++;
 if(backprog < 100){
    prog = prog +1/2;
 }
}
}

function checkneck(){
  if (distneck < neck){
 test = 100;
neckprog++;
 if(neckprog < 100){
    prog = prog +1/2;
 }
}
}

function checkear(){
  if (distear < ears){
 test = 150;
 earprog++;
 if(earprog < 100){
    prog = prog +1/4;
 }
}
}

function checkpaw(){
  if (distPawOne < paw || distPawTwo < paw || distPawThree < paw || distPawFour < paw){
 test = 200;
 negprog++;
 if(negprog < 200){
    prog = prog -1/2;
 }
}
}


function checktummy(){
  if (distTummyOne < tummy || distTummyTwo < tummy){
 test = 250;
  negprog++;
 if(neckprog < 200){
    prog = 200;
    gameState = 'f';
 }
}
}

function checkchest(){
  if (distChest < chest){
 test = 222;
 chestprog++;
 if(chestprog < 100){
    prog = prog +1/4;
 }
}
}
