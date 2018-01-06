const Order = require('./Order')

const discounters = [];
  
class OrderManager() {

  createOrder(customerId) {
    this.order = new Order(customerId)
  }

  addItem(item) {
    this.order.items.push(item)
    this.order.totalAmount = this.order.totalAmount + item.price
  }

  sendOrder() {
    if (this.isValid(this.order)) {
      this.applyDiscount(this.order)
      var orderSender = new OrderSender()
      orderSender.send(order)
    }
    else {
      handleError({ message: "Not valid order!" })
    }
  }

  isValid(order) {
    return order.items.length > 0
  }

  registerDiscounter(discounter) {
    discounters.push(discounter)
  }

  applyDiscount(order) {
    discounters.every( discount => {
      if (discount.isApplicable(order)) {
        discount.apply(order)
        return false
      }
      return true
    })
  } 
}

module.exports = OrderManager