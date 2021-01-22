class Rope{
    constructor(bodyA,pointB){
        var Options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            lenght:250
        }
        this.pointB = pointB;
        this.rope = Constraint.create(Options);
        World.add(world,this.rope);
    }
    display(){
        var A = this.rope.bodyA.position;
        var B = this.pointB;
        push();
        strokeWeight(4);
        stroke("green");
        line(B.x,B.y,A.x,A.y);
        pop();
    }
}