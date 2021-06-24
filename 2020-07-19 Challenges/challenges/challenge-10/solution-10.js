const demo = document.getElementById("demo");
demo.innerHTML += "Demonstrate your solution here.";

function s10(array) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      pairs.push([i, j]);
    }
  }
  let areas = [];
  let wl = [];
  for (let a = 0; a < pairs.length; a++) {
    let w = pairs[a][1] - pairs[a][0] - 1;
    let l = array[pairs[a][0]] > array[pairs[a][1]] ? array[pairs[a][0]]: array[pairs[a][1]];
    areas.push(w * l);
    wl.push([w, l]);
  }  
  let large = areas[0];
  for (let m = 1; m < areas.length; m++) {
    if (areas[m] > large) {
      large = areas[m];
    }
  }
  demo.innerHTML = large;
  // console.log(areas);
  // console.log(pairs);
  // console.log(wl);
}

s10([1,8,6,2,5,4,8,3,7]);
