function smallestElem(arr) {
  let minElem = Infinity; //max num

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minElem) {
      minElem = arr[i];
    }
  }
  return minElem;
}

let arr = [1, 7, 5, -9, 6];
let res = smallestElem(arr);

console.log(res);
