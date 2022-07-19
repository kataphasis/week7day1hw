function findWords(dog_string, dog_names){
    for (let name of dog_names) {
        var result = dog_string.includes(name);
    
        if (result == true) {
            return "Matched dog_name"; 
        } else {
            return "No Matches"; }
        }
    };
console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]));

function replaceEvens(arr){
    for (var i = 0; i < arr.length; i += 2) {
        var mySplice = arr.splice(i, 1, "even index");
            
    }
    console.log(arr)
    return arr;
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));

// multiply
function multiply(a, b){
    return a * b
  }

console.log(multiply(4, 5))

// return number as a string
function numberToString(num) {
    return num.toString();
  }
console.log(numberToString(77))