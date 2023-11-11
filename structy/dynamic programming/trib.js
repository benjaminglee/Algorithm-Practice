const tribonacci = (n, dict={0:0,1:0,2:1}) => {
    if(n in dict) return dict[n];
    dict[n] =  tribonacci(n - 1, dict) + tribonacci(n-2, dict) + tribonacci(n-3, dict);
    return dict[n];
  };

  // return nth number in tribonacci sequence. nth number === value of last three numbers added together