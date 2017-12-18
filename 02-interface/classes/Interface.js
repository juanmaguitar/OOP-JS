const ERROR_METHODS_AS_STRINGS = 'Interface constructor expects method names to be passed in as a string'
const ERROR_PROPERTIES_AS_STRINGS = 'Interface constructor expects property names to be passed in as a string'
const ERROR_NO_OBJECT = 'No Object to check'

const ERROR_METHOD_NOT_IMPLEMENTED = (interfaceName, method) => `The object does not implement the interface ${interfaceName}. Method ${method} not found.`
const ERROR_PROPERTY_NOT_IMPLEMENTED = (interfaceName, property) => `The object does not implement the interface ${interfaceName}. Property ${property} not found.`

const isString = text => typeof text === 'string'
const isFunction = fn => typeof fn === 'function'

class Interface {
  constructor(name, methods=[], properties=[]) {
    this.name = name

    if ( methods.every(isString) ) this.methods = methods
    else throw new Error(ERROR_METHODS_AS_STRINGS)

    if ( properties.every(isString) ) this.properties = properties
    else throw new Error(ERROR_PROPERTIES_AS_STRINGS)
  }

  isImplementedBy(obj) {
    if (obj) {
      this.methods.forEach( method => {
        if ( !obj[method] || !isFunction(obj[method]) ) throw new Error(ERROR_METHOD_NOT_IMPLEMENTED(this.name, method))
      })
      this.properties.forEach( property => {
        if ( !obj[property] || isFunction(obj[property]) ) throw new Error(ERROR_PROPERTY_NOT_IMPLEMENTED(this.name, property))
      })
    }
    else throw new Error(ERROR_NO_OBJECT)
  }
}

module.exports = Interface