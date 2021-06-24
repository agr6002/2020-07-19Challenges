const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s6(array) {
  let products = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let n  = [];
      let p = 1;
      let l = j - i + 1;
      for (let k = 0; k < l; k++) {
        p *= array[i + k];
      }
      products.push(p);
    }
  }
  let large = products[0];
  for (let m = 1; m < products.length; m++) {
    if (products[m] > large) {
      large = products[m];
    }
  }
  demo.innerHTML = large;
}

s6([2,3,-2,4]);
