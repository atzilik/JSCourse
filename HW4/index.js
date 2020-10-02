import {GameOfLife} from './gameOfLife.js';


var nextStepButton = document.getElementById('nextStepButton');
nextStepButton.onclick = function(){goTonextStep()};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 50;
canvas.height = 50;

const COLS = canvas.width / 10;
const ROWS = canvas.height / 10;

let gameOfLife = new GameOfLife(ROWS, COLS, ctx);
goTonextStep();


function goTonextStep()
{
  var that = gameOfLife;

  requestAnimationFrame(function(){

  that.update();
  
  });
}


