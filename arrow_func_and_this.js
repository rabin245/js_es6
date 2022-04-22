const person = {
    talk() {
        // var self = this;
        setTimeout(() => {
            // returns reference to person object because of 
            // usage of arrow function
            // arrow functions donot rebind the this keyword
            console.log("this", this);
            // console.log("this", self);  // returns person object
        }, 1000);
        console.log("this", this);  // returns person object
    }
};

person.talk();