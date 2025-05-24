// Practice and Revision Date And Time Question  by W3  question
/*
  1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
let  date = new Date()
let day = date.getDay();
let weekdays = ["Sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
console.log("Today Day is :"+ weekdays[day]);
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let period = hours>=12 ? "PM" : "AM";
hours = hours%12 ? hours : 12;
 minutes = minutes<10 ? "0"+minutes : minutes;
 second = second<10 ? "0"+second : second;
 console.log(`Current time is : ${hours}${period} : ${minutes} : ${second} `)


 /*
    Get Current Date in Various Formats

    Write a JavaScript program to get the current date.  
    Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleTimeString());

