const person = {
    name: 'late',
    walk() {
        console.log(this);  // returns reference to parent (person object)
    }
};

person.walk();

const walk = person.walk;
// console.log(walk);   // displays the function
walk(); // returns reference to global object (window object)