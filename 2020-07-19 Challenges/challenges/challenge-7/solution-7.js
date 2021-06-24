const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s7(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  demo.innerHTML = min;
}

s7([3,4,5,1,2]);
