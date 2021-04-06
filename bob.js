class Bob{

    constructor(x,y,radius){
       
      var options={
          restitution:1.2,
          isStatic:false,
          friction:0.3,
          density:3
      }

      this.body=Matter.Bodies.circle(x,y,radius,options);
      this.radius=radius;
     // this.height=height;
      World.add(world,this.body);
    }
     
   display() {
       
        var pos=this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
   }
}