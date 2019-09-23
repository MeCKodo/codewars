var sortArray = function(nums) {
  if (nums.length <= 1) return nums;

  const [f, ...l] = nums;

  return [
    ...sortArray(l.filter(x => x < f)),
    f,
    ...sortArray(l.filter(x => x >= f)),
  ];
};

console.log(sortArray([0]));
