
- Is JavaScript a (true) OOP language?
- What does make a programming language an Object-Oriented Programming language?

## What is OOP?

[The OOP paradigm is not based on a formal standard specification](https://medium.com/@andrea.chiarelli/is-javascript-a-true-oop-language-c87c5b48bdf0#a908). There is not a technical document that defines what OOP is and what it is not.

A widely accepted definition to classify a programming language as Object
Oriented is based on two requirements:

- its capability to model a problem through objects
- its support of a few principles that grant modularity and code reuse

In order to satisfy the _**first requirement**_, a language must enable a developer to describe the reality using objects and to define relationships among objects such as the following:

- **Association**: This is the object’s capability to refer another independent object
- **Aggregation**: This is the object’s capability to embed one or more independent objects
- **Composition**: This is the object’s capability to embed one or more dependent objects

Commonly, the _**second requirement**_ is satisfied if a language supports the following principles:

- **Encapsulation**: This is the capability to concentrate into a single entity data and code that manipulates it, hiding its internal details
- **Inheritance**: This is the mechanism by which an object acquires some or all features from one or more other objects
- **Polymorphism**: This is the capability to process objects differently based on their data type or structure

Meeting these requirements is what usually allows us to classify a language as Object Oriented.

## Javascript and OOP

### Capability to model a problem through objects

#### Association

> The object’s capability to refer another independent object

```javascript
const elvisPresley = {
 firstName: "Elvis Aaron",
 lastName: "Presley",
 alias: "King of Rock and Roll"
};

const tomParker = {
 firstName: "Thomas Andrew",
 lastName: "Parker",
 alias: "Colonel Tom Parker"
};

elvisPresley.manager = tomParker; //Association
```

#### Aggregation

> The object’s capability to embed one or more independent objects

```javascript
const revolver = {
  title: 'Revolver',
  released: '5 August 1966'
};

const abbeyRoad = {
  title: 'Abbey Road',
  released: '26 September 1969'
};

const theBeatles = {
  members: ['John','Paul','George','Ringo'],
  albums: [revolver, abbeyRoad] // Aggregation
};
```

#### Composition

> This is the object’s capability to embed one or more dependent objects

```javascript

const studio = {
  name: 'Abbey Road Studios',
  established: '1931',
  address: { //Composition
    street: "3 Abbey Road",
    city: "London",
    country: "United Kingdom"
  }
}
```

### Principles that grant modularity and code reuse

#### Encapsulation

> Capability to concentrate into a single entity data (properties) and code that manipulates it (methods), hiding its internal details

There are several [tecniques](http://tatiyants.com/groking-javascript-encapsulation/) in JS to achieve this [[1](https://medium.com/@andrea.chiarelli/is-javascript-a-true-oop-language-c87c5b48bdf0#8087)]

```javascript

function MusicLoverProfile(name) {
  const favoriteAlbums = []
  this.name = name

  this.getFavoriteAlbums = function() {
    return favoriteAlbums
  }
  
  this.addFavoriteAlbums = function(album) {
    // ... check if it's a valid album (interface)
    favoriteAlbums.push(album)
  }

  this.sortFavoriteAlbumsByYear = function() {
    return [...favoriteAlbums].sort( (a, b) => a.year - b.year )
  }

  this.sortFavoriteAlbumsByAlbumTitle = function() {
    return [...favoriteAlbums].sort( (a, b) => a.title > b.title )
  }
}

const me = new MusicLoverProfile('juanma')

me.addFavoriteAlbums({ title: 'Abbey Road', band: 'The Beatles', year: 1969 })
me.addFavoriteAlbums({ title: 'Led Zeppelin IV', band: 'Led Zeppelin', year: 1971 })
me.addFavoriteAlbums({ title: 'Are You Experienced', band: 'The Jimi Hendrix Experience', year: 1967 })

me.getFavoriteAlbums()
[
  { title: "Abbey Road", band: "The Beatles", year: 1969 }
  { title: "Led Zeppelin IV", band: "Led Zeppelin", year: 1971 },
  { title: "Are You Experienced", band: "The Jimi Hendrix Experience", year: 1967}
]

me.sortFavoriteAlbumsByYear()
[
  { title: "Are You Experienced", band: "The Jimi Hendrix Experience", year: 1967},
  { title: "Abbey Road", band: "The Beatles", year: 1969 },
  { title: "Led Zeppelin IV", band: "Led Zeppelin", year: 1971 }
]

me.sortFavoriteAlbumsByAlbumTitle()
[
  { title: "Abbey Road", band: "The Beatles", year: 1969 },
  { title: "Are You Experienced", band: "The Jimi Hendrix Experience", year: 1967},
  { title: "Led Zeppelin IV", band: "Led Zeppelin", year: 1971 }
]

me.getFavoriteAlbums()
[
  { title: "Abbey Road", band: "The Beatles", year: 1969 }
  { title: "Led Zeppelin IV", band: "Led Zeppelin", year: 1971 },
  { title: "Are You Experienced", band: "The Jimi Hendrix Experience", year: 1967}
]
```

This is just an example, with the problem that the private data (favorite albums) is shared among all the instances. To solve this (having independent private data per instance) we can implement a more elaborated solution like [this one](https://twitter.com/juanmaguitar/status/942770364240793600)

#### Inheritance

> Mechanism by which an object acquires some or all features from one or more other objects

**Inheritance** is supported by JavaScript in its basic level through the so-called [_Prototypal Inheritance_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance). 

Even if some developer may consider it a bit rudimentary, JavaScript [_inheritance mechanism_](http://2ality.blogspot.it/2010/12/javascripts-prototypal-inheritance.html) is fully effective and allows to get the same result as largely recognized OOP languages.

```javascript
class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Developer extends Person {
  constructor(name, surname, knownLanguage) {
    super(name, surname)
    this.knownLanguage = knownLanguage
  }
  displayCompetency() {
    console.log(`${super.getFullName()} knows ${this.knownLanguage}`)
  }
}

const me = new Developer('juanma','garrido','javascript')
me.displayCompetency() //→ juanma garrido knows javascript
```

#### Polymorphism

> Capability to process objects differently based on their data type or structure

The ability to handle multiple data types uniformly

The most common ways to support polymorphism with a programming language include:

- Methods that take parameters with different data types (_overloading_)
- Management of generic types, not know un advance (_parametric polymorphism_)
- Expressions whose type can be represented by a class and classes derived from it (_subtype polymorphism_ or _inclusion polymorphism_)

##### Overloading

In most languages, _overloading_ is what happens when you take two methods with the same name but different signatures (accept different types of data)

```javascript
function sum(a,b) {
  return parseInt(a) + parseInt(b)
}
sum(3,4) // → 7
sum("3","4") // → 7
```

Overloading can also be expressed through methods with different numbers of arguments

```javascript
function sum(x=0, y=0, z=0) {
  return z+y+z
}
sum(3) // → 3
sum(3,4) // → 7
sum(3,4,3) // → 10
```

##### Parametric Polymorphism

_Parametric Polymorphism_ allows a method to work on parameters on any type

Due to its dynamic data typing, Javascript supports parametric polymorphism implicitly

```javascript
function Stack() {
  this.stack = []
  this.pop = function() { 
    return this.stack.pop()
  }
  this.push = function(item) { // the type is set when a value is assigned to it
    return this.stack.push(item)
  }
}

const stack = new Stack()
stack.push(2)
stack.push("juanma")
stack.push(true)
stack.pop() //→ true
stack.pop() //→ "juanma"
```

##### Subtype Polymorphism

Wherever i can use an object of a specific type, here i can use a type derived from it

```javascript
class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

class Developer extends Person {
  constructor(name, surname, knownLanguage) {
    super(name, surname)
    this.knownLanguage = knownLanguage
  }
}

function writeFullName(person) {
  console.log(`${person.name} ${person.surname}`)
}

const me = new Developer('juanma','garrido','javascript')
const jimi = new Person('jimi','hendrix')

writeFullName(me) //→ juanma garrido
writeFullName(jimi) //→ jimi hendrix

```

## Javascript OOP vs Classical OOP

### Classical Object-Oriented Programming

**Classical Object-Oriented Programming** has two types of abstractions → Classes and Objects

An _object_ is an abstraction of a real-world entity while a _class_ is an abstraction of an object or another class

Object in classical OOP languages can only be created by instantiating classes

### Javascript

**Javascript** has jut one type of abstraction → the Objects

An object can be created...
- directly as an abstraction of a real-world entity or 
- as an abstraction of another object (which is called _prototype_)

That's why Javascript is sometimes called _Prototypal Object-Oriented Programming_

## Resources

- https://medium.com/@andrea.chiarelli/is-javascript-a-true-oop-language-c87c5b48bdf0