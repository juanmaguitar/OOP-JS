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

module.exports = CinemaSession