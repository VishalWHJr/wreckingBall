class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
     
        this.body=Bodies.rectangle(x, y, 800, 30, options);

        this.width=800;
        this.height=30;
        
        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER);
        fill("black")
        rect(pos.x, pos.y, this.width, this.height);
}
}