class Ball{
    constructor(x, y, radius){
        var options={
            restitution:1.8,
            density:1.2,
            friction:1
        }
        this.body=Bodies.circle(x,y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius);
    }
}