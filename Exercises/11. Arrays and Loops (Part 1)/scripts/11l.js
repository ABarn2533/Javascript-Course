function minMax(nums) {
  let min = nums[0];
  let max = nums[0];

  for(i = 1; i < nums.length; i++){
    if (nums[i] < min){
      min = nums[i];
    } 
    
    if (nums[i] > max){
      max = nums[i];
    }
  }
  let object = {min: min, max: max};
  return object
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));