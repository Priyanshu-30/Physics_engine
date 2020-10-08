var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;



  var object,ground, world,engine,ball;


 function setup() {
createCanvas(400,400);

  
 
  engine = Engine.create()
  world = engine.world

  var ball_options ={
   restitution:1
   
     }
    
   ball= Bodies.circle(200,200,20,ball_options)
   World.add(world,ball)
   
   console.log(ball)
  
 
   var ground_options ={
   isStatic:true
  
    }
   
 ground = Bodies.rectangle(200,390,400,10,ground_options)
  World.add(world,ground)
  }
  function draw() {
  
 background('cyan');  
 
 Engine.update(engine);
  

 rectMode(CENTER)
 fill("brown")
rect(ground.position.x,ground.position.y,400,10)

ellipseMode(RADIUS)
fill("red")
ellipse(ball.position.x,ball.position.y,20,20)
    
    
  }