class Dustbin{
    constructor(x,y,width,height){
        var options ={
            'isStatic':true
        }
        this.body1 = Bodies.rectangle(x,y,width,height,options);
        World.add(world,body1);
        this.body2 = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,options);
        World.add(world,body2);
        this.body3 = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,options);
        World.add(world,body3);
        this.body1.width=width
        this.body1.height=height
    }
    display(){
       fill("white");
       rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height);
       rect(this.body1.position.x-(this.body.width/2)),(this.body.position.y-(this.body.height*2));
       rect(this.body1.position.x+(this.body.width/2)),(this.body.position.y+(this.body.height*2));
    }
}