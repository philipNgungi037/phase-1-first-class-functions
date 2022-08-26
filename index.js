function receivesAFunction (someFunction) {
    someFunction();
}

function returnsANamedFunction () {
    return function NamedSomething() {
        console.log ('I was returned');
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log ('I am not named');
    }
}