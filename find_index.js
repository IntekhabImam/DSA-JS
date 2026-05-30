function searchElement(arr, x){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]== x)
            return i;
    }
    return -1;
}

let arr = [5,2,8,4,7]
let result = searchElement(arr, 7);
console.log(result);