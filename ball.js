//clase sin argumentos de entrada en el constructor
/*class Ball{
    constructor(){
        this.x = 100;
        this.y = 50;
        this.speed=5;
        this.r = 34;
    }
    display(){
        fill("#3CF10F");
        stroke(5)
        ellipse(this.x, this.y, this.r);
    }
    movimiento(){
        this.y = this.y + this.speed;
    }
}*/

//clase con argumentos de entrada en el constructor

class Ball{
    constructor(corX,corY,corR){
        this.x = corX;
        this.y = corY;
        this.speed=5;
        this.r = corR;
        /*var ballVariable={
            restitution:0.5, frictionAir:0.01
        }
        body = Bodies.circle(400,20,20,ballVariable);
        World.add(world,body);*/
    }
    display(){
        fill("#3CF10F");
        stroke(5)
        ellipse(this.x, this.y, this.r);
    }
    movimiento(){
        this.y = this.y + this.speed;
        if(this.y == 440){
            this.speed = 0;
            this.y=439
        }
    }
    fuerzaArriba(){
        Matter.Body.applyForce(body,{x:0,y:0},{x:0,y:-0.1});
        console.log("si funciono Arriba");
    }
    /*fuerzaDerecha2(){
        Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.5,y:0});
    }*/
}
