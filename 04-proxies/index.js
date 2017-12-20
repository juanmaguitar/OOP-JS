const Person = require('./classes/Person')

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

const name = proxiedPerson.name
proxiedPerson.name = 'Mario'
console.log(proxiedPerson.name)