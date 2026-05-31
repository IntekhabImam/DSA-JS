function secLargest(arr) {
  let firstLarElem = -Infinity;
  let secondLarElem = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLarElem) {
      secondLarElem = firstLarElem;
      firstLarElem = arr[i];
    } else if (arr[i] > secondLarElem) {
      secondLarElem = arr[i];
    }
  }
  return secondLarElem;
}

let arr = [5, 18, 9, 4, 3];
let res = secLargest(arr);
console.log(res);
