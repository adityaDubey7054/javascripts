// Using of filter 
const  num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.filter((num)=>(num>5))
// console.log(newNum);


// const newNum1 = num.filter((num)=>{
//     return num>4
//})
// console.log((newNum1))
// whenever you use this ()=>{} arrow function then you always write return keyword in curly braces
//Return keyword is not required for this ()=>() 




// get value by using for-each  loop 
//  const newNum2 =[] 
//  num.forEach((num)=>{
//     if(num>4){
//        newNum2.push(num)
//     }
//  })
//  console.log(newNum2);


// Filter method use in large file

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 let  data = books.filter((book)=>book.edition>2000)
 data = books.filter((book)=>(book.genre==="History"))
 data = books.filter((book)=>{
    return book.genre === "Non-Fiction" && book.publish >1985
 })
  console.log(data);
  
 



