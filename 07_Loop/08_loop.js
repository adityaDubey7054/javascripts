let num = [1,2,3,4,5,6,7,8,9,10]
// let newNum = num.map((num)=>num*12)
//USing Chainoing method
let newNum1 = num
      .map((num)=> num+5)
      .map((num)=> num*10)
      .map((num)=>num-10)
      .map((num)=> num+100)
      .filter((num)=> num>=150)
console.log(newNum1);
