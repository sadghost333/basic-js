const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let mainArr = s1Arr.concat(s2Arr);
  let result = 0;
  for(let i = 0;i < s1Arr.length; i++){
    let letter = mainArr[i];
      for(let j = (s1Arr.length + 1) + i ; j < mainArr.length; j++){
        if(mainArr[j] === letter){
          result = result + 1;
         break; 
        }
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
