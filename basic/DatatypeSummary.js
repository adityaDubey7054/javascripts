//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// Stsck and Heap in Memory
//Stsck used in primitive datatype 
let name = "Aditya"
let nickname = name;
nickname = "Anish"
console.log(name)
console.log(nickname)
// Heap is used in Non Primitive datatype 
let profile={
    name : "Aditya",
    id : 12345


}
let Anotherprofile = profile
Anotherprofile.id = 54321
console.log(profile.id)
console.log(Anotherprofile.id)