const LogManager = require('./classes/LogManager')
const logger1 = require('./logger1')

console.log ('--- LOGGER2 ---')
const logger2 = new LogManager()
console.log (`logger2.lastMessage → ${logger2.lastMessage}`)
console.log (`logger2.numMessages → ${logger2.numMessages}`)
logger2.message = "Adelaide Barnett"
console.log (`logger2.lastMessage → ${logger2.lastMessage}`)
logger2.message = "Matilda Nichols"
console.log (`logger2.lastMessage → ${logger2.lastMessage}`)
console.log (`** logger1.numMessages → ${logger1.numMessages}`)
console.log (`logger2.numMessages → ${logger2.numMessages}`)
console.log (`logger2.dateCreation → ${logger2.dateCreation}`)

module.exports = logger2