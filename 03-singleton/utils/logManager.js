const logManager = {
  messages: [],
  dateCreation: `🕐 ${new Date()}`,
  set message(msg) { 
    console.log(`🗒 added "${msg}" to the log`)
    this.messages.push(msg) 
  },
  get lastMessage() { return this.messages[this.messages.length-1] },
  get numMessages() { return this.messages.length }
}

module.exports = logManager