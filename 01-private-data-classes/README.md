# Privata Data in ES2015 Classes

This example demonstrate how can we use [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) to create a set of private objects indexed by every instance

With this pattern we can have _private data_ per instance that cannot be accesed from the outside, but can be accesed from the prototype methods

The use of `WeakMap` will provoke the removal of the element in the list if the instance is removed

Note also the convenience of using very similar methods `_(this).` &  `this.` to access either private or public data

```
'use strict'
const priv = new WeakMap();
const _ = instance => priv.get(instance)

class CinemaSession {
  constructor(maxSize=10) {
    const privateData = { seats: [] }
    priv.set(this, privateData)
    this.maxSize = maxSize
  }
  
  placePerson(person) { _(this).seats.push(person) }

  get occupiedSeats() { return _(this).seats.length }
  get freeSeats() { return this.maxSize - _(this).seats.length }
  get isSoldOut() { return _(this).seats.length >= this.maxSize }
}
```

# Run the demo

To run the demo just do

```
npm start
```

There's also a [demo online](https://codepen.io/juanmaguitar/project/editor/ZOVmEO)