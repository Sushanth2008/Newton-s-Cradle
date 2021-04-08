class Ball{

constructor(x,y,radius){

var op={isStatic:false,
restitution:1
}

this.body= Bodies.circle(x,y,radius,op)
this.radius=radius
World.add(world,this.body)
}

display(){

var pos=this.body.position
var angle=this.body.angle;
push()
//translate(pos.x,pos.y)
rotate(angle)
pop()
ellipseMode(RADIUS)
fill ("red")
ellipse(pos.x,pos.y,this.radius)

}


}