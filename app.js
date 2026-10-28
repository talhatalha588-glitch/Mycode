var computernumber = Math.floor(Math.random() * 20) + 1;
var attempts =0;

function checkguess(){
    var userguess = document.getElementById("guessinput").Value;

    if (userguess == computernumber){
        document.getElementById("result").innerHTML = `Congratulations! You guesses right Number`;
    }
    else if (userguess < computernumber){
        document.getElementById("result").innerHTML = `Too low! Try again.`;
    }
    else {
        document.getElementById("result").innerHTML = `Too high! Try again.`;
    }
    attempts++;
        document.getElementById("attempts").innerHTML = `Number Of Attempts is: ${attempts}`
}