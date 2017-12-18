const LogManager = require('./classes/LogManager')

console.log ('--- LOGGER1 ---')
const logger1 = new LogManager()
console.log (`logger1.numMessages → ${logger1.numMessages}`)
logger1.message = "Agnes Logan"
console.log (`logger1.lastMessage → ${logger1.lastMessage}`)
logger1.message = "Hallie Oliver"
console.log (`logger1.lastMessage → ${logger1.lastMessage}`)
console.log (`logger1.dateCreation → ${logger1.dateCreation}`)
console.log (`logger1.numMessages → ${logger1.numMessages}`)

module.exports = logger1