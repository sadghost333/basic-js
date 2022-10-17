const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let array = matrix.flat();

  console.log(array);
  let result = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] === '^^'){
      result = result + 1;
    }
  }
  return result; 
}

countCats([[0, 1, '^^'],[0, '^^', 2],['^^', 1, 2]
]);

module.exports = {
  countCats
};

