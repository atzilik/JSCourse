export {GameOfLife};

class GameOfLife{
  constructor(rows, cols, ctx, size){
    this.rows = rows;
    this.cols = cols;
    this.ctx = ctx;
    this.grid = this.buildGameBoard();
    this.size = size;
  }
 
buildGameBoard() {
  return new Array(this.cols).fill(null)
    .map(() => new Array(this.rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
}

update() {
  this.grid = this.getNextGeneration(this.grid);
  this.updateGameBoard(this.grid);
}

getNextGeneration(grid) {
  const nextGenerationState = grid.map(arr => [...arr]);

  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      const cell = grid[column][row];
      let numNeighbours = 0;

      //count the neighbours of each cell
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = column + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < this.cols && y_cell < this.rows) {
            const currentNeighbour = grid[x_cell][y_cell];
            numNeighbours += currentNeighbour;
          }
        }
      }

      // the rules //
      if (cell === 1 && numNeighbours < 2) {
        nextGenerationState[column][row] = 0; // die
      } else if (cell === 1 && numNeighbours > 3) {
        nextGenerationState[column][row] = 0; // die
      } else if (cell === 0 && numNeighbours === 3) {
        nextGenerationState[column][row] = 1; // alive
      }
    }
  }
  return nextGenerationState;
}

updateGameBoard(grid) {
  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      const cell = grid[column][row];

      this.ctx.beginPath();
      this.ctx.rect(column * this.size, row * this.size, this.size, this.size);
      this.ctx.fillStyle = cell ? 'red' : 'white';
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}
}