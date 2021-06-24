const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s8(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      demo.innerHTML = i;
    }
  }
}

s8([4,5,6,7,0,1,2], 0);
