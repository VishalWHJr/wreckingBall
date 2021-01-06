class Wire{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
        }
        this.body = Constraint.create(options);
        World.add(world, this.body)
    }
    display(){
       // console.log(this.body)
        var pointA=this.body.bodyA.position
        var pointB= this.body.pointB
        stroke(2);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    
}
}