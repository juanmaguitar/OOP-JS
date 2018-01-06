const uuidv1 = require('uuid/v1');

class Order {
  constructor() {
    this.id =  uuidv1();
    this.dateTime = +new Date();
    this.items = [];
  }
}

module.exports = Order