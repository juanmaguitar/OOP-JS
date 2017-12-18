const SoftwareHouse = require('./classes/SoftwareCompany')

const startup = new SoftwareHouse()

/* --- ME --- */

const me = { 
  name: "juanma",
  language: "javascript",
  writeCode: function() { return `I code ${this.language}`} 
}

try { startup.hire(me) }
catch(e) { console.log(e.message) }

/* --- MANUEL --- */

const manuel = { 
  name: "manuel",
  writeCode: function() { return `I code ${this.language}`} 
}

try { startup.hire(manuel) }
catch(e) { console.log(e.message) }

/* --- DOG --- */

const dog = { 
  name: "DOG",
  barf: function() { return `I barf`} 
}

try { startup.hire(dog) }
catch(e) { console.log(e.message) }
