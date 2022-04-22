const person = {
    name: 'late',
    walk() {
        console.log(this);  // returns reference to parent (person object)
    }
};

person.walk();

// in js, functions are objects
// person.walk is an object
const walk = person.walk.bind(person);
// bind method sets the value of 'this' as the argument 

walk(); // now will return person object instead of the global object
