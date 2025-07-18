// Symbol primitive data excercies

let test_symbol=Symbol('test'); // create symbol
console.log(test_symbol);

let global=Symbol.for("SSN"); // it create global symbol if it is not present
console.log(global);
console.log(Symbol.keyFor(global)); // Symbol.keyFor() it gives description of symbol of passing variable

let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};

let task= {
    [global]: statuses.OPEN
};

//console.log(task);

console.log(Object.keys(task));