class Ball{
    constructor(x,y,width,height,angle){
        var Options = {
            'density':1.0,
            'frictionAir':0.005
        }
        this.body = Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var m = this.body.position;
        var n = this.body.angle;
        push()
        translate(m.x,m.y)
        rotate(n);
        ellipse(0,0,this.width,this.height);
        pop()
    }
}