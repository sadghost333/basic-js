const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let sortArr = [];
  let letterResult = [];

  if(members === null){
    return false;
  }

  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      sortArr.unshift(members[i].split(' ').join(''));
    }
  }
  sortArr.sort();

  for(let i = 0; i <sortArr.length; i++){
    let name = sortArr[i];
    letterResult.unshift(name[0].toUpperCase());
  }

  letterResult.sort();
  return letterResult.join('');
}

module.exports = {
  createDreamTeam
};
