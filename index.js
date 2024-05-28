let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "hello " + username;
  
}

//check console for answer>.....


//To prompt a inputbox:>>>
// let username = window.prompt("what's Your Name?");
// console.log(username);



//to change variables to a different datatype
// let age = window.prompt("how old are you bro?");
// age = Number(age);
// age += 1;
// console.log("happy Birthday bro! you are", age ,"years old.");

//circumference of a circle
//  let pi = 3.14;
//  let radius;
//  let circumference;

//  radius = window.prompt("Enter the radius of a circle:");
//  radius =Number(radius);

//  circumference = 2 * pi * radius;
 
//  console.log("the circumference is", circumference);
