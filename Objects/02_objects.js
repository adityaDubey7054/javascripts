// const profile = {
//     countryName :{
//         stateName:{
//             district:{
//                 Area:{
//                     AreaName : "Barhalganj",
//                     pincode : 273402
        
//                 }
//             }
//         }
//     }
// }
// console.log(profile.countryName.stateName.district.Area.pincode);
// console.log(profile.countryName.stateName.district.Area.AreaName);
// const obj1 = {1:"Aditya",2:"Anish"}
// const obj2 = {3:"Gaurav",4:"mukul"}
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
// const obj4 = {...obj1,...obj2};
// console.log(obj4);
// const profile1 = {
//     name : "Aditya Dubey",
    
//     email : "dubeyaditya7054@gmail.com",
//     mobileNo : 1234567890,
//     id: 2115000059
// }
// console.log(Object.keys(profile1));
// console.log(Object.values(profile1));
// console.log(Object.entries(profile1));
// console.log(profile1.hasOwnProperty("Address"));





const collageName = {
    program: "Btech",
    course : "CSE",
    Id :2115000059
}
console.log(collageName.program);
const {program : degree}= collageName;
console.log(degree);

