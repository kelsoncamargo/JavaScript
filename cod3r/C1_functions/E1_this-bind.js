const person = {
  salutation: "Good Morning",
  speak() {
    console.log(this.salutation)
  }
}

person.speak()
const speak = person.speak
speak() // Conflict between paradigms: Functional and OO

const personSpeak = person.speak.bind(person)
personSpeak()