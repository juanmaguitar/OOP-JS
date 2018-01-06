const OrderManager = require('./classes/OrderManager')

const orderMngr = new OrderManager()

orderMngr.createOrder("5hKwm2dbvZ")
orderMngr.addItem({ itemId: 'rVLL2hVJ6HI', description: "Myrtle Cunningham Shirt"})
orderMngr.addItem({ itemId: 'FBkQaUdV0g2i2nn1o', description: "Richard Weber Trousers"})
orderMngr.addItem({ itemId: 'CFfAUvxHtn1qIa', description: "Shawn Perez Jacket"})
// orderMngr.addItem({ name: "juanma" })
orderMngr.sendOrder()
