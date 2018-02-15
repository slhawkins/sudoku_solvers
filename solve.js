global.runs = {}
global.i = 0
global.clock = function clock(point) {
  if ( !point ) {
    runs[i].start = process.hrtime()
  } else {
    if (point === 'end') {
      let end = process.hrtime(runs[i].start)
      runs[i].total_time = Math.round((end[0]*1000) + (end[1]/1000000))
    } else {
      let end = process.hrtime(runs[i].last)
      runs[i][point] = Math.round((end[0]*1000) + (end[1]/1000000))
    }
  }
  runs[i].last = process.hrtime()
}


// solve.js
var solver = require('./sudoku_solver')
var board = '010008769000073028702600300007390000406000503000062400008001902570920000239800010'

for (; i < 3; i++) {
  runs[i] = {}
  clock()
  solver.solveSudoku(board)
  clock('end')
}

total = 0
for (let j = 0; j < Object.keys(runs).length; j++) {
  total += runs[j].total_time
}
console.log(total)

console.log(total / Object.keys(runs).length)
