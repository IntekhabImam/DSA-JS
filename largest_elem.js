function largestElem(arr){
    let maxElem = -1;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > maxElem){
            maxElem = arr[i];
        }
    }
    return maxElem;
}

let arr = [5,4,7,30,6];
let res = largestElem(arr);

console.log(res);