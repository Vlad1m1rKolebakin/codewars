function chessBoard(rows, columns) {
    return  Array.from({length:rows}).fill(Array.from({length:columns}))
    .map((v,i)=>i%2!==0?v.map((v,i)=>i%2===0?v='X':v='O'):v.map((v,i)=>i%2!==0?v='X':v='O'))
  }