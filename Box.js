class Box{

    constructor(x,y,width,height){

        var body_options={
            restitution: 0.95
        }
        this.body=Bodies.rectangle(x,y,width,height,body_options);
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        
    }
    display(){
       var pos=this.body.position;
       
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
      
    }
}