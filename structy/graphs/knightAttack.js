const knightAttack = (n, kr, kc, pr, pc) => {
    // board has arbitrary length of n
    const visited = new Set(pr + ',' + pc);
    const queue = [[kr, kc, 0]];
    while(queue.length) {
      const [knightRow, knightCol, step] = queue.shift();
      if(knightRow === pr && knightCol === pc) return step;
      // there are 8 possible moves for a knight
      const positions = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [-1,2],
        [1,2],
        [-1,-2],
        [1,-2]
      ];
      
      for(const position of positions) {
        const [x, y] = position;
        const nextRow = knightRow + x;
        const nextCol = knightCol + y;
        const nextPos = nextRow + ',' + nextCol;
        if(isInBounds(nextRow, nextCol, n) && !visited.has(nextPos)) {
          queue.push([nextRow,nextCol,step + 1]);
          visited.add(nextRow + ',' + nextCol)
        }
      }
    }
    return null;
  };
  // in bounds helper func
  const isInBounds = (r,c,n) => {
    const rowInBounds = 0 <= r && r < n;
    const colInBounds = 0 <= c && c < n;
    
    return rowInBounds && colInBounds;
  }

  // given coordinates of a pawn and knight, return the minimum number of moves a knight would need to take the pawn