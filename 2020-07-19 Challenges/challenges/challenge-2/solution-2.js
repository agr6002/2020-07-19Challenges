const demo = document.getElementById("demo");

function s2(array) {
  greater = [0, 1];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] - array[j] > array[greater[0]] - array[greater[1]]) {
        greater[0] = i;
        greater[1] = j;
      }
    }
  }
  if (array[greater[0]] - array[greater[1]] > 0) {
    demo.innerHTML = array[greater[0]] - array[greater[1]];
  } else {
    demo.innerHTML = "0"
  }
}

s2([7,1,5,3,6,4]);