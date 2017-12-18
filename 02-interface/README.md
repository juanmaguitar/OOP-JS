# Interface implementation

This example demonstrate how can we implement an `interface` to check if the object needed by another object follows a specific structure (it has certain methods and properties → [_duck typing_](https://stackoverflow.com/questions/3379529/duck-typing-in-javascript#3379721))

Once we have our `Interface` class created we can create interfaces that can be used to check if the objects follow that interface (if not, an error will be thrown)

**`SoftwareCompany.js`**
```
const Interface = require('./Interface')
const IHireable = new Interface("IHireable", ["writeCode"], ["name", "language"])

class SoftwareHouse {
  constructor() {
    this.employees = []
  }
  hire(dev) {
    IHireable.isImplementedBy(dev)
    this.employees.push(dev)
    console.log(`${dev.name} who says "${dev.writeCode()}" hired!`)
  }
}

module.exports = SoftwareHouse
```

The `SoftwareCompany` class requires objects (representing potential employees) with the method `writeCode` and the properties `name` & `language`
If an Object that doesn't have any of these things is passed, an error will be thrown

**`index.js`**
```
const SoftwareHouse = require('./classes/SoftwareCompany')

const startup = new SoftwareHouse()

const me = { 
  name: "juanma",
  language: "javascript",
  writeCode: function() { return `I code ${this.language}`} 
}

const manuel = { 
  name: "manuel",
  writeCode: function() { return `I code ${this.language}`} 
}

const dog = { 
  name: "DOG",
  barf: function() { return `I barf`} 
}

try { startup.hire(me) }
catch(e) { console.log(e.message) }

try { startup.hire(manuel) }
catch(e) { console.log(e.message) }


try { startup.hire(dog) }
catch(e) { console.log(e.message) }

```

The provided example (`index.js`) shows in the console...

```
juanma who says "I code javascript" hired!
The object does not implement the interface IHireable. Property language not found.
The object does not implement the interface IHireable. Method writeCode not found.
```


# Run the demo

To run the demo just do

```
npm start
```