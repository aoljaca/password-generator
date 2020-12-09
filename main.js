const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const uppercase = uppercaseEl.checked
    const lowercase = lowercaseEl.checked
    const numbers = numbersEl.checked
    const symbols = symbolsEl.checked
    document.getElementById('result').innerHTML = 
    generatePassword(length, uppercase, lowercase, numbers, symbols)
})

function generatePassword(length, upper, lower, number, symbol) {
    let password = ''
    let ref = ['upper', 'lower', 'number', 'symbol']
    let lst = [upper, lower, number, symbol]
    ref = ref.filter((item, index) => lst[index] == !false)
    let i = 0
    console.log(ref)
    while (i < length) {
        for (let j = 0; j < ref.length; j++) {
            console.log(ref[j])
            let func = randomFunc[ref[j]]
            console.log(func)
            password += func()
            i = i + 1
        }
    }
    return password
}

// get functions

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


