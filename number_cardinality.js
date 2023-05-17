// Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:
//     Devuelve la cadena zero si el número termina en 0
//     Devuelve la cadena five si el número termina en 5
//     Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
//     Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
// Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

// Ejemplos:
// Input: 100
// Output: zero
// Input: 88
// Output: even
// Input: 155
// Output: five
// Input: 99
// Output: odd

function number_cardinality2(NUMBER) {
    if (NUMBER.toString().endsWith("0")) {
        return "zero";
    } else if (NUMBER.toString().endsWith("5")) {
        return "five";
    } else if (NUMBER % 2 === 0) { //CUANDO NUMBER DIVIDIDO 2 SU RESIDUO SEA 0 SIGNIFICA QUE ES PAR // NINGUN NUMERO TERMINADO EN 5 ES PAR.
        return "even";
    } else {
        return "odd";
    }
}

console.log(number_cardinality2(110));
console.log(number_cardinality2(12));
console.log(number_cardinality2(155));
console.log(number_cardinality2(92));
console.log(number_cardinality2(221));
console.log(number_cardinality2(54353425));
console.log(number_cardinality2(12546005));
console.log(number_cardinality2(903453002));







// OTRA FORMA
// function number_cardinality(number) {
//     if (number % 10 === 0) {
//         return "zero";
//     } else if (number % 10 === 5) {
//         return "five";
//     } else if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }

// TEST1
// let cinco = 52305;
// let escinco = cinco.toString().endsWith("5")
// console.log(escinco); //TRUE





