//prompt: recursively add arr and multiply by depth(ex. [1, [1,2]])
// 1 + 2(1+2) = 5

function productSum(array, depth = 1) {
  let total = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      total += productSum(element, depth + 1);
    } else total += element;
  }
  return total * depth;
}
