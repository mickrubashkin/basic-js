const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  nodes: [],

  getLength() {
    return this.nodes.length;
  },

  addLink(value = '') {
    this.nodes.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.nodes = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position < 1 || position > this.getLength()) {
      this.nodes = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.nodes.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.nodes.reverse();

    return this;
  },
  finishChain() {
    const chain = this.nodes.map((node) => `( ${String(node)} )`).join('~~');
    this.nodes = [];

    return chain;
  },
};

module.exports = {
  chainMaker,
};
