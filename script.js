console.log('js ok')

// stampo in consolle da 1 a 100

for (let i = 0; i <= 99; i++) {
const numero = i + 1
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
if( numero % 3 === 0 && numero % 5 === 0 ){
    console.log('Fizzbuzz')
} else if( numero % 3 === 0 ) {
    // se num è multiplo di 3 stampo fizz
    console.log('Fizz')
} else if( numero % 5 === 0 ) {
    // se num è multiplo di 5 stampo buzz
    console.log('Buzz')
} else {
    // sennò numero normale i + 1
    console.log(numero)}

    // creo elemento nel dom
const cella = document.createElement('div')
// inserisco elemento numero
cella.append(numero)
// stampo

}


