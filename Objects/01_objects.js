//object literals
const sym =  Symbol();

const profile = {
    name : "Aditya Dubey",
    [sym] : "123",
    email : "dubeyaditya7054@gmail.com",
    mobileNo : 1234567890,
    id: 2115000059
}
console.log(profile.email);
console.log(profile["mobileNo"])// this method used  in every case . it can access each and every variables.

//Object.freeze(profile);// After using this method , you can not update or change the input data of object.
profile.mobileNo = "0987654321"
console.log(profile)



profile.greeting = function(){
    console.log("hello every one");

}
profile.greetingOne = function(){
    console.log(`hello  Mr. ,${this.name},can you please provide your ,${this.email},and, ${this.mobileNo}`)
}

console.log(profile.greeting());
console.log(profile.greetingOne());