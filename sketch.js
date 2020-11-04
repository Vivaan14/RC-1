var canvas,backgroundImage;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game1;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game1 = new game();
  game1.getState();
  game1.start();
}

function draw(){
  background("white");
    drawSprites();
  
}
