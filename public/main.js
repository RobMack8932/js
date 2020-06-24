// Name and coffee amount

const fullName = 'Rob Mack'
const numberOfCupsOfCoffee = 2
console.log(
  `Hey my name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee a day!`
)
// User name
const userName = window.prompt('What is your name?')
console.log(`Hey there ${userName}`)
// Input Numbers
const firstOperand = window.prompt('Give me a number any number!')
console.log(`Okay, ${firstOperand} it is!`)
parseFloat(firstOperand)
const secondOperand = window.prompt('I lied, one more..!')
console.log(`Okay, ${secondOperand} it is!`)
parseFloat(secondOperand)
//Math
const sum = +firstOperand + +secondOperand
console.log(
  `If you add ${firstOperand} and ${secondOperand} you will get ${sum}`
)
//subtract
const difference = firstOperand - secondOperand
console.log(
  `If you subtract ${firstOperand} by ${secondOperand} you will get ${difference}`
)
//multiply
const product = firstOperand * secondOperand
console.log(
  `If you multiply ${firstOperand} and ${secondOperand} you will get ${product}`
)
//divide
const quotient = firstOperand / secondOperand
console.log(
  `If you divide ${firstOperand} by ${secondOperand} you will get ${quotient}`
)
//arrays

const numbers = [
  61,
  41,
  65,
  21,
  44,
  98,
  20,
  32,
  54,
  49,
  84,
  74,
  16,
  59,
  5,
  12,
  44,
  31,
  52,
  78,
  66,
  10,
  48,
  17,
  33,
  39,
  20,
  9,
  61,
  66,
  56,
  36,
  25,
  75,
  69,
  77,
  2,
  7,
  87,
  63,
  15,
  66,
  37,
  81,
  33,
  74,
  71,
  52,
  89,
  58,
  27,
  93,
  80,
  95,
  16,
  50,
  72,
  18,
  77,
  88,
  34,
  20,
  56,
  18,
  66,
  43,
  34,
  31,
  11,
  77,
  8,
  31,
  100,
  12,
  83,
  96,
  21,
  31,
  17,
  24,
  77,
  78,
  70,
  85,
  7,
  59,
  5,
  12,
  76,
  5,
  21,
  73,
  3,
  38,
  28,
  70,
  68,
  90,
  34,
  42,
]
const smallest = numbers[0]
console.log(smallest)
