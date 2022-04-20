// const x = 1;
// x = 2;
// console.log(x);


const person = {
    name: 'late',
    walk: function () { console.log('walking'); },
    talk() { console.log('talking'); }   // same as function(){}
};

// use . notation if we know what 
// property or method we are using ahead of time
person.talk();
// use [] notation when we dont know 
// what property or method to use ahead of time
person['talk'];


const targetMember = 'name';
person[targetMember] = 'Rabin';
console.log(person);