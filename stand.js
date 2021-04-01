class Stand{
constructor(x,y){
 var  option={
        isStatic: true

    }
    this.body = Bodies.rectangle(x, y, 700, 30, option);
    this.width = 700;
    this.height = 50;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
   
    push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);

      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
}
}