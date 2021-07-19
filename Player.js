class Player{
    constructor(x,y) {
      var options = {
        isStatic : false,
  'restitution': 0.6
  
  
      }
      this.body = Bodies.rectangle(x,y,50,120,options)
      this.width = 50;
      this.height = 50;
      this.image = loadImage("id.png")
      World.add(world,this.body)
    }
  
  
    display(){
      fill("black")
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,50,120)
      
     
  
    }
  }
  