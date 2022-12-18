//prompt: find 3 largest in arr without sorting input

function findThreeLargestNumbers(array) {
  let output = array.slice(0, 3).sort((a, b) => a - b);
  let [num1, num2, num3] = output;
  for (let i = 3; i < array.length; i++) {
    let current = array[i];
    if (current >= num3) {
      num1 = num2;
      num2 = num3;
      num3 = current;
      continue;
    }
    if (current >= num2) {
      num1 = num2;
      num2 = current;
      continue;
    }
    if (current > num1) {
      num1 = current;
    }
  }
  return [num1, num2, num3];
}
