const person={
    age:20
};
console.log(person.age);
person.age=30;
console.log(person.age);


const animal=Object.freeze( {
    type: "lion"
});

animal.type="Tiger";
console.log(animal.type);

const person1=Object.freeze({
    name: 'ABC Crop',
    address: {
        street: 'North 1st street',
        city: 'San jose',
        State: 'CA',
        Zipcode: 533456
    }
});

console.log(person1);
console.log(person1.name);
console.log(person1.address);

person1.address.Zipcode=455678;

console.log(person1.address);

console.log(typeof(person1.address));



let arr=[79, 89, 70];
for(let vari of arr){
    console.log(vari);
}

let testNull= null;
console.log(typeof(testNull));

console.log(typeof NAN);