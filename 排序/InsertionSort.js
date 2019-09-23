var sortArray = function(nums) {
  var len = nums.length;
  if (len <= 1) return nums;

  for (var i = 1; i < len; i++) {
    var temp = nums[i]; // 从第一个开始跟前面已经排好的做对比
    var j = i - 1;
    for (; j >= 0; j--) {
      // 从后往前，查找已经排好的区域
      if (nums[j] > temp) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
    }
    nums[j + 1] = temp;
  }
  return nums;
};

var sortArray = function(nums) {
  var len = nums.length;
  if (len <= 1) return nums;

  for (var i = 1; i < len; i++) {
    var temp = nums[i]; // 从第一个开始跟前面已经排好的做对比
    var j = i - 1;
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};

console.log(sortArray([4, 5, 1]));
