// Immidiately Invoked  Function Expression IIFE
// ()()
let sum = function(x,y){
   
    console.log(x+y);
    
}(6,5);


(function profile(){
    console.log("hello Aditya ");
})();




((num1,num2)=>{
    console.log(num1+num2);
    
})(9,4)