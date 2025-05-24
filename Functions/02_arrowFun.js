// Using  "this" method 
// const user = {
//     username: "Aditya Dubey",
//     Grade: "A",
    
//     welcomeMesg :function(){
//          console.log(`hello Mr.${this.username}, You are passing with Grade ${this.Grade} `);
//     }

// }
// user.welcomeMesg();








// const profile = {
//     name: "Anish Dubey",
//     city: "Noida",

//     Route:function(){
//        console.log(`hello Mr.${this.name}, You are going to ${this.city}`);
//     }
// }
// //profile.Route();
// // console.log(this);
// profile.name = "Aditya Dubey"
// profile.Route()

//  const username =function(){
//     let username = "Aditya Dubey";
//     console.log(`hi mr. ${this.username}`)
   

//  }
//  username();

// ARROW FUNCTION    ()=>{}
// let mul = (num1,num2) => {
//     return num1*num2;
// }   
// console.log(sum(45,67));



//  let sum = (num1,num2) => (num1+num2);
//    console.log(sum(7,9));
 


 let sum = (num1,num2) => ({username:"Aditya Dubey"});
    console.log(sum());

 
