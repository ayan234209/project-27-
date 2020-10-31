class Bob{
    constructor(x,y,radius){
        var options={
    
            isStatic:false,
            restitution:1.0,
            friction:0,
            density:0.8
        }
          this.body = Bodies.circle(x,y,radius/2,options);
          this.radius=radius;
          World.add(world, this.body);
          
    
        
    }
        display(){
            var pos = this.body.position;
            push();
            rectMode(CENTER);
            ellipseMode(RADIUS);
            fill("red");
            ellipse(pos.x,pos.y,this.radius,this.radius);
            pop()
            
    
    
    
    
        }
    
    }