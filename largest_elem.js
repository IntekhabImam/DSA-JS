function largestElem(arr){

    let maxElem = -Infinity; //this is the least min number

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > maxElem){
            maxElem = arr[i];
        }
    }
    return maxElem;
}

let arr = [5,-1,7,9,2];
let res = largestElem(arr);

console.log(res);