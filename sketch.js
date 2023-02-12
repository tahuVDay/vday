// Code written by Tahu White

let quoteJson;
let quoteBtn;
let starterRand;

// variables for random selection  (background and quote)
let quote;
let quoteGenerator;
let bg = 1;
// roughly define size of iphone screen
const W = 400;
const H = 580;

function preload(){

  // background loading
  background1 = loadImage('1.png');
  background2 = loadImage('2.png');
  background3 = loadImage('3.png');
  background4 = loadImage('4.png');
  background5 = loadImage('5.png');

  quoteJson = loadJSON('quotes.json');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  // random background selection
  if(bg == 1){
    fill(0);
    background(background1);
  } else if(bg == 2){
    fill(255);
    background(background2);
  }else if(bg == 3){
    fill(0);
    background(background3);
  }else if(bg == 4){
    fill(255);
    background(background4);
  }else if(bg == 5){
    fill(0);
    background(background5);
  } else{
    fill(0);
    background(220);
  }
  // set size of text to be readable on iphone, and align to center
  textSize(15);
  if(quote == "There isn't a word in the dictionary for how much I love you"){
    textSize(12.5);
  }
  quoteTxt = text(quote, displayWidth/2, displayHeight/2);
  textAlign(CENTER, CENTER);
}
// handle on touch or mouse click anywhere on screen
function mousePressed(){
  bg = Math.floor(random(1, 6));
  console.log(bg);
  quoteGenerator = Math.floor(random(0, 58));
  console.log(quoteGenerator);
  console.log(quoteJson.quotes[quoteGenerator]);
  quote = quoteJson.quotes[quoteGenerator];
}