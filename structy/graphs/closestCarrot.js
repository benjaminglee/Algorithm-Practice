const closestCarrot = (grid, startRow, startCol) => {
    // include length of path in arr
    const queue = [[startRow, startCol, 0]];
    const visited = new Set() 
    // use breadth first to find shortest path
    while (queue.length) {
      const [row, col, length] = queue.shift();

      const rowInBounds = row >= 0 && row < grid.length;
      const colInBounds = col >= 0 && col < grid[0].length;
      const position = row + ',' + col;

      if(!colInBounds || !rowInBounds) continue;
      if(visited.has(position)) continue;
      if(grid[row][col] === 'X') continue;
      if(grid[row][col] === 'C') return length;

      visited.add(position);
      
      queue.push([row + 1, col, length + 1]);
      queue.push([row - 1, col, length + 1]);
      queue.push([row, col - 1, length + 1]);
      queue.push([row, col + 1, length + 1]);
    }
    return -1;
  };

  // find the closest carrot in a given grid graph. ignore X which acts as a wall