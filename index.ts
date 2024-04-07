#!/usr/bin/env node

import inquirer from "inquirer";


const currency :any ={


     USD: 1,
     PKR: 277.54,
     INR: 83.30,
     JPY: 151.61,
     SAR: 3.75,
     CAD: 1.36
}
let userAnswer = await inquirer.prompt([{

    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ['USD','PKR','INR','JPY','SAR']

},
{
   name: "to",
   message: "Enter to currency",
   type: "list",
   choices: ['USD','PKR','INR','JPY','SAR']
    
},
{
    name: "amount",
    message: "Enter your amount",
    type: "number"
}
]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount*toAmount


 let roundedConvertedAmount = Math.round(convertedAmount * 100) / 100;
 console.log(roundedConvertedAmount)
 