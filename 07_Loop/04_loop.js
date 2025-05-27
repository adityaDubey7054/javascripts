// Using of For-of loop
//  let arr = ["Aditya","Anish","shivam","Gaurav","Mukul"]
//  for (const i of arr) {
//     console.log(i)
    
    
 //}
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }



// Using for-of loop in Object
 let profile = {
    name: "Aditya Dubey",
    ID: "2115000059",
    Mobno: "7054143307",
    Grade: "A"
 }
 for(const [key,val] of Object.entries(profile)){
    console.log(key,":-",val);
    
 }


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

//  for(const [key, value] of Object.entries(myObject)) {
//      console.log(key, ':-', value);
    
//  }


// Using For-of loop on Map 
const map = new Map()
map.set('Ad',"Aditya Dubey")
map.set('An',"Anish Dubey")
map.set('Sd',"Shivam Dubey")
map.set('Gt',"Gaurav Tripathi")
//console.log(map);
for (const key of map) {
    console.log(key);
}
