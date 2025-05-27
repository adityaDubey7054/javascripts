// Using of For-In loop 
 let profile = {
    name: "Aditya Dubey",
    ID: "2115000059",
    Mobno: "7054143307",
    Grade: "A"
 }
//  for(const i in profile){
//     console.log(`${i} = ${profile[i]}`);
    
//  }

// for (const key in profile) {
//   console.log(key, ":-", profile[key]);
// }

// const map = new Map()
// map.set('Ad',"Aditya Dubey")
// map.set('An',"Anish Dubey")
// map.set('Sd',"Shivam Dubey")
// map.set('Gt',"Gaurav Tripathi")
// for(const key in map){
//     console.log(key);
    
// }
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}