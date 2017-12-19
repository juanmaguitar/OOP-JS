function logger1(LogManager) {
  console.log ('--- LOGGER1 ---')
  const logger = new LogManager()
  console.log (`logger.numMessages → ${logger.numMessages}`)
  logger.message = "Agnes Logan"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  logger.message = "Hallie Oliver"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  console.log (`logger.dateCreation → ${logger.dateCreation}`)
  console.log (`logger.numMessages → ${logger.numMessages}`)
}

module.exports = logger1