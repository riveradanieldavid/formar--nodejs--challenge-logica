// Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.

// Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

// Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.

// Ejemplos:

// Para el número 34315:

// Dígito: 3
// Puede ver a la izquierda: -
// Puede ver a la derecha: 431
// Valor de la visión:4 + 3 + 1 = 8

// Dígito: 4
// Se puede ver a la izquierda: 3
// Se puede ver a la derecha: 315
// Valor de la visión:3 + 3 + 1 + 5 = 12

// Dígito: 3
// Puede ver a la izquierda: 34
// Puede ver a la derecha: 15
// Valor de la visión:3 + 4 + 1 + 5 = 13

// Dígito: 1
// Se puede ver a la izquierda: 3
// Se puede ver a la derecha: 5
// Valor de la visión:3 + 5 = 8

// Dígito: 5
// Puede ver a la izquierda: 3431
// Puede ver a la derecha: -
// valor de la visión:3 + 4 + 3 + 1 = 11

// ¿Hay un dígito 1 en el número entero para el cual el valor de visión es mínimo?

// Sí, 8 es el valor mínimo de visión, tanto para el primer 3 como para el 1. Eso satisface los criterios, por lo que la función devuelve true.

// 22919 false
// 34315 true



/* 
console.log(range_vision)

function range_vision(number) {
    var digits = Array.from(String(number), Number)
    var minValue = Number.MAX_VALUE

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i)
        var rightRange = digits.slice(i + 1, i + digits[i] + 1)
        var visionValue = leftRange
            .concat(rightRange)
            .reduce((acc, curr) => acc + curr, 0)

        if (digits[i] === 1 && visionValue < minValue) {
            minValue = visionValue
        }
    }

    return minValue === Number.MAX_VALUE ? false : true
}

console.log(range_vision(34315)) // Output: true
console.log(range_vision(22919)) // Output: true

 */



/* 
console.log(range_vision2)

function range_vision2(number) {
    var digits = Array.from(String(number), Number)
    var minValue = Number.MAX_VALUE

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i)
        var rightRange = digits.slice(i + 1, i + digits[i] + 1)
        var visionValue = leftRange
            .concat(rightRange)
            .reduce((acc, curr) => acc + curr, 0)

        if (digits[i] === 1 && visionValue < minValue) {
            minValue = visionValue
        }
    }

    return minValue === 1
}

console.log(range_vision2(34315)) // Output: true
console.log(range_vision2(22919)) // Output: true



 */



/* 
console.log(range_vision3)

function range_vision3(number) {
    var digits = Array.from(String(number), Number)
    var minValue = Number.MAX_VALUE
    var hasDigitOne = false

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i)
        var rightRange = digits.slice(i + 1, i + digits[i] + 1)
        var visionValue = leftRange
            .concat(rightRange)
            .reduce((acc, curr) => acc + curr, 0)

        if (digits[i] === 1 && visionValue < minValue) {
            minValue = visionValue
            hasDigitOne = true
        }
    }

    return hasDigitOne
}

console.log(range_vision3(34315)) // Output: true
console.log(range_vision3(22919)) // Output: true


 */











/* 
console.log(range_vision4)

function range_vision4(number) {
    var digits = Array.from(String(number), Number)
    var minValue = Infinity // O Number.MAX_VALUE // ASEGURA QUE SEA EL MENOR NUMERO
    var hasDigitOneValueMin = false
    console.log('Has Digit One Value Min antes del for:', hasDigitOneValueMin)

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i)
        var rightRange = digits.slice(i + 1, i + digits[i] + 1)
        var visionValue =
            leftRange.reduce((acc, curr) => acc + curr, 0) +
            rightRange.reduce((acc, curr) => acc + curr, 0)
        console.log('Digit:', digits[i])
        console.log('Left Range:', leftRange)
        console.log('Right Range:', rightRange)
        console.log('Vision Value:', visionValue)

        
        if (digits[i] === 1 && digits[i] === 1[visionValue] < digits[i] !== 1[visionValue]) {
            // HASTA ACA BIEN / ASIGNA EL VALOR MINIMO DEL ENTERO A minVlue
            minValue = visionValue;
            hasDigitOneValueMin = true
        }
        console.log('Has Digit One Value Min en for (si 1 es  true):', hasDigitOneValueMin)
    }

    console.log('Min Value:', minValue)
    console.log('Has Digit One Value Min antes del return de la funcion:', hasDigitOneValueMin)

    return hasDigitOneValueMin
}

console.log('DEBE SER TRUE... ' + range_vision4(34315)) // Output: true
// console.log('DEBE SER FALSE... ' + range_vision4(22919)) // Output: false

 */





/* 
console.log(range_vision5)

function range_vision5(number) {
    var digits = Array.from(String(number), Number);
    var minValue = Infinity;
    var hasDigitOne = false;

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i);
        var rightRange = digits.slice(i + 1, i + digits[i] + 1);
        var visionValue = leftRange.reduce((acc, curr) => acc + curr, 0) + rightRange.reduce((acc, curr) => acc + curr, 0);

        // if (digits[i] === 1 || digits[i] === 0) {
        if (digits[i] === 1) {
            var otherDigitValues = digits.filter((_, index) => index !== i);
            var otherVisionValues = otherDigitValues.map((digit, idx) => {
                var leftRange = digits.slice(Math.max(idx - digit, 0), idx);
                var rightRange = digits.slice(idx + 1, idx + digit + 1);
                return digit + leftRange.reduce((acc, curr) => acc + curr, 0) + rightRange.reduce((acc, curr) => acc + curr, 0);
            });

            if (visionValue < Math.min(...otherVisionValues)) {
                hasDigitOne = true;
                break;
            }
        }
    }

    return hasDigitOne;
}

console.log(range_vision5(34315)); //  true
console.log(range_vision5(22919)); //  false
console.log(range_vision5(56491)); //  true
console.log(range_vision5(112717434315)); //  true
console.log(range_vision5(110)); //  false
console.log(range_vision5(920)); //  false


 */










function range_vision5(number) {
    // Convertir el número en un array de dígitos
    var digits = Array.from(String(number), Number);

    // Valor mínimo inicial
    var minValue = Infinity;

    // Indicador de si se encontró un dígito 1 con el valor de visión más bajo
    var hasDigitOne = false;

    // Iterar sobre cada dígito
    for (var i = 0; i < digits.length; i++) {
        // Calcular los rangos de visión a la izquierda y derecha del dígito actual
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i);
        var rightRange = digits.slice(i + 1, i + digits[i] + 1);

        // Calcular el valor de visión del dígito actual
        var visionValue = leftRange.reduce((acc, curr) => acc + curr, 0) + rightRange.reduce((acc, curr) => acc + curr, 0);

        // Verificar si el dígito actual es igual a 1
        if (digits[i] === 1) {
            // Obtener los otros dígitos y calcular sus valores de visión
            var otherDigitValues = digits.filter((_, index) => index !== i);
            var otherVisionValues = otherDigitValues.map((digit, idx) => {
                var leftRange = digits.slice(Math.max(idx - digit, 0), idx);
                var rightRange = digits.slice(idx + 1, idx + digit + 1);
                return digit + leftRange.reduce((acc, curr) => acc + curr, 0) + rightRange.reduce((acc, curr) => acc + curr, 0);
            });

            // Comparar el valor de visión del dígito actual con el mínimo de los otros valores de visión
            if (visionValue < Math.min(...otherVisionValues)) {
                // Establecer el indicador en true y salir del bucle
                hasDigitOne = true;
                break;
            }
        }
    }

    // Devolver el indicador
    return hasDigitOne;
}

console.log(range_vision5(34315)); //  true
console.log(range_vision5(22919)); //  false
console.log(range_vision5(56491)); //  true
console.log(range_vision5(112717434315)); //  true
console.log(range_vision5(110)); //  false
console.log(range_vision5(920)); //  false












/* 
console.log(range_vision5)

function range_vision5(number) {
    var digits = Array.from(String(number), Number);
    var minValue = Infinity;
    var hasDigitOne = false;

    for (var i = 0; i < digits.length; i++) {
        var leftRange = digits.slice(Math.max(i - digits[i], 0), i);
        var rightRange = digits.slice(i + 1, i + digits[i] + 1);
        var visionValue =
            leftRange.reduce((acc, curr) => acc + curr, 0)
            + rightRange.reduce((acc, curr) => acc + curr, 0);

        console.log("Digit:", digits[i]);
        console.log("Left Range:", leftRange);
        console.log("Right Range:", rightRange);
        console.log("Vision Value:", visionValue);

        console.log("Has Digit One in for:", hasDigitOne);

        if (digits[i] === 1) {
            var otherDigitValues = digits.filter((_, index) => index !== i);
            var otherVisionValues = otherDigitValues.map((digit, idx) => {
                var leftRange = digits.slice(Math.max(idx - digit, 0), idx);
                var rightRange = digits.slice(idx + 1, idx + digit + 1);
                return digit + leftRange.reduce((acc, curr) => acc + curr, 0) + rightRange.reduce((acc, curr) => acc + curr, 0);
            });

            console.log("Other Digit Values:", otherDigitValues);
            console.log("Other Vision Values:", otherVisionValues);

            if (visionValue < Math.min(...otherVisionValues)) {
                hasDigitOne = true;
                break;
            }
        }
    }

    console.log("Has Digit One:", hasDigitOne);
    return hasDigitOne;
}

console.log(range_vision5(34315)); //  true
// console.log(range_vision5(22919)); //  false
// console.log(range_vision5(56491)); //  true
// console.log(range_vision5(112717434315)); //  true
// console.log(range_vision5(110)); //  false
// console.log(range_vision5(920)); //  false

 */










