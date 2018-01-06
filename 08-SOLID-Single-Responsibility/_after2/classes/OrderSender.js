const request = require('request')
const { URL_API_HOST, URL_API_ORDERS_PATH, PORT } = require('../config')
const { handleResponse, handleError } = require('../helpers')

class OrderSender {

  send(order) {
    
    const options = {
      baseUrl: 'http://' + URL_API_HOST + ':' + PORT,
      uri: URL_API_ORDERS_PATH,
      method: 'POST',
      json: order
    };
    
    request(options, (err, response, body) => {
      if (err) handleError(err)
      handleResponse(body);
    })
  }

}

module.exports = OrderSender