// alert window
//window.alert("OMG kek");

//Declare variable, unique, back-ticks.
let age = 34;
let fullName;

console.log(` You are ${age} years old}`)


document.getElementById("MySubmit").onclick = function(){
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let fullName = firstName + " " + lastName;
    document.getElementById("Header").textContent = `Hello, ${fullName}!`
}


//Function to add
function add(a, b){
    return a + b
}

//Func to subtract
function subtract(a, b){
    return a - b
}

//Func to multiply
function multiply(a, b){
    return a * b
}

//func to divide
function divide(a, b){
    return a / b
}


