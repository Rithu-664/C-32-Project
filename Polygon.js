class Polygon{
    constructor(x,y,r){
        var prop={
            isStatic: false,
            restitution: 0.8, 
            friction: 1.0, 
            density: 2
        }
        this.body = Bodies.circle(x,y,r,prop);
        this.r=r;
        this.image = loadImage("Polygon.png")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)

        //ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }
}