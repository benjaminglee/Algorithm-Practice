//calculate greatest/minimum possible speed from two equally sized arrays based on input bool.
//one red to one blue, the greatest speed always is added to total

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const slowSpeed =
      redShirtSpeeds[i] > blueShirtSpeeds[i]
        ? redShirtSpeeds[i]
        : blueShirtSpeeds[i];
    const greatestSpeed =
      redShirtSpeeds[i] > blueShirtSpeeds[blueShirtSpeeds.length - (1 + i)]
        ? redShirtSpeeds[i]
        : blueShirtSpeeds[blueShirtSpeeds.length - (1 + i)];
    if (fastest) total += greatestSpeed;
    else total += slowSpeed;
  }
  return total;
}
