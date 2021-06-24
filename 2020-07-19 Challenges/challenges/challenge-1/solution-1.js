const demo = document.getElementById("demo");


function s1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        demo.innerHTML += `[${i}, ${j}]`;
      }
    }
  }
}

s1([2, 7, 11, 15], 9);