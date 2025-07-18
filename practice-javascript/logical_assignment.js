// logical OR (X||=Y or (X || (X=Y)))
//it assign Y  to X when X is false

let X=0, Y='Welcome Anji';
console.log(X||=Y);

// logical OR (X&&=Y or (X && (X=Y)))
//it assign Y  to X when X is false

let Z='Z is true', U='U is not true';
console.log(Z&&U);


let age=15;
let msg;
msg=age >=16 ? (`hlo Anji`):(`fail Anji`);
console.log(msg);