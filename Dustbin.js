class Dustbin{
    constructor(x,y,width,height){
        var options ={
            'isStatic':true
        }
        this.dustbinThickness=20;
        this.body1 = Bodies.rectangle(x,y,width,this.dustbinThickness,options);
        World.add(world,this.body1);
        this.body2 = Bodies.rectangle((x-(width/2)),(y-(height*2)),this.dustbinThickness,height,options);
        World.add(world,this.body2);
        this.body3 = Bodies.rectangle((x+(width/2)),(y-(height*2)),this.dustbinThickness,height,options);
        World.add(world,this.body3);
        this.body1.width=width;
        this.body1.height=height;
        this.width=width;
        this.height=height;
    }
    display(){
       fill("white");

       var posBottom=this.body1.position;
       var posLeft=this.body2.position;
       var posRight=this.body3.position;

       push()
       translate(posLeft.x,posLeft.y)
       rectMode(CENTER)
       //strokeWeight(4)
       angleMode(RADIANS)
       fill(255)
       stroke(255)
       rotate(this.angle)
       rect(0,0,this.dustbinThickness,this.height)
       pop()

       push()
       translate(posRight.x,posRight.y)
       rectMode(CENTER)
       //strokeWeight(4)
       stroke(255)
       angleMode(RADIANS)
       fill(255)
       rotate(-1*this.angle)
       rect(0,0,this.dustbinThickness,this.height)
       pop()

       push()
       translate(posBottom.x,posBottom.y)
       rectMode(CENTER)
       //strokeWeight(4)
       stroke(255)
       angleMode(RADIANS)
       fill(255)
       rect(0,0,this.width,this.dustbinThickness)
       pop()
       
       //rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height);
       //rect(this.body1.position.x-(this.body1.width/2)),(this.body.position.y-(this.body1.height*2));
       //rect(this.body1.position.x+(this.body1.width/2)),(this.body.position.y+(this.body1.height*2));

    }
}
