const LogManager = require('./classes/LogManager')
const logManager = require('./utils/logManager')

console.log(`Starting... 🕐 ${new Date()}`)

setTimeout(function() {
  console.log(`
→ USING CLASSES...
🕐 ${new Date()}
  `)
  require('./loggers/logger1')(LogManager)
  require('./loggers/logger2')(LogManager)
}, 1000)

setTimeout(function() {
  console.log(`
→ USING LITERAL OBJECTS...
🕐 ${new Date()}
  `)
  require('./loggers/logger3')(logManager)
  require('./loggers/logger4')(logManager)
}, 2000)