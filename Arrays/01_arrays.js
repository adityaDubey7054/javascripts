 let myArr = [0,1,2,3,4,5,6,7,8,9];
myArr.push(10)
myArr.pop(5)

console.log(myArr)




myArr.unshift(11);
console.log(myArr)

myArr.shift()
console.log(myArr)
//// convert arrays datatype to String datatype
let newArr = myArr.join()
console.log(myArr)
console.log(newArr);
console.log(typeof newArr)
console.log("A ", myArr);
let newArr1 = myArr.slice(1,4);
console.log("B ", myArr);
console.log(newArr1)


let newArr2 = myArr.splice(1,4)
console.log("C ",myArr)
console.log(newArr2);
// Note - Slice do not manipulate original Array
//         while Splice manipulate Original Arrays
