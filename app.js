console.log('Hello World!');
// Calculator functions
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
// Input validation
function validateNumber(x) {
    return typeof x === 'number' && !isNaN(x);
}

# Обновляем функции с валидацией
function add(a, b) { return a + b; } 
function add(a, b) {
    if (!validateNumber(a) || !validateNumber(b)) throw new Error("Invalid input");
    return a + b; 
}
