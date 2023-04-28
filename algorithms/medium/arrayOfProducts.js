function arrayOfProducts(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
      let product = 1
      for (let j = 0; j < array.length; j++) {
        if(j !== i) {
          product*=array[j] 
        }
      }
      output.push(product)
    }
    return output
  }