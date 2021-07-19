class ground{
constructor(x,y){
var options = {
    isStatic:true
}


    this.body = Bodies.rectangle(x,y,2000,10,options)
    
    //this.image = loadImage("id.png")
    World.add(world,this.body)


}
display(){
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,2000,10)



}




}