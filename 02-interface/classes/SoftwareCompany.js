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