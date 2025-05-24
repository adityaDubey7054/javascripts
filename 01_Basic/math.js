const number = 100;
console.log(typeof number)



const newNum =  new Number(100) ;
console.log(newNum);



const secondNum = 200;
console.log(secondNum.toFixed(2))


const thirdNum = 1000000000;
console.log(thirdNum.toLocaleString('en-In'))


const fourthNum = 2345.23423
console.log(fourthNum.toPrecision(5))

//-----------------Math-------------------------------------------
console.log(Math.abs(-4));
console.log(Math.floor(4.678))
console.log(Math.max(4,7,1,3,9))
console.log(Math.min(3,1,2,9,5))
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)




const min = 10;
const max = 30;
console.log(Math.floor(Math.random()*(max-min+1))+min)