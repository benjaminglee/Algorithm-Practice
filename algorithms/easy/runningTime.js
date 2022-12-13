//return minimum total running time for list of queries, where each num in an array represents total running time of one query

function minimumWaitingTime(queries) {
  let total = 0;
  let runningTime = 0;
  queries.sort((a, b) => a - b);
  for (const num of queries) {
    total += runningTime;
    runningTime += num;
  }
  return total;
}
