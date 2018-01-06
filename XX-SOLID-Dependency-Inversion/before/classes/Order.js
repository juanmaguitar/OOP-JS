class Order() {
  constructor(customerId) {
    this.customerId =  customerId;
    this.dateTime = new Date();
    this.totalAmount = 0;
    this.items = [];
  }
}

module.exports = Order