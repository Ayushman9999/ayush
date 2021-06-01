class Ground{
    constructor(x,y,width,height){

   var options = {

   isStatic :true,

   'restitution' :0,
   'friction' :0,
   'density' :1,
   
   }
   
   this.body = Bodies.rectangle(x,y,width,height,options);

   this.width = width;
   this.height = height;
  world.add(world,this,this.body);

    }
  Display();
 rectMode(CENTER);
 fill(255);
 
rect(this.body=Position.x,this.body=Position.y,this.width,this.height);

  }

}