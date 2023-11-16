let rdnum = Math.random() * 10 + 1
 let roundeed =Math.round(rdnum)
console.log(roundeed);

const readline = require("readline")
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
rl.question("enter a number\n", function (number) {
    userInput = number;
    console.log(userInput);
    if (roundeed == userInput){
        console.log('Good Work');
    }else{
        console.log('Not matched');
    }
    // close input stream
    rl.close();
  }); 