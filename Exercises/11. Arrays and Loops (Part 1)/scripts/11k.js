function countPositive(nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++){
    if (nums[i] > 0){
      count++;
    }
  }
  return count;
}

console.log(countPositive([1, -2, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));