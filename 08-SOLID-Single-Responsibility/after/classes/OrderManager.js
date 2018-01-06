const Order = require('./Order')
const OrderSender = require('./OrderSender')
const Interface = require('./helpers/Interface')
const { handleResponse, handleError } = require('../helpers')

const IitemAddeable = new Interface("IitemAddeable", [], ["itemId", "description"])

class OrderManager {

  createOrder(customerId) {
    this.order = new Order(customerId)
  }

  addItem(item) {
    IitemAddeable.isImplementedBy(item)
    this.order.items.push(item)
  }

  sendOrder() {
    if (this.isValid(this.order)) {
      var orderSender = new OrderSender()
      orderSender.send(this.order)
    }
  }

  isValid(order) {
    return order.items.length > 0
  }

}

module.exports = OrderManager