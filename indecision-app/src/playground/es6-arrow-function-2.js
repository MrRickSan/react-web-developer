// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b
// }

const add = (a, b) => {
//   console.log(arguments)
  return a + b
}

console.log(add(55, 1, 1001))
// this keyword - no longer bound

const user = {
  name: 'Rick',
  cities: ['Recife', 'Olinda', 'Paulista'],
  printPlacesLived () {
    return this.cities.map((city) => `${this.name} has lived in ${city}`)

    // this.cities.forEach((city) => {
    //   console.log(`${this.name} has lived in ${city}`)
    // })
  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())