var sortArray = function(nums) {
  var len = nums.length;
  if (len <= 1) return nums;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
