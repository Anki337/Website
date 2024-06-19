const countLabel = document.getElementById("countLabel")
let counter = 0;

increaseBtn.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}
decreaseBtn.onclick = function(){
    counter--;
    countLabel.textContent = counter;
}
resetBtn.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}

let palindrome = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2) ).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2) ).toLowerCase();
     let flip = end.split("").reverse().join("");
     return (start === flip)
}

console.log(palindrome('radar')) // true
console.log(palindrome('racecar')) // true
console.log(palindrome('window')) // false