// here we practice basic loop concept
// let  n=3;
//  for(let i =1;i<=10;i++){
//     console.log(`${i} * ${n} = `+ i*n);
//  }


// //  Using Nested loop 
// for(let i = 1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = `+i*j);
        
//     }
// }



// print Star pattern using nested loop
// let n=5
// for(let i=1;i<=n;i++){
//     let row = ""
//     for(j=1;j<=i;j++){
//         row+="*"
//     }
//     console.log(row);
// }

// loop apply on array
//  const name = ["Aditya","Anish","Sunderam","Shivam","Satyam"]
//  for(let i =0;i<name.length;i++){
//     console.log(name[i]);
    
//  }


//Break use 
// const num = [1,3,5,7,9,2,6,8]
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
        
//         break;
        
//     }
//     console.log(num[i]);
    
    

// }


// Continue use 
const num = [1,3,5,7,9,2,6,8,11]
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        // console.log(num[i]);
        continue;
        
        
    }
    console.log(num[i]);
    
    

}