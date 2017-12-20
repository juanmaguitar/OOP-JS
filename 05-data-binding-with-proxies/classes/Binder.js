// const proxiedPerson = binder.bindTo(person, 'name', txtName, 'value')

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