let _instance, _dateCreation

class LogManager {
  constructor() {
    if (!_instance) {
      _dateCreation = new Date()
      this.messages = []
      _instance = this
    }
    return _instance
  }
  get dateCreation() { return `🕐 ${_dateCreation}` }
  set message(msg) { 
    console.log(`🗒 added "${msg}" to the log`)
    this.messages.push(msg) 
  }
  get lastMessage() { return this.messages[this.messages.length-1] }
  get numMessages() { return this.messages.length }
}

module.exports = LogManager