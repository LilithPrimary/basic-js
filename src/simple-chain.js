// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "") {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    // try {
      if (!Number.isInteger(position) || position - 1 < 0 || position - 1 >= this.chain.length) throw new Error ('You can\'t remove incorrect link!');
      this.chain.splice(position - 1, 1)
      return this;
    // }
    // catch (error) {
    //   throw new Error ("You can't remove incorrect link!")
    // }
    // finally {
    //   this.chain = [];
    // }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return `( ${this.chain.join(" )~~( ")} )`
  }
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
module.exports = {
  chainMaker
};
