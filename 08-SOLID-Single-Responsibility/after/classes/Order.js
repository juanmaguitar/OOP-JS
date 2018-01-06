class Order {
  constructor(customerId) {
    this.id =  customerId;
    this.dateTime = +new Date();
    this.items = [];
  }
}

module.exports = Order