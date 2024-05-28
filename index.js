let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "hello " + username;
  
}
//To prompt a inputbox:>>>
// let username = window.prompt("what's Your Name?");
// console.log(username);
//check console for answer>


//to change variables to a different datatype
// let age = window.prompt("how old are you bro?");
// age = Number(age);
// age += 1;
// console.log("happy Birthday bro! you are", age ,"years old.");

