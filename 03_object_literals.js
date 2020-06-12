const person ={
    firstName: 'John',
    lastName : 'Reuben',
    age: 37,
    email: 'john83reuben@gmail.com',
    hobbies: ['programming','bible'],
    address: {
        city: 'kajang',
        state: 'Selangor'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }

}

let val = person;

//Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();
console.log(val);

//Array of objects
const people = [
    {name: 'Ivann', age: 4},
    {name: 'Hemah', age: 32}

];

//console.log(people[1].name);

for (let i = 0 ; i < people.length ; i++) {
    console.log(people[i].name);
}