function clock(start) {
  if ( !start ) return process.hrtime();
  var end = process.hrtime(start);
  return Math.round((end[0]*1000) + (end[1]/1000000));
}


// solve.js
var solver = require('./sudoku_solver')
var board =
  '010008769000073028702600300007390000406000503000062400008001902570920000239800010'

const runs = {}
for (let i = 0; i < 3; i++) {
  let t0 = clock()
  solver.solveSudoku(board)
  let duration = clock(t0)
 runs[i] = "Call to solveSudoku() took " + duration + " milliseconds."
}
console.log(runs)
