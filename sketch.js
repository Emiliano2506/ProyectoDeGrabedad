//Variables Globales 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var ball;
var piso,superior,inferior,derecha,izquierda;
var ball2;
var posisionY;
var botonArriba, botonDerecha, botonAbajo;

function preload(){

}
function setup(){
    createCanvas(750,540);
    engine = Engine.create()
    world = engine.world;
    //vaieabeles de motor fisico
    var ballVariable={
        restitution:0.5, frictionAir:0.01
    }
    ball = Bodies.circle(400,20,20,ballVariable);
    World.add(world,ball);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    //ball2 = new Ball();
    ball2 = new Ball(350,20,20)
    //piso = new Piso()
    inferior =new Piso(100,470,950,24);
    derecha = new Piso(565,188,20,540);
    izquierda = new Piso(10,188,20,540);
    superior = new Piso(200,10,750,20);
    //creacion de botones
    botonArriba=createImg("flechaArriba.png");
    botonArriba.position(690,18);
    botonArriba.size(30,30);
    botonArriba.mouseClicked(fuerzaArriba);
    botonDerecha=createImg("flechaDerecha.png");
    botonDerecha.position(720,50);
    botonDerecha.size(30,30)
    botonDerecha.mouseClicked(fuerzaDerecha);
    botonAbajo=createImg("flechaAbajo.png");
    botonAbajo.position(690,50);
    botonAbajo.size(30,30);
    botonAbajo.mouseClicked(fuerzaAbajo);

    //botonDerecha.mouseClicked(fuerzaDerecha2);
}
function draw(){
    background("black");
    ellipse(ball.position.x,ball.position.y,20);
    //rect(piso.position.x,piso.position.y,700,24);
    posisionY=ball.position.y
    console.log(posisionY);
    Engine.update(engine);
    ball2.display();
    ball2.movimiento();
    //ball2.fuerzaArriba();
    //ball2.fuerzaDerecha2();
    //piso.display();
    inferior.display();
    derecha.display();
    izquierda.display();
    superior.display();
}
function fuerzaArriba(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
    console.log("si funciono Arriba");
    Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.1});
}
function fuerzaDerecha(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
    console.log("si funciono Derecha");
}
function fuerzaAbajo(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
    console.log("si funciono");
}
/*function fuerzaDerecha2(){
    Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.1,y:0});
}*/