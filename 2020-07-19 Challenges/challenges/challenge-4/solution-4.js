const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";
function s4(array) {
  let prod = [];
  for (let i = 0; i < array.length; i++) {
    let num = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== array[i]) {
        num *= array[j];
      }
    }
    prod.push(num);
  }
  demo.innerHTML = prod;
}

s4([1,2,3,4]);
