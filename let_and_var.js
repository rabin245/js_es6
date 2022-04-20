// var -> scoped to function
// let -> scoped to block
// const -> block scoped

function sayHello() {

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);

}

sayHello();