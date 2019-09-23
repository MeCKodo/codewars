var sortArray = function(nums) {
  if (nums.length <= 1) return nums;

  var bucketLen = Math.max(...nums) / 10;
  var buckets = createBucket(bucketLen);
  var max = Math.max(...nums);
  var min = Math.min(...nums);

  var range = Math.ceil((max - min) / bucketLen) || 1;

  for (var i = 0, len = nums.length; i < len; i++) {
    var num = nums[i];
    var index = parseInt((num - min) / range);
    index = index >= bucketLen ? bucketLen - 1 : index;
    var bucket = buckets[index];
    var j = bucket.length - 1;

    while (j >= 0 && bucket[j] > num) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = num;
  }

  return buckets.reduce((prev, next) => [...prev, ...next], []);
};

function createBucket(bucketLen) {
  var bucket = [];
  for (var i = 0; i < bucketLen; i++) {
    bucket.push([]);
  }
  return bucket;
}

console.log(sortArray([0]));
