/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
    let xCopy = x;               //hold neg num
    x = Math.abs(x);             //convert neg to pos

    let rev = 0;

    while(x > 0){
        let last = x % 10;  //rem
        rev = (rev*10) + last;  //add rem to rev
        x = Math.floor(x / 10);  //delete last dig
    }

    //integer range [-231, 231 - 1] then return 0.

    let limit = 2**31;
    if(rev < -limit || rev > limit) return 0;

    return (xCopy < 0)? -rev: rev; 
};
