const CinemaSession = require('./js/classes/CinemaSession')

/* morning Session */
const morningSession = new CinemaSession(3)

morningSession.placePerson("juanma")
morningSession.placePerson("paco")
morningSession.placePerson("antonio")

console.log(`--- MORNING SESSION (maxSize=${morningSession.maxSize})--- `)
console.log(`occupiedSeats → ${morningSession.occupiedSeats}`)
console.log(`freeSeats → ${morningSession.freeSeats}`)
console.log(`isSoldOut → ${morningSession.isSoldOut}`)

/* eveningSession */
const eveningSession = new CinemaSession()

eveningSession.placePerson("julian")
eveningSession.placePerson("ana")
eveningSession.placePerson("david")

console.log(`--- EVENING SESSION (maxSize=${eveningSession.maxSize})--- `)
console.log(`occupiedSeats → ${eveningSession.occupiedSeats}`)
console.log(`freeSeats → ${eveningSession.freeSeats}`)
console.log(`isSoldOut → ${eveningSession.isSoldOut}`)
