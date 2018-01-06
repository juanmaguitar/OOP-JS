const http = require('http')
const { URL_API_HOST, URL_API_ORDERS_PATH, PORT } = require('../config')

class OrderSender {

  send(order) {
    const orderToSend = JSON.stringify(order)

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

module.exports = OrderSender