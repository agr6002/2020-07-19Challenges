const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s3(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        demo.innerHTML = "true";
      }
    }
  }
  if (demo.innerHTML !== "true") {
    demo.innerHTML = "false";
  }
}

s3([1,2,3,4]);
