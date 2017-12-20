# Proxies

This example demonstrate a the use of [_Proxy_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

By attaching a _handler_ to the proxy we can intercept (hook, trap) any interaction with the data and do more things

```
const handler = {
  get(target, propertyName) {
    console.log(`🗒 Getting property "${propertyName}"`)
    return target[propertyName]
  },
  set(target, propertyName, value) {
    console.log(`💾 Assigning value "${value}" to property "${propertyName}"`)
    target[propertyName] = value
  }
}
const person = new Person('John', 'Smith')
const proxiedPerson = new Proxy(person, handler)
```

# Run the demo

To run the demo just do

```
npm start
```