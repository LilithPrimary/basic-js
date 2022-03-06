const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) this.chain.push("null");
    else this.chain.push(value);
    return this;
  },
  removeLink(position) {
    // try {
      if (!Number.isInteger(position) || position - 1 < 0 || position - 1 >= this.chain.length) {
        this.chain = [];
        throw new Error ('You can\'t remove incorrect link!');
      }
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
    try {
      return `( ${this.chain.join(" )~~( ")} )`
    }
    finally {
      this.chain = [];
    }
  }
};

// console.log(chainMaker.addLink('GHI').addLink(Infinity).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
module.exports = {
  chainMaker
};
