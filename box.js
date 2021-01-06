class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:0.2,
            friction:1,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h);
    }
}