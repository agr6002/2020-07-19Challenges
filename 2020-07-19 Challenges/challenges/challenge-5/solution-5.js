const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s5(array) {
  let sums = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let s = 0;
      let l = j - i + 1;
      for (let k = 0; k < l; k++) {
        s += array[i + k];
      }
      sums.push(s);
    }
  }
  let large = sums[0];
  for (let l = 1; l < sums.length; l++) {
    if (sums[l] > large) {
      large = sums[l];
    }
  }
  demo.innerHTML = large;
}

s5([-2,1,-3,4,-1,2,1,-5,4]);