
function receivesAFunction (callback) {
    callback();
}
function returnsANamedFunction() {
    const here = function () {}
    return here 
}

const returnsAnAnonymousFunction = function () {
    return function () {}
} 