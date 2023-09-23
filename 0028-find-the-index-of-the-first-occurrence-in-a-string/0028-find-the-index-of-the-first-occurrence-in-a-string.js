/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(text, subText) {
    let index = 0;
    const length = text.length;

  if (text.includes(subText)) {
    while (index < length) {
      if(text.substring(index, index + subText.length) === subText){
        return index;
      }
      index++;
    }
  }
  return -1;
};