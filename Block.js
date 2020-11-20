class Block {
    constructor(x, y, w, h) {
      var options = {
          isStatic: false,
          density:0.5
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.visible = 255;
      World.add(world, this.body);
    }
    score(){
      if(this.visible<0 && this.visible >-105){
        score++
      }
    }
    display(){
      //console.log(this.body.speed)
      
     
      if(this.body.speed<10){
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
      }else{
        World.remove(world,this.body);
         push()
         this.visible=this.visible-5
         tint(255,this.visible)
         pop()
      }
     
      
    }
  }
  