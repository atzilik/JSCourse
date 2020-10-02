import {GameOfLife} from './gameOfLife.js';


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const COLS = canvas.width;
const ROWS = canvas.height;

let gameOfLife = new GameOfLife(ROWS, COLS, canvas, ctx);
goTonextStep();

var nextStepButton = document.getElementById('nextStepButton');
nextStepButton.onclick = function(){goTonextStep()};

function goTonextStep()
{
  var that = gameOfLife;

  requestAnimationFrame(function(){

  that.update();
  
  });
}


