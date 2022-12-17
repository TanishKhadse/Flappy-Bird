//AP Computer Science Principles "Create PT 2019 - 2020" made by Tanish Khadse (me) and Amar Koric (partner). This game is meant to be replica of the 'Flappy Bird' game.

var screen = 0;

//bird variables (My Code)
var keys = [];
var birdX = 94;
var birdY = 105;
var time1 = 50; //used for flapping wing flapping
var rot = 0; //rotation
var counter = 0;
var start = 0;
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};
void keyReleased();

// Tube variables (Partner's Code)
var topTube = function (x,y) { 
    noStroke();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(172, 240, 113);
    rect(x+60,y-383,52,368);
    noStroke();
    fill(115, 204, 37);
    rect(x+77,y-383,34,368);
    rect(x+73,y-383,2,368);
    fill(81, 140, 25);
    rect(x+103,y-383,3,368);
    rect(x+108,y-383,3,368);
    fill(218, 250, 155);
    rect(x+62,y-383,3,368);
    //bottom of the tube 
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(172, 240, 113);
    rect(x+54,y-18,64,26);
    noStroke();
    fill(115, 200, 37);
    rect(x+73,y-17,44,24);
    rect(x+69,y-17,2,24);
    fill(81, 140, 25);
    rect(x+106,y-17,3,24);
    rect(x+111,y-17,3,24);
    fill(218, 250, 155);
    rect(x+59,y-17,3,24);
};
var bottomTube = function(x,y) {   
    noStroke();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(172, 240, 113);
    rect(x+60,y+158,52,368);
    noStroke();
    fill(115, 204, 37);
    rect(x+77,y+158,34,368);
    rect(x+73,y+158,2,368);
    fill(81, 140, 25);
    rect(x+103,y+158,3,368);
    rect(x+108,y+158,3,368);
    fill(218, 250, 155);
    rect(x+62,y+158,3,368);
    //bottom of the tube 
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(172, 240, 113);
    rect(x+54,y+132,64,26);
    noStroke();
    fill(115, 200, 37);
    rect(x+73,y+133,44,24);
    rect(x+69,y+133,2,24);
    fill(81, 140, 25);
    rect(x+106,y+133,3,24);
    rect(x+111,y+133,3,24);
    fill(218, 250, 155);
    rect(x+59,y+133,3,24);
};
var Tube = function (x,y) {
    topTube(x,y);
    bottomTube(x,y);
    
    
    
    
};
var tubeX = 360; //tube 1 x-values
var tube2X = 650; //tube 2 x-values
var tubeLocations = [25,60,100,140,175]; //pool for tube1 y-values
var tubeLocations2 = [25,60,100,140,175]; //pool for tube2 y-values
var time = 0; //timer (randomize tube1)
var time20 = 0; //timer (randomize tube2)
var time3 = 0; //timer (delays tubes from moving towards bird)
var ran = 0; //random integer for tube1
var ran2 = 0; //random integer for tube2

// background variables (Partner's Code)
var f = createFont("Impact", 40);
var ground = function (x1,y) {
    noStroke();
    fill(240, 230, 173);
    rect(x1,y+355,800,45);
    fill(224, 189, 72);
    rect(x1,y+355,800,4);
    fill(172, 240, 113);
    rect(x1,y+346,800,9);
    fill(115, 204, 37);
    
    //draws quadrilaterals 
    for(var i = 0; i < 40; i+=1) {
    var x = i * 20;
    quad(x+x1,y+355,x+ 9+x1,y+355,x+18+x1,y+346,x+9+x1,y+346);
    
    
    }
    fill(240, 230, 173);
    rect(x1,y+344,800,2);
    fill(0, 0, 0);
    rect(x1,y+341,800,3);
};
var backdrop = function () {
   //clouds
   
   fill(250, 249, 240);
   rect(0,223,400,100);
   ellipse(33,228,70,70);
   ellipse(91,235,35,35);
   ellipse(148,236,70,70);
   ellipse(204,236,70,60);
   ellipse(242,219,70,50);
   ellipse(308,211,70,50);
   ellipse(362,216,50,30);
   ellipse(415,223,70,50);
   rect(0,211,4,4);
   rect(1,207,4,4);
   rect(4,203,6,6);
   
   rect(8,197,6,4);
   rect(14,194,10,4);
   rect(8,201,2,2);
   rect(19,190,26,4);
   rect(26,194,26,4);
   rect(31,198,26,4);
   rect(37,204,26,4);
   rect(39,208,26,4);
   rect(39,212,26,4);
   rect(43,219,26,4);
   rect(78,219,8,4);
   rect(81,215,18,4);
   rect(97,219,8,4);
   rect(112,216,8,8);
   rect(116,212,18,4);
   rect(120,208,18,4);
   rect(125,204,18,4);
   rect(130,200,18,4);
   rect(145,200,18,4);
   rect(150,204,18,4);
   rect(156,208,18,4);
   rect(165,212,18,4);
   rect(185,208,10,4);
    rect(193,204,10,4);
    rect(203,204,10,4);
    rect(199,201,10,4);
    rect(215,201,10,4);
    rect(219,197,10,4);
    rect(228,193,30,4);
    rect(234,197,30,4);
    rect(240,201,30,4);
    rect(248,205,30,4);
    rect(273,201,30,4);
    rect(276,197,30,4);
    rect(279,193,30,4);
    rect(284,189,10,4);
    rect(289,185,10,4);
    rect(295,183,27,4);
    rect(319,186,10,4);
    rect(324,190,10,4);
    rect(329,194,10,7);
    rect(338,205,10,4);
    rect(348,201,10,4);
    rect(354,197,16,4);
    rect(366,200,10,4);
    rect(372,204,10,4);
    rect(382,208,10,4);
    rect(387,204,10,4);
    rect(394,200,10,4);
    rect(397,196,10,4);
    rect(136,196,21,4);
    
  
   
   
   
   // buildings 
    var buildings = function (x,y,s) {
        noStroke();
        
        
        fill(232, 232, 232);
        rect(x+1*s/10,y+52*s/10,18*s/10,40*s/10);
        rect(x-5*s/10,y+57*s/10,6*s/10,60*s/10);
        rect(x-9*s/10,y+60*s/10,4*s/10,56*s/10);
        rect(x-13*s/10,y+64*s/10,4*s/10,56*s/10);
        rect(x-20*s/10,y+93*s/10,7*s/10,37*s/10);
        rect(x+92*s/10,y+67*s/10,7*s/10,54*s/10);
        
        
        
        fill(196, 242, 216);
        stroke(120, 210, 240);
        strokeWeight(3);
        rect(x+69*s/10,y+54*s/10,9*s/10,60*s/10);
        rect(x+67*s/10,y+60*s/10,23*s/10,60*s/10);
        rect(x+12*s/10,y+61*s/10,20*s/10,47*s/10);
        rect(x+1*s/10,y+72*s/10,30*s/10,48*s/10);
        
        rect(x+22*s/10,y+85*s/10,18*s/10,35*s/10);
        strokeWeight(3);
        stroke(152, 227, 230);
        rect(x+42*s/10,y+43*s/10,12*s/10,20*s/10);
        stroke(120, 210, 240);
        rect(x+53*s/10,y+42*s/10,15*s/10,72*s/10);
        rect(x+37*s/10,y+48*s/10,31*s/10,72*s/10);
        
        noStroke();
        rect(x+55*s/10,y+46*s/10,12*s/10,20*s/10);
       
        
        noStroke();
        fill(152, 227, 230);
        rect(x+60*s/10,y+54*s/10,3*s/10,7*s/10);
        rect(x+53*s/10,y+54*s/10,3*s/10,7*s/10);
        rect(x+44*s/10,y+54*s/10,3*s/10,7*s/10);
        rect(x+60*s/10,y+64*s/10,3*s/10,7*s/10);
        rect(x+53*s/10,y+64*s/10,3*s/10,7*s/10);
        rect(x+44*s/10,y+64*s/10,3*s/10,7*s/10);
        
        rect(x+60*s/10,y+80*s/10,3*s/10,7*s/10);
        rect(x+53*s/10,y+80*s/10,3*s/10,7*s/10);
        rect(x+44*s/10,y+80*s/10,3*s/10,7*s/10);
        rect(x+60*s/10,y+90*s/10,3*s/10,7*s/10);
        rect(x+53*s/10,y+90*s/10,3*s/10,7*s/10);
        rect(x+44*s/10,y+90*s/10,3*s/10,7*s/10);
        
        rect(x+28*s/10,y+90*s/10,3*s/10,7*s/10);
        
        rect(x+5*s/10,y+90*s/10,3*s/10,7*s/10);
        rect(x+11*s/10,y+90*s/10,3*s/10,7*s/10);
        rect(x+18*s/10,y+90*s/10,3*s/10,7*s/10);
        
        rect(x+5*s/10,y+103*s/10,3*s/10,7*s/10);
        rect(x+11*s/10,y+103*s/10,3*s/10,7*s/10);
        rect(x+18*s/10,y+103*s/10,3*s/10,7*s/10);
        
        rect(x+5*s/10,y+77*s/10,3*s/10,7*s/10);
        rect(x+11*s/10,y+77*s/10,3*s/10,7*s/10);
        rect(x+18*s/10,y+77*s/10,3*s/10,7*s/10);
        
        rect(x+25*s/10,y+74*s/10,5*s/10,10*s/10);
        rect(x+28*s/10,y+63*s/10,3*s/10,8*s/10);
        
        rect(x+17*s/10,y+67*s/10,3*s/10,4*s/10);
        rect(x+59*s/10,y+47*s/10,3*s/10,3*s/10);
        
        rect(x+74*s/10,y+71*s/10,3*s/10,7*s/10);
        rect(x+81*s/10,y+71*s/10,3*s/10,7*s/10);
        rect(x+74*s/10,y+83*s/10,3*s/10,7*s/10);
        rect(x+81*s/10,y+83*s/10,3*s/10,7*s/10);
        rect(x+74*s/10,y+95*s/10,3*s/10,7*s/10);
        rect(x+81*s/10,y+95*s/10,3*s/10,7*s/10);
        rect(x+28*s/10,y+101*s/10,3*s/10,7*s/10);
        
        rect(x+70*s/10,y+62*s/10,3*s/10,44*s/10);
        
        
    };
    
    buildings(322,201,9);
    buildings(215,201,9);
    buildings(108,201,9);
    buildings(1,201,9);
    //trees 
    noStroke();
    fill(129, 219, 132);
    rect(0,311,400,30);
    ellipse(380,310,40,25);
    ellipse(398,302,30,20);
    ellipse(349,313,40,40);
    ellipse(323,312,35,35);
    ellipse(286,312,57,35);
    ellipse(309,302,5,5);
   ellipse(248,312,43,35);
   ellipse(232,320,49,35);
   ellipse(202,312,47,35);
   ellipse(164,318,47,35);
   ellipse(145,312,42,35);
   ellipse(118,312,35,35);
   ellipse(108,320,45,45);
   ellipse(83,307,42,30);
   ellipse(48,304,37,25);
   ellipse(25,310,37,25);
   ellipse(-6,301,37,25);
    fill(80, 148, 78);
   rect(393,291,6,2);
   rect(389,292,4,2);
   rect(386,294,4,2);
   rect(374,296,12,2);
   rect(370,298,4,2);
   rect(386,298,6,2);
    rect(391,300,5,2);
    rect(396,302,6,2);
    rect(366,300,4,2);
    rect(363,302,4,2);
    rect(361,304,2,2);
    rect(357,306,4,2);
    var tree = function (x,y) {
        rect(x+150,y+108,8,2);
        rect(x+158,y+110,4,2);
        rect(x+162,y+112,4,2);
        rect(x+166,y+114,2,2);
        rect(x+146,y+110,4,2);
        rect(x+142,y+112,4,2);
        rect(x+141,y+114,2,2);
    };
    tree(200,200);
    var bigTree = function (x,y) {
        rect(x+63,y+111,7,2);
        rect(x+70,y+113,4,2);
        rect(x+74,y+115,4,2);
        rect(x+78,y+117,2,4);
        rect(x+80,y+121,2,4);
        rect(x+59,y+113,4,2);
        rect(x+55,y+115,4,2);
        rect(x+53,y+117,2,4);
        rect(x+51,y+121,2,4);
       
    };
    tree(93,185);
    rect(363,300,2,2);
    rect(363,298,2,2);
    rect(361,296,2,2);
    rect(357,294,4,2);
    rect(349,292,9,2);
    rect(345,293,4,2);
    rect(341,294,4,2);
    rect(339,296,2,2);
    rect(335,298,4,2);
    rect(363,300,4,2);
    rect(331,296,4,2);
    rect(327,294,4,2);
    rect(320,292,8,2);
    rect(317,294,4,2);
    rect(313,296,4,2);
    rect(308,298,6,2);
    rect(306,299,2,2);
    rect(303,297,3,2);
    rect(300,295,3,2);
    rect(298,294,2,2);
    rect(282,292,16,2);
    rect(279,293,3,2);
    rect(276,295,3,2);
    rect(273,296,3,2);
    rect(270,297,3,2);
    rect(267,298,4,2);
    rect(263,300,4,2);
    tree(157,193);
    tree(183,192);
    bigTree(198,190);
    tree(139,200);
    tree(253,198);
    rect(230,300,4,2);
    rect(227,302,3,2);
    rect(225,304,2,2);
    tree(-11,184);
    tree(47,185);
    tree(-71,182);
    tree(-106,181);
    rect(215,300,4,2);
    rect(219,302,2,2);
    rect(221,304,4,2);
    rect(184,300,4,2);
    rect(182,302,2,2);
    rect(180,304,2,2);
    rect(178,303,2,2);
    rect(176,302,2,2);
    rect(173,301,3,2);
    rect(157,299,15,2);
    rect(171,300,2,2);
    rect(128,297,2,2);
    rect(126,296,3,2);
    rect(124,295,2,2);
    rect(117,294,7,2);
    rect(115,295,2,2);
    rect(112,296,3,2);
    rect(109,297,3,2);
    rect(106,298,3,2);
    rect(103,298,3,2);
    rect(97,297,3,2);
    rect(100,299,3,2);
    rect(62,297,2,2);
    rect(68,298,2,2);
    rect(64,299,4,2);
    rect(23,296,12,2);
    rect(21,297,2,2);
    rect(18,298,3,2);
    rect(16,300,2,2);
    rect(12,300,4,2);
    rect(11,297,2,3);
    rect(10,294,2,3);
    rect(8,292,2,2);
    rect(5,290,3,2);
    rect(1,289,4,2);
    tree(-132,192);
    tree(-100,187);
    rect(37,303,4,2);
    rect(34,304,3,2);
    tree(-74,195);
    rect(68,303,2,4);
    bigTree(43,189);
    tree(-120,199);
    tree(1,192);
    bigTree(72,196);
    bigTree(155,194);
    tree(28,196);
    tree(13,202);
    
};
var score = 0;
var bestScore = 0;
var groundX = 0;

//Collision variables (top tube, bottom tube, ground) (My Code)
var collide1 = 0; 
var collide2 = 0;
var collideG = 0;
var falling = 0;
var restart = 0;
var restartTime = 0;

    //Bird and Collision(My Code)

//Child algorithm 1
var collisionDetection = function(){

    if(abs(birdX - (tubeX - 30)) < 30 && abs(birdY - (tubeLocations[ran]) + 20) > (55)){
        collide1 = 1;
        //birdY += 2;
        if(birdY > 240){
            birdY -= 2;
            falling = 1;
        }
    }
    
    if(abs(birdX - (tube2X - 30)) < 30 && abs(birdY - (tubeLocations2[ran2]) + 20) > (55)){
        collide2 = 1;
        //birdY += 2;
        if(birdY > 240){
            birdY -= 2;
            falling = 1;
        }
    }
    
    if(birdY > 240){
        collideG = 1;
        birdY -= 2;
        falling = 1;
    }
    
    if(collide1 === 1 || collide2 === 1 || collideG === 1){
        tubeX += 2;
        tube2X += 2;
        groundX += 2;
        time -= 1;
        time20 -= 1;
        time3 -= 1;
        restartTime++;
        if(restartTime === 100){
            restart = 1;
        }
    }

};

//Child algorithm 2
var birdJump = function(){
    //jumping and rotations
    
    mouseReleased = function(){
        if(birdY > 220){
            birdY += 25;
            rot += 10;
        }
        birdY -= 25;
        if(rot > -25){
            rot = rot - 10;
        }
        counter = 0;
        start = 1;
    };
        
    if((falling === 1 || !mouseIsPressed) && start === 1){
        birdY += 2;
        if(rot < 0){
            rot++;
        }
        counter++;
        if(counter === 50 && rot < 100){
                rot += 10;
        }
    }
};

    //Bird function calls Collision and Jumping (My Code)

//Parent algorithm
var bird = function(x, y, s, r, t1){
    
    fill(0, 0, 0);
    noStroke();
    pushMatrix();
    
    translate(x + 100, y + 100);
    rotate(r);
    scale(0.75);
    //draws different parts of the bird
    
    var birdBody = function(){
    
    noStroke();
    
    fill(200, 207, 64);
    rect(-1,-8,16,10);
    rect(-6,-6,s*2,s);
    
    fill(255, 251, 0);
    rect(-5,-18,20,10);
    rect(-5,-17,16,-10);
    rect(3,-30,s*3,s);
    rect(-11,-21,10,10);
    
    fill(255, 145, 0);
    rect(15, -13, 18, 10);
    rect(12, -9, s, s);
    
    fill(250, 250, 250);
    rect(10,-30,13,15);
    rect(18,-24,11,10);
    
    fill(0, 0, 0);
    //body
    {rect(0, 0, s, s);
    rect(3, 0, s, s);
    rect(6, 0, s, s);
    rect(9, 0, s, s);
    rect(12, 0, s, s);
    
    rect(-3, -3, s, s);
    rect(-6, -3, s, s);
    rect(-9, -6, s, s);
    rect(-9, -9, s, s);
    
    rect(27, -18, s, s);
    rect(27, -21, s, s);
    rect(27, -24, s, s);
    rect(24, -27, s, s);
    
    rect(21, -24, s, s);
    rect(21, -21, s, s);
    
    rect(21, -30, s, s);
    rect(18, -33, s, s);
    rect(15, -33, s, s);
    rect(12, -33, s, s);
    rect(9, -33, s, s);
    rect(6, -33, s, s);
    rect(3, -33, s, s);
    rect(0, -30, s, s);
    rect(-3, -30, s, s);
    rect(-6, -27, s, s);
    rect(12, -18, s, s);
    rect(9, -21, s, s);
    rect(9, -24, s, s);
    rect(9, -27, s, s);
    rect(12, -30, s, s);
    rect(-9,-24,s,s);
    rect(-12,-21,s,s);
    rect(-12,-18,s,s);
    
    }
    //beak
    {
    rect(15, -3, s, s);
    rect(18, -3, s, s);
    rect(21, -3, s, s);
    rect(24, -3, s, s);
    rect(27, -3, s, s);
    rect(30, -6, s, s);
    rect(30, -9, s, s);
    rect(15, -9, s, s);
    rect(18, -9, s, s);
    rect(21, -9, s, s);
    rect(24, -9, s, s);
    rect(27, -9, s, s);
    rect(33, -12, s, s); 
    
    rect(30, -15, s, s);
    rect(27, -15, s, s);
    rect(24, -15, s, s);
    rect(21, -15, s, s);
    rect(18, -15, s, s);
    rect(15, -15, s, s);
    rect(12, -12, s, s);
    rect(9, -9, s, s);
    rect(12, -6, s, s);
    
    
    }
    };
    
    var birdWing1 = function(){
        fill(235, 250, 65);
        rect(-14,-18,9,9);
        
        fill(0);
        rect(0,-18,s,s);
        rect(0,-15,s,s);
        rect(0,-12,s,s);
        rect(-3,-9,s,s);
        rect(-6,-9,s,s);
        rect(-9,-9,s,s);
        rect(-12,-9,s,s);
        rect(-15,-9,s,s);
        rect(-18,-12,s,s);
        rect(-18,-15,s,s);
        rect(-15,-18,s,s);
        rect(-12,-18,s,s);
        rect(-9,-18,s,s);
        rect(-6,-18,s,s);
        rect(-3,-18,s,s);
    
    };
    
    var birdWing2 = function(){
    fill(235, 250, 65);
    noStroke();
    rect(-9, -21, 11, 12);
    rect(-14, -21, 18, 9);
    fill(0, 0, 0);
    rect(-12,-12, s, s);
    rect(-15,-15, s, s);
    rect(-15,-18, s, s);
    rect(-15,-21, s, s);
    rect(-12,-24, s, s);
    rect(-9,-24, s, s);
    rect(-6,-24, s, s);
    rect(-3,-24, s, s);
    rect(0,-21, s, s);
    rect(3,-18, s, s);
    rect(3,-15, s, s);
    rect(0,-12, s, s);
    rect(-3,-9, s, s);
    rect(-6,-9, s, s);
    
    };
    
    var birdWing3 = function(){
        fill(235, 250, 65);
        rect(-11,-12,10,10);
        fill(0);
        rect(-12,-15,s,s);
        rect(-9,-15,s,s);
        rect(-6,-15,s,s);
        rect(-3,-15,s,s);
        rect(0,-15,s,s);
        rect(3,-12,s,s);
        rect(0,-9,s,s);
        rect(-3,-6,s,s);
        rect(-3,-3,s,s);
        rect(-6,-3,s,s);
        rect(-9,-3,s,s);
        rect(-12,-3,s,s);
        rect(-15,-6,s,s);
        rect(-15,-9,s,s);
        rect(-15,-12,s,s);
        
    };
    
    //assemble bird
    birdBody();
    
    //Wing animation using time variable
    if(t1%1===0){
        
        if(t1 < 10){
            birdWing2();
        } else if(t1 > 10 && t1 < 20){
            birdWing1();
        } else if(t1 > 20 && t1 < 30){
            birdWing3();
        } else if(t1 > 30 && t1 < 40){
            birdWing1();
        }
        
    }   else{
        birdWing1();
    }
    
    popMatrix();
    
    //calls child algorithm 1
    collisionDetection();
    
    //calls child algorithm 2
    birdJump();

    
};  

//End screen (Partner's Code)
var endScreen = function () {
    fill(242, 90, 29);
    rect(138,241,130,35);
    //R
    fill(255, 255, 255);
    rect(150,248,3,19);
    rect(153,248,7,3);
    rect(160,251,3,7);
    rect(153,258,7,3);
    rect(160,261,3,3);
    //Shadow
    fill(204, 68, 18);
    rect(153,251,6,3);
    rect(153,261,6,3);
    rect(150,267,3,3);
    rect(160,264,3,3);
    rect(160,258,3,3);
    rect(168,265,9,3);
    rect(171,258,6,4);
    rect(171,251,6,4);
    rect(184,251,8,4);
    rect(184,258,8,4);
    rect(181,255,3,4);
    rect(190,261,3,4);
    
    rect(200,265,3,3);
    rect(197,251,3,3);
    rect(204,251,3,3);
    
    rect(213,250,6,3);
    rect(213,261,6,3);
    rect(210,265,3,3);
    rect(219,265,3,3);
    
    rect(229,251,6,3);
    rect(229,261,6,3);
    rect(226,267,3,3);
    rect(236,264,3,3);
    rect(236,258,3,3);
    
    rect(247,265,3,3);
    rect(244,251,3,3);
    rect(250,251,3,3);
    
    //E
    fill(255, 255, 255);
    rect(168,248,3,17);
    rect(171,248,6,3);
    rect(171,255,6,3);
    rect(171,262,6,3);
    //S
     rect(184,248,8,3);
     rect(181,251,3,4);
     rect(184,255,6,3);
     rect(190,257,3,4);
     rect(182,262,8,3);
     //T
     rect(196,248,11,3);
     rect(200,248,3,17);
     //A
     rect(213,247,6,3);
     rect(210,250,3,15);
     rect(219,250,3,15);
     rect(213,258,6,3);
     //R
    rect(226,248,3,19);
    rect(229,248,7,3);
    rect(236,251,3,7);
    rect(229,258,7,3);
    rect(236,261,3,3);
    //T
    rect(243,248,11,3);
    rect(247,248,3,17);
    
    // button
    fill(255, 0, 0,0);
    stroke(255, 255, 255);
    strokeWeight(4);
    rect(138,241,130,35);
    stroke(74, 45, 4);
    strokeWeight(2);
    rect(135,238,137,41);
    noStroke();
    fill(74, 45, 4);
    rect(134,280,139,5);
    mousePressed = function(){
        
    };
    if(mouseIsPressed && mouseX<273 && mouseX>133 && mouseY>238 && mouseY<287) {
    screen = 0;
birdX = 94;
birdY = 105;
time1 = 50;
rot = 0;
counter = 0;
start = 0;
tubeX = 360;
tube2X = 650;
time = 0;
time20 = 0;
ran = 0;
ran2 = 0; 
score = 0;
groundX = 0;
time3 = 0;
collide1 = 0;
collide2 = 0;
collideG = 0;
restart = 0;
restartTime = 0;
falling = 0;


    }
    //score 
    fill(245, 214, 130);
    stroke(0, 0, 0);
    strokeWeight(1);
    
    rect(155,80,100,140,3);
    textSize(29);
    textFont(f);
    fill(255, 255, 255);
   
    text(score,194,136);
    text(bestScore,194,200);
    noStroke();
    if (score > bestScore) {
                bestScore=score;
        }
     //S
     fill(247, 90, 29);
     rect(179,89,6,2);
     rect(177,91,2,2);
     rect(179,93,5,2);
     rect(184,95,2,2);
     rect(178,97,6,2);
     // C
     rect(189,91,2,6);
     rect(191,89,5,2);
     rect(191,97,5,2);
     //O
     rect(201,97,4,2);
     rect(201,89,4,2);
     rect(199,91,2,6);
     rect(205,91,2,6);
     //R
     rect(210,89,2,10);
     rect(211,89,5,2);
     rect(211,95,5,2);
     rect(216,91,2,4);
     rect(216,97,2,2);
     //E
     rect(221,89,2,10);
     rect(222,89,5,2);
     rect(222,97,5,2);
     rect(222,93,5,2);
     
    //B
    rect(185,147,2,10);
    rect(186,147,5,2);
    rect(186,155,5,2);
    rect(186,151,5,2);
    rect(191,153,2,2);
    rect(191,149,2,2);
    //E
    rect(196,147,2,10);
    rect(197,147,5,2);
    rect(197,155,5,2);
    rect(197,151,5,2);
    //S
    rect(207,147,6,2);
    rect(205,149,2,2);
    rect(207,151,5,2);
    rect(212,153,2,2);
    rect(206,155,6,2);
    //T
    rect(217,147,2,10);
    rect(215,147,6,2);
    
};

draw = function() {

    //Partners Code:
    if(screen === 0) {
    // background 
        background(142, 218, 232);
        backdrop();
    // tubes
    if (time3 > 200) {
        //tube 1
        time++;
        if(time === 300) {
            ran = Math.floor(random(0,5));
        }
        Tube(tubeX,tubeLocations[ran]);
        if(tubeX === -190) {
            tubeX = 420;
            time = 0;
        }
        if(start === 1){
        tubeX-=2;
        }
        // tube 2
        if(time20 === 250) {
            ran2 = Math.floor(random(0,5));
        }
        Tube(tube2X,tubeLocations2[ran2]);
        if(tube2X === -190) {
            tube2X = 420;
            time20 = 0;
        }
         if(tube2X<360 && tube2X>-189) {
              time20++;
         }
         if(start === 1){
         tube2X-=2;}
         
    }
    if (start === 1) {
           time3++;
      }
    
      //score
      
    if(tubeX === 70) {
        score++;
    }
    if(tube2X === 70) {
        score++;
    }
        textSize(43);
        textFont(f);
        fill(255, 255, 255);
        text(score,194,136);
    
    // ground
        ground(groundX,0);
           groundX-=2;
           if(groundX === -400) {
               groundX = 0;
           }
           
    // bird (My Code)
     time1++;
        if(time1 >= 40){
            time1 = 0;
        }
        
        //calls bird
        bird(birdX, birdY , 3, rot, time1); 
        
        if(restart === 1){
            endScreen();
        }
    }
};
