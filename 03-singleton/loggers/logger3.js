function logger3(logger) {
  console.log ('--- LOGGER3 ---')
  console.log (`logger.numMessages → ${logger.numMessages}`)
  logger.message = "Mamie Evans"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  logger.message = "John Mullins"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  console.log (`logger.dateCreation → ${logger.dateCreation}`)
  console.log (`logger.numMessages → ${logger.numMessages}`)
}

module.exports = logger3