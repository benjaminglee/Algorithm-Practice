const fib = (n) => {
    const lookup = {};
    return calc(n, lookup)
  };
  
  const calc = (n, lookup) => {
    if(n === 0) return 0;
    if(n === 2 || n === 1) return 1;
    if(lookup[n]) return lookup[n];
    const nVal =  calc(n - 1, lookup) + calc(n - 2, lookup); 
    lookup[n] = nVal;
    return nVal;
  }

  // find the nth number in a fibonacci sequence