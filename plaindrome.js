function plaindrome(n) {
  // hold orignal value in a var
  let nOrign = n

  if(n<0) return false;

  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n/10); 
  }
  return rev === nOrign;
}

let n = 5445;
let res = plaindrome(n);
console.log(res);
