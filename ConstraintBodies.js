class ConstraintBodies{
    constructor(bodyA,bodyB,length){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        
        Stiffness:0.002
    }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
        

    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}