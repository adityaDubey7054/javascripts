const oG = ["virat","Rohit","ravindra","Dhoni"]
const genz = ["Gill","yashavi","abhishek","rajat"]
//Concat Method
let ipl = oG.concat(genz);
console.log(ipl);
//Spread Method
  let ipl1 = [...oG,...genz]
  console.log(ipl1)
let team =["Virat","Rohit",["mandhana","jamomah","dipti"],"gill",["rajat","samson","reddy",["mayank","shashank"]]]
let indianTeam = team.flat(Infinity);
console.log(indianTeam);
const a = 11
const b = 12
const c = 13
const d = 14
console.log(Array.of(a,b,c,d));
console.log(Array.from(d));

