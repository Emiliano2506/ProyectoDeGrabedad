/*class Piso{
    constructor(){
        this.x = 100;
        this.y = 470;
        this.ancho=700;
        this.alto = 24;
        var variablePiso={
            isStatic:true
        }
        piso = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        World.add(world,piso);
    }
    display(){
        fill("#F2E300")
        rect(this.x,this.y,this.ancho,this.alto);
    }
}*/
class Piso{
    constructor(x,y,a,at){
        this.x = x;
        this.y = y;
        this.ancho=a;
        this.alto = at;
        var variablePiso={
            isStatic:true
        }
        piso = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        World.add(world,piso);
    }
    display(){
        push();
        fill("#F2E300")
        rect(this.x,this.y,this.ancho,this.alto);
        pop();
    }
}