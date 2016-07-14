//Using matter.js
//Use mouse to drag them
var screenW = $(document).width();
var screenH = $(document).height();
var canvas = document.getElementById('game');
canvas.width = screenW;
canvas.height = screenH;
var currGroup = -1;
var maxSpawn = 20; //Change this for more ragdolls
var spawnNum = 0;


var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Runner = Matter.Runner;

// create an engine
var engine = Engine.create();
var mouseConstraint = MouseConstraint.create(engine,{mouse: Mouse.create(canvas)});
// create a renderer
var render = Render.create({
    canvas: canvas,
    engine: engine,
     options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframeBackground: '#ffffff',
       wireframes: false
     }
});

// create person
function createPerson(x,y){
  var headOptions = {friction: 1,frictionAir:.05};
  var chestOptions = {friction: 1,frictionAir:.05,collisionFilter: {group: currGroup-1}};
  var armOptions = {friction: 1, frictionAir: .03,collisionFilter: {group: currGroup}};
  var legOptions = {friction: 1, frictionAir: .03,collisionFilter: {group: currGroup-1}};
  var head  = Bodies.circle(x, y-70, 30, headOptions);
  var chest = Bodies.rectangle(x,y,60, 80,chestOptions);//40,120
  var rightUpperArm = Bodies.rectangle(x+40, y-20, 20, 40,armOptions);
  var rightLowerArm = Bodies.rectangle(x+40, y+20, 20, 60,armOptions);
  var leftUpperArm = Bodies.rectangle(x-40, y-20, 20, 40,armOptions);
  var leftLowerArm = Bodies.rectangle(x-40, y+20, 20, 60,armOptions);
  var leftUpperLeg = Bodies.rectangle(x-20, y+60, 20, 40,legOptions);
  var rightUpperLeg = Bodies.rectangle(x+20, y+60, 20, 40,legOptions);
  var leftLowerLeg = Bodies.rectangle(x-20, y+100, 20, 60,legOptions);
  var rightLowerLeg = Bodies.rectangle(x+20, y+100, 20, 60,legOptions);


  var legTorso = Body.create({
            parts: [chest, leftUpperLeg, rightUpperLeg],
            collisionFilter: {group: currGroup-1},
        });

  var chestToRightUpperArm = Constraint.create({
            bodyA: legTorso,
            pointA: { x: 25, y: -40 },
            pointB: {x:-5, y:-10},
            bodyB: rightUpperArm,
            stiffness: .2,
      });
  var chestToLeftUpperArm = Constraint.create({
            bodyA: legTorso,
            pointA: { x: -25, y: -40 },
            pointB: {x:5, y:-10},
            bodyB: leftUpperArm,
            stiffness: .2,
      });

  var upperToLowerRightArm = Constraint.create({
            bodyA: rightUpperArm,
            bodyB: rightLowerArm,
            pointA: {x:0,y: 15},
            pointB: {x:0, y:-20},
            stiffness: .2
      });

  var upperToLowerLeftArm= Constraint.create({
            bodyA: leftUpperArm,
            bodyB: leftLowerArm,
            pointA: {x:0,y: 15},
            pointB: {x:0, y:-20},
            stiffness: .2
      });

  var upperToLowerLeftLeg= Constraint.create({
            bodyA: legTorso,
            bodyB: leftLowerLeg,
            pointA: {x:-20,y: 60},
            pointB: {x:0, y:-25},
            stiffness: .2
      });

  var upperToLowerRightLeg= Constraint.create({
            bodyA: legTorso,
            bodyB: rightLowerLeg,
            pointA: {x:20,y: 60},
            pointB: {x:0, y:-25},
            stiffness: .2
      });

  var headContraint = Constraint.create({
            bodyA: head,
            pointA:{x:0, y: 20},
            pointB: {x:0, y:-50},
            bodyB: legTorso,
            stiffness: .3
        });


  var person = Composite.create({
          bodies: [legTorso,head,leftLowerArm,leftUpperArm, rightLowerArm, rightUpperArm,leftLowerLeg,rightLowerLeg],
          constraints: [upperToLowerLeftArm,upperToLowerRightArm, chestToLeftUpperArm, chestToRightUpperArm, headContraint,upperToLowerLeftLeg,upperToLowerRightLeg]
  });
  currGroup-=2;
  return person;
}
//var leftUpperLeg = Bodies.rectangle(-10, 155, 20, 60,lightOptions);
var ground = Bodies.rectangle(screenW/2, screenH-50, screenW, 100, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 1});
var leftSide =  Bodies.rectangle(-5, 0, 10, screenH*2, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 1});
var rightSide = Bodies.rectangle(screenW+5, 0, 10, screenH*2, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 1});

setInterval(function(){
  if(spawnNum<= maxSpawn){
    var r = createPerson((Math.random()*(screenW-70))+70,-200);
    World.add(engine.world, [r]);
    spawnNum += 1;
  }
}, 500);
World.add(engine.world, [mouseConstraint, ground,leftSide,rightSide]);
window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    screenW = window.innerWidth;
    screenH = window.innerHeight;
    Body.setPosition(ground, {x:screenW/2, y: screenH-50});
    Body.setPosition(leftSide, {x:-5, y: screenH});
  Body.setPosition(rightSide, {x:screenW+5, y: screenH});
});
Engine.run(engine);
Render.run(render);
