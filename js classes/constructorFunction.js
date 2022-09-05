// Reference: https://www.w3schools.com/JS/js_object_constructors.asp
// https://www.geeksforgeeks.org/how-inheritance-works-in-constructor-functions-in-javascript/

function constructorFunctionA() {
    this.publicAttribute = "This is a public attribute.";
    let privateAttribute = "This is a private attribute.";

    this.publicMethod = function () {
        console.log("This is a public method.");
    };

    function privateMethod() {
        console.log("This is a private method.");
    }
}

let objA = new constructorFunctionA();
console.log(objA.publicAttribute);
objA.publicMethod();
// objA.privateMethod(); // Will throw not a function error

function constructorFunctionB() {
    constructorFunctionA.call(this);

    this.publicMethod = function () {
        console.log("This is an overriden public method.");
    }
}

let objB = new constructorFunctionB();
console.log(objB.publicAttribute);
objB.publicMethod();