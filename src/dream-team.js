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
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let res = arr.reduce((acc, el) => {
    if (typeof el === "string") {
      for (let i = 0; i < el.length; i++) {
        if (el[i] !== " ") {
          acc.push(el[i].toUpperCase());
          break;
        }
      }
    }
    return acc;
  }, []).sort().join("");
  return res;
}

module.exports = {
  createDreamTeam
};
