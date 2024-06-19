/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    const result = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return result;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */