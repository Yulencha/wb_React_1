type NumberSystem = 'dec' | 'bin' | 'hex';

function convertNumber(input: string, from: NumberSystem, to: NumberSystem): string {
    let decimalValue: number;

    if (from === 'bin') {
        decimalValue = parseInt(input, 2);
    } else if (from === 'hex') {
        decimalValue = parseInt(input, 16);
    } else {
        decimalValue = parseInt(input, 10);
    }

    if (to === 'bin') {
        return decimalValue.toString(2);
    } else if (to === 'hex') {
        return decimalValue.toString(16);
    } else {
        return decimalValue.toString(10);
    }
}

function add(a: string, b: string, system: NumberSystem): string {
    let decA = parseInt(convertNumber(a, system, 'dec'), 10);
    let decB = parseInt(convertNumber(b, system, 'dec'), 10);
    let result = decA + decB;
    return convertNumber(result.toString(), 'dec', system);
}

function subtract(a: string, b: string, system: NumberSystem): string {
    let decA = parseInt(convertNumber(a, system, 'dec'), 10);
    let decB = parseInt(convertNumber(b, system, 'dec'), 10);
    let result = decA - decB;
    return convertNumber(result.toString(), 'dec', system);
}

function multiply(a: string, b: string, system: NumberSystem): string {
    let decA = parseInt(convertNumber(a, system, 'dec'), 10);
    let decB = parseInt(convertNumber(b, system, 'dec'), 10);
    let result = decA * decB;
    return convertNumber(result.toString(), 'dec', system);
}

function divide(a: string, b: string, system: NumberSystem): string {
    let decA = parseInt(convertNumber(a, system, 'dec'), 10);
    let decB = parseInt(convertNumber(b, system, 'dec'), 10);
    if (decB === 0) {
        console.log("Ошибка: деление на ноль.");
        return "NaN";
    }
    let result = decA / decB;
    return convertNumber(result.toString(), 'dec', system);
}

console.log("Сложение (двоичное):", add('1010', '0101', 'bin')); // 1111
console.log("Вычитание (шестнадцатеричное):", subtract('1A', 'C', 'hex')); // E
console.log("Умножение (десятичное):", multiply('15', '10', 'dec')); // 150
console.log("Деление (десятичное):", divide('150', '15', 'dec')); // 10
