//while loop

// let  i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }


// do while loop

// let i = 1;

// do{
//     console.log('NUmber ' + i);
//     i++;

// }
// while(i<10);


// for each

// const cars = ['Ford','Proton','Honda','Audi'];

// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`);

// });

//Map

// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Ivann'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];



// const ids = users.map(function(user){

//     return user.id;

// });
// console.log(ids);


//for in loop

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40

};


for (let i in user){
    console.log(`${i} : ${user[i]}`);
}