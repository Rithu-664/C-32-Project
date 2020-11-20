const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43,block44,block45;
var polygon;
var slingshot;
var score=0;
var gameState="play";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(500,300,300,10);
    ground2 = new Ground(900,230,200,10);

    polygon = new Polygon(100,200,100);

    block1 = new Block(390,275,30,40);
    block2 = new Block(423,275,30,40);
    block3 = new Block(456,275,30,40);
    block4 = new Block(489,275,30,40);
    block5 = new Block(522,275,30,40);
    block6 = new Block(555,275,30,40);
    block7 = new Block(588,275,30,40);
    block8 = new Block(621,275,30,40);
    block9 = new Block(408,233,30,40);
    block10 = new Block(441,233,30,40);
    block11 = new Block(474,233,30,40);
    block12 = new Block(507,233,30,40);
    block13 = new Block(540,233,30,40);
    block14 = new Block(573,233,30,40);
    block15 = new Block(606,233,30,40);
    block16 = new Block(425,190,30,40);
    block17 = new Block(458,190,30,40);
    block18 = new Block(491,190,30,40);
    block19 = new Block(524,190,30,40);
    block20 = new Block(557,190,30,40);
    block21 = new Block(590,190,30,40);
    block22 = new Block(442,147,30,40);
    block23 = new Block(475,147,30,40);
    block24 = new Block(508,147,30,40);
    block25 = new Block(541,147,30,40);
    block26 = new Block(574,147,30,40);
    block27 = new Block(482,103,30,40);
    block28 = new Block(515,103,30,40);
    block29 = new Block(548,103,30,40);
    block30 = new Block(513,60,37,40);

    block31 = new Block(830,203,30,40);
    block32 = new Block(863,203,30,40);
    block33 = new Block(896,203,30,40);
    block34 = new Block(929,203,30,40);
    block35 = new Block(962,203,30,40);
    block36 = new Block(845,160,30,40);
    block37 = new Block(878,160,30,40);
    block38 = new Block(911,160,30,40);
    block39 = new Block(944,160,30,40);
    block40 = new Block(862,117,30,40);
    block41 = new Block(895,117,30,40);
    block42 = new Block(928,117,30,40);
    block43 = new Block(896,73,35,40);

    slingshot = new SlingShot(polygon.body,{x:100,y:200});
    Engine.run(engine);
}

function draw(){
  background("white")
  if(background){
    getTime();
    console.log("hello")
  
  
    //Engine.update(engine);
   

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
    block33.score();
    block34.score();
    block35.score();
    block36.score();
    block37.score();
    block38.score();
    block39.score();
    block40.score();
    block41.score();
    block42.score();
    block43.score();
    
  ground1.display();
  ground2.display();
  polygon.display();
  fill("pink")
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();  
   block6.display();
   block7.display();
   block8.display();
   fill("turquoise");
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   fill("pink")
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("pink")
  block27.display();
  block28.display();
  block29.display();
  fill("turquoise")
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  fill("pink")
  block36.display();
  block37.display();
  block38.display();
  block39.display(); 
  fill("turquoise");
  block40.display(); 
  block41.display();
  block42.display();
  fill("pink")
  block43.display();

  slingshot.display();
    fill("white")
    text(mouseX+" , "+mouseY,mouseX,mouseY);

    text("SCORE : "+score,750,40);
   //console.log(polygon.body.position)
  }
}

function mouseDragged(){
  if(gameState==="play"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
}

function mouseReleased(){
  slingshot.fly();
  gameState="end";
}


function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:50,y:200});
    slingshot.attatch(polygon.body);
    gameState="play";
  }
}

  async function getTime(){
   
    var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var dataJson = await data.json()
    var dateTime = dataJson.datetime;
    
    var hour = dateTime.slice(11,13)
    if(hour>=6&&hour<=18){
      background("Lavender");
    }else if(hour>=18 &&hour>=6){
      background("DarkSlateBlue");
    }
    console.log(hour)
    
  }
