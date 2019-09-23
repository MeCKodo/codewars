function bsearch(arr, value) {
  var l = 0;
  var r = arr.length - 1;

  while (l <= r) {
    var middle = parseInt((l + r) / 2);
    if (arr[middle] === value) {
      return arr[middle];
    } else if (arr[middle] < value) {
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }

  return -1;
}

console.log(bsearch([1, 2, 52, 342], 52));
