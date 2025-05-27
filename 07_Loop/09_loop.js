// Using of arr.reduce method 

let num = [1,2,3,4,5,6,7,8,9,10]
// let sum = num.reduce(function(accumulator,currentvalue){
//     return accumulator+currentvalue;
// },0)
let sum = num.reduce((acc,crn)=> acc*crn,1)
// console.log(sum);


const shoppingCart = [
    {
        itemName: "java",
        price: 2999
    },
    {
        itemName: "py",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//  let totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
let  totalPrice = shoppingCart
    .filter((item)=>item.itemName === "py"||item.itemName==="java")
    .reduce((acc,item)=>acc+item.price,0)
 console.log(totalPrice);
 
