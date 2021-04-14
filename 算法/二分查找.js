const binarySearch = (sorted, target) => {
  const length = sorted.length
  for (let i = 0, j = length - 1; i <= j; ) {
    const mid = Math.floor((i + j) / 2)
    if (sorted[mid] < target) {
      i = mid + 1
    } else if (sorted[mid] > target) {
      j = mid - 1
    } else {
      return mid
    }
  }
  return -1
}



console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 0))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 7))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 1))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 2))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 3))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 4))
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 8))
