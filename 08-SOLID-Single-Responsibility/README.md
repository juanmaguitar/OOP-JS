# SOLID: Single Responsibility Principle

The **Single Responsibility Principle** says

> A class should have only one reason to change

This means: the only reason for which a class or object (or function) should be changed is because it has changed its responsibility
In other words, the actions assigned to an object must be consistent with the unique responsibility that was given 

## Before 

In our example, our `Order` class is in charge of creating _order_ objects

**`before/classes/Order.js`**
```javascript
class Order {
  constructor(customerId) {
    this.id =  customerId;
    this.dateTime = +new Date();
    this.items = [];
  }
}
```

And our `OrderManager` class is in charge of managing the _order_, so its actions should be related to the order life cycle.

**`before/classes/OrderManager.js`**
```javascript
class OrderManager {

  createOrder(customerId) {
    this.order = new Order(customerId)
  }

  addItem(item) {
    IAddeable.isImplementedBy(item)
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
```

However, the `sendOrder()` method includes a responsibility that is not closely related to order management → the details of how to send the order.

So if, for example, we would want to use the library [`request`](https://www.npmjs.com/package/request) to do the POST in another way, we should change this class, and this shouldn't be a reason to change this class, because this shouldn't be its responsibility

## After

So, in order to apply the Single Responsibility Principle, the task of sending the order cam be assigned to another component...

**`after/classes/OrderSender.js`**
```javascript
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
```

**`before/classes/OrderManager.js`**
```javascript
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
```

Now, the responsibility (the details) of sending the order is in `OrderSender` so we can change the way of sending the order without touching the `OrderManager` class

## After2

**`_after2/classes/OrderSender.js`**
```javascript
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
```

We can also add to the `Order` class the responsibility of assigning a different id to every order

**`before/classes/Order.js`**
```javascript
class Order {
  constructor() {
    this.id =  uuidv1();
    this.dateTime = +new Date();
    this.items = [];
  }
}
````
