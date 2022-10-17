const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let arrayCopy = [];
  for(let i = 0; i < arr.length; i++){
    arrayCopy.push(arr[i]);
  }

  for(let i = 0; i < arrayCopy.length; i++){
    if(arrayCopy[i] === '--discard-next'){
      if(i === arrayCopy.length -1){
        arrayCopy.splice(i,1,'*')
      }
      else{
      arrayCopy.splice(i, 2, '*', '*');
      }

    }
    if(arrayCopy[i] === '--discard-prev'){
      if(i === 0){
        arrayCopy.splice(0,1,'*')
      }
      else{
        arrayCopy.splice(i - 1 , 2, '*');
      }
    }

    if(arrayCopy[i] === '--double-next'){
      if(i === arrayCopy.length -1){
        arrayCopy.splice(i, 1, '*');
      }
      else{
      arrayCopy.splice(i, 1, arrayCopy[i+1]);
      }
    }

    if(arrayCopy[i] === '--double-prev'){
      if(i === 0){
        arrayCopy.splice(i, 1, '*');
      }
      else{
        arrayCopy.splice(i, 1, arrayCopy[i-1]);
      }
    }
  }
  return arrayCopy.filter(e => e !== '*');
  }



module.exports = {
  transform
};


const array = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];

const func = (arr) =>{
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let arrayCopy = [];
  for(let i = 0; i < arr.length; i++){
    arrayCopy.push(arr[i]);
  }

  for(let i = 0; i < arrayCopy.length; i++){

    if(arrayCopy[i] === '--discard-next'){
      if(i === arrayCopy.length -1){
        arrayCopy.splice(i,1,'*')
      }
      else{
      arrayCopy.splice(i, 2, '*', '*');
      }

    }
    if(arrayCopy[i] === '--discard-prev'){
      if(i === 0){
        arrayCopy.splice(0,1,'*')
      }
      else{
      arrayCopy.splice(i - 1 , 2, '*');
      }
    }

    if(arrayCopy[i] === '--double-next'){
      if(i === arrayCopy.length -1){
        arrayCopy.splice(i, 1, '*');
      }
      else{
      arrayCopy.splice(i, 1, arrayCopy[i+1]);
      }
    }

    if(arrayCopy[i] === '--double-prev'){
      if(i === 0){
        arrayCopy.splice(i, 1, '*');
      }
      else{
        arrayCopy.splice(i, 1, arrayCopy[i-1]);
      }
    }
  }

  return arrayCopy.filter(e => e !== '*');
}

console.log(func(array));