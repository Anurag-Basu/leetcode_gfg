/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const modifiedArr= []
    for(let i = 0; i < arr.length; i++){
        modifiedArr.push(fn(arr[i], i ));
    };
    return modifiedArr;
    
};