// Using of for-Each loop in array


 const cricketer = ["Virat","Rohit","Dhoni","Gill","Shreyas"]
//  cricketer.forEach(function (name,index){
//     console.log(index,":-",name);
    

//  })


// Using For-Each loop in Arrow function
cricketer.forEach((item)=>{
   console.log(item);
   
})
 function printme(item){
   console.log(item);
   
 }
cricketer.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
 

