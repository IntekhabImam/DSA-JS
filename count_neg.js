function countNeg(arr){
    let count = 0;
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [-1,-5,-4,8,-9];
let res = countNeg(arr);

console.log(res);