//O(n^2) time -- brute force solution
// function arrayOfProducts(array) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//       let product = 1
//       for (let j = 0; j < array.length; j++) {
//         if(j !== i) {
//           product*=array[j] 
//         }
//       }
//       output.push(product)
//     }
//     return output
//   }

//optimized for time and space

function arrayOfProducts(array) {
    //crea
    const products = new Array(array.length).fill(1);
  
    let leftProduct = 1;
    for(let i =0; i < array.length; i++) {
      products[i] = leftProduct;
      leftProduct*=array[i];
    }
  
    let rightProduct =1;
    for(let i = array.length - 1; i >=0; i--) {
      products[i] *= rightProduct;
      rightProduct *= array[i];
    }
    return products;
  }
