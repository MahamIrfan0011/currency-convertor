import inquirer from "inquirer";
const currency = {
    // USD: { symbol: "USD", rate: 1 },
    // PKR: { symbol: "PKR", rate: 277.54 },
    // INR: { symbol: "INR", rate: 83.30 },
    // JPY: { symbol: "JPY", rate: 151.61 },
    // SAR: { symbol: "SAR", rate: 3.75 },
    // CAD: { symbol: "CAD", rate: 1.36 }
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    JPY: 151.61,
    SAR: 3.75,
    CAD: 1.36
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'JPY', 'SAR']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'JPY', 'SAR']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let roundedConvertedAmount = Math.round(convertedAmount * 100) / 100;
console.log(roundedConvertedAmount);
