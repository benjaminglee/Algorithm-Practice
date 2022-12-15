//two input arrays of equal lengths with positive integers
//return true if one array is contains integers that are strictly greater than opposing array at same index

function classPhotos(redShirtHeights, blueShirtHeights) {
  const sortedReds = redShirtHeights.sort((a, b) => a - b);
  const sortedBlues = blueShirtHeights.sort((a, b) => a - b);
  for (let i = 0; i < sortedReds.length; i++) {
    if (sortedReds[i] <= sortedBlues[i]) break;
    if (i === sortedReds.length - 1) return true;
  }
  for (let i = 0; i < sortedReds.length; i++) {
    if (sortedReds[i] >= sortedBlues[i]) break;
    if (i === sortedReds.length - 1) return true;
  }
  return false;
}
