const person = {
    talk() {
        var self = this;
        setTimeout(function () {
            console.log("this", this);  // returns reference to window object
            console.log("this", self);  // returns person object
        }, 1000);
        console.log("this", this);  // returns person object
    }
};

person.talk();