function addNum(a,b){
    let  sum = a+b;
    return sum;
}
let result = addNum(4,6);
console.log(result);
function addNum(a,b,c){
   
    return a+b+c;
}
let result1 = addNum(3,6,9);
console.log(result1);
function loggedIn(username){
    if(username === undefined){
        console.log("please enter your name")
        return;
    }
    return `${username}, just logged in this deevice`;
}
console.log(loggedIn())


//how we called Obejct in function
 const profile = {
    username : "Aditya Dubey",
    age : 22
 }
 function handleObject(anyobject){
    return ` hello Mr.${anyobject.username}, can you please tell you ${anyobject.age}`
 }
 console.log((handleObject(profile)));


//how we take arrays  function 
const myArray = [22,33,56,74,94,78]
function handleArrays(getArrays){
    return getArrays[4];
}
console.log(handleArrays(myArray));


//how we use "Rest" method to get all argument value 
function value(val1,val2,...val){
    //console.log(val1,val2);
    return val;
}
console.log(value(100,300,500,600));

function calculateCartPrice( ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))



