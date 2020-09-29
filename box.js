class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity=255;
    }
    display(){
      if(this.body.speed<3){
        console.log(this.body.speed);
      }

      else{
        World.remove(world,this.body);
        push()
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        pop()
      }
      var pos =this.body.position;
      rectMode(CENTER);
      fill(70,105,121);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

