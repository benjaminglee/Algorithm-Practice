//ex: tournamentRounds=['a','b'],['c','d'],['a','d']
//    results = [0,1,0]
//    expected output: a

function tournamentWinner(competitions, results) {
  //create cache to store results
  const cache = {};
  
  for (let i = 0; i < competitions.length; i++) {
    //grab current
    let current = competitions[i];
    //if winner is 0
    if (results[i]) {
      //check to see if winner exists in cache
      if (cache[current[0]]) cache[current[0]]++;
      else cache[current[0]] = 1;
    } else {
      if (cache[current[1]]) cache[current[1]]++;
      else cache[current[1]] = 1;
    }
    console.log(cache);
  }

  let max = 0;
  let maxKey = "";
  //find key with largest number of wins
  for (let competitor in cache) {
    if (cache[competitor] > max) {
      max = cache[competitor];
      maxKey = competitor;
    }
  }
  //return winner
  return maxKey;
}
