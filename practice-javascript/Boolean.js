let bool= true;
console.log(bool);
let boolObj= new Boolean();
boolObj.primitiveValue=true;
console.log(boolObj.valueOf());
console.log(boolObj.toString());
console.log(boolObj.primitiveValue);

let val=26;
let testVal=val;
console.log(val);
console.log(testVal);
testVal=testVal+1;
console.log(val);
console.log(testVal);

let person={
    age: 19
};

let secondPerson=person;
console.log(person.age);
console.log(secondPerson.age);
secondPerson.age=person.age+1;
console.log(person.age);
console.log(secondPerson.age);



