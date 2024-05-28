let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "hello " + username;
  
}
//To prompt a inputbox:>>>

// let username = window.prompt("what's Your Name?");
// console.log(username);

//check console for answer>?