class Box{
constructor(x,y,width,height){
var v={
'restitution':0.8,
'friction':2,  
'density':2
} 
this.body=Bodies.rectangle(x,y,width,height,v);
this.width=width;
this.height=height;
World.add(world,this.body);   
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("white");
rect(pos.x,pos.y,this.width,this.height);    
pop();
}    
};