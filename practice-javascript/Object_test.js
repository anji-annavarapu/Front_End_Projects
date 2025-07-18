let person={
    firstName: `Anjineyulu`,
    lastName: `Annavarapu`,
    'father name': `Yogiramulu`
};

console.log(person.firstName);

console.log(person['lastName']);


console.log(person['father name']);

person.motherName=`Padma`;

console.log('before delete'+Object.keys(person));

delete person.lastName;

console.log('after delete'+Object.keys(person));

console.log('father name' in person);// check property is exit or not

console.log(person); // return object
