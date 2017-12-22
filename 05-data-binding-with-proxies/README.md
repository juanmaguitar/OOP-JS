# Binding Data with Proxies

This example demonstrate how to use [_Proxy_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to bind data between objects

With the class `Binder` we can use the method `bindTo` to get a proxied object that will bind values of properties in different objects

```javascript
class Binder {
  bindTo( dataSourceObj, dataSourceProperty, dataTargetObj, dataTargetProperty) {
    let bindHandler = {
      set: (target, property, newValue) => {
        if (property == dataSourceProperty) {
          target[dataSourceProperty] = newValue
          dataTargetObj[dataTargetProperty] = newValue
        }
      }
    }
    return new Proxy(dataSourceObj, bindHandler)
  }
}
```

# Run the demo

To run the demo just load `index.html` in the browser. After 3s the value of the input will be updated as a consequence of updating `proxiedPerson.name = 'Mario'`

After this you can try and update `proxiedPerson.name` w/ different values from the console (you'll see how the value of the input is automatically updated too)