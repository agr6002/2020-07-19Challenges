const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s9(array) {
  let combinations = [];
  for (let i = 0; i < array.length; i++) {
    for (let m = 0; m < 3; m++) {
      let c = 0;
      let com = [];
      for (let k = 0; k < 3; k++) {
        if ( k > 0 && m > 0 ) {
          c += array[i + k + m];
          com.push(array[i + k + m]);
        } else {
          c += array[i + k];
          com.push(array[i + k])
        }
      }
      if (c === 0) {
        com.push("||")
        combinations.push(com);;
      }
    }
  }
  demo.innerHTML = combinations;
}

s9([-1, 0, 1, 2, -1, -4]);
