function minMax(nums) {
  let min = nums[0];
  let max = nums[0];
  let object = {};

  if(nums.length <= 0){
    object = {min: null, max: null};
    return object;
  }

  for(i = 1; i < nums.length; i++){
    if (nums[i] < min){
      min = nums[i];
    } 
    
    if (nums[i] > max){
      max = nums[i];
    }
  }
  object = {min: min, max: max};
  return object
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));
