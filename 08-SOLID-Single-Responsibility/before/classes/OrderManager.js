const Order = require('./Order')
const Interface = require('./helpers/Interface')
const http = require('http')
const { handleResponse, handleError } = require('../helpers')

const IitemAddeable = new Interface("IitemAddeable", [], ["itemId", "description"])

const { URL_API_HOST, URL_API_ORDERS_PATH, PORT } = require('../config')

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

      const orderToSend = JSON.stringify(this.order)

      const options = {
        hostname: URL_API_HOST,
        port: PORT,
        path: URL_API_ORDERS_PATH,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const req = http.request(options, (res) => {
        res.setEncoding('utf8')
        res.on('data', chunk => console.log(`BODY: ${chunk}`) )
        res.on('end', () => console.log('No more data in response.') )
      });
      
      req.on('error', (e) => console.error(`problem with request: ${e.message}`) )
      
      req.write(orderToSend);
      req.end();

    }
  }

  isValid(order) {
    return order.items.length > 0
  }

}

module.exports = OrderManager