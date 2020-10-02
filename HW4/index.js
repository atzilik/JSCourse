import {GameOfLife} from './gameOfLife.js';


var nextStepButton = document.getElementById('nextStepButton');
nextStepButton.onclick = function(){goTonextStep()};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
const size = 40;
const cols = canvas.width / 40;
const rows = canvas.height / 40;

let gameOfLife = new GameOfLife(rows, cols, ctx, size);
goTonextStep();


function goTonextStep()
{
  var that = gameOfLife;

  requestAnimationFrame(function(){

  that.update();
  
  });
}


