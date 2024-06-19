/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
  const cache = {};

  return function (...args) {
    const catchField = JSON.stringify(args);
    if(cache.hasOwnProperty(catchField)){
      console.log('inside memo')
      return cache[catchField]
    }
    const result = fn(...args);
    cache[catchField] = result;
    return result;
  };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */