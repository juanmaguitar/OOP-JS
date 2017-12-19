function logger4(logger) {
  console.log ('--- LOGGER4 ---')
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  console.log (`logger.numMessages → ${logger.numMessages}`)
  logger.message = "Adelaide Barnett"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  logger.message = "Matilda Nichols"
  console.log (`logger.lastMessage → ${logger.lastMessage}`)
  console.log (`logger.numMessages → ${logger.numMessages}`)
  console.log (`logger.dateCreation → ${logger.dateCreation}`)
}

module.exports = logger4