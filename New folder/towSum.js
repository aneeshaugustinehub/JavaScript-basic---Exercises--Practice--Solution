var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(target);
            return [i,j]
            }
  }
}
  return []
}
console.log();
twoSum([3, 2, 4], 6);
