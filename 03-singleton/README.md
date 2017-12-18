# Singleton

This example demonstrate a practical example of using the _Singleton_ pattern

Although it seems [there are only a few acceptable cases](https://stackoverflow.com/questions/228164/on-design-patterns-when-to-use-the-singleton) for using a Singleton pattern, a _Logging Manager_ can be one of them

**`LogManager.js`**
```
let _instance, _dateCreation

class LogManager {
  constructor() {
    if (!_instance) {
      _dateCreation = new Date()
      this.messages = []
      _instance = this
    }
    return _instance
  }
  get dateCreation() { return _dateCreation }
  set message(msg) { this.messages.push(msg) }
  get lastMessage() { return this.messages[this.messages.length-1] }
  get numMessages() { return this.messages.length }
}

module.exports = LogManager
```

With this implementation of the class we assure that every instance of it point to the same object

The execution of the demo returns 

```
--- LOGGER1 ---
logger1.numMessages → 0
logger1.lastMessage → Agnes Logan
logger1.lastMessage → Hallie Oliver
logger1.dateCreation → Tue Dec 19 2017 00:46:51 GMT+0100 (CET)
logger1.numMessages → 2
--- LOGGER2 ---
logger2.lastMessage → Hallie Oliver
logger2.numMessages → 2
logger2.lastMessage → Adelaide Barnett
logger2.lastMessage → Matilda Nichols
** logger1.numMessages → 4
logger2.numMessages → 4
logger2.dateCreation → Tue Dec 19 2017 00:46:51 GMT+0100 (CET)
```

# Run the demo

To run the demo just do

```
npm start
```