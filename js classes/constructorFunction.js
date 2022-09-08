// Reference: https://www.w3schools.com/JS/js_object_constructors.asp
// https://www.geeksforgeeks.org/how-inheritance-works-in-constructor-functions-in-javascript/

function ConstructorA() {
    this.publicAttribute = "This is a public attribute.";
    let privateAttribute = "This is a private attribute.";

    function privateFunction() {
        console.log("This is a private method.");
        console.log(privateAttribute);
    }
}
ConstructorA.prototype.publicMethod = function () {
    console.log("This is a public method.");
    console.log(privateAttribute);
    console.log(this.publicAttribute);
    privateFunction();
};

ConstructorA.publicStaticMethod = function(){
    console.log("This is a static method.");
}
ConstructorA.STATIC_FIELD = "This is a static field";
let objA = new ConstructorA();
console.log(objA.publicAttribute);
objA.publicMethod();
// objA.privateMethod(); // Will throw not a function error

function ConstructorB() {
    ConstructorFunctionA.call(this);

    this.publicMethod = function () {
        console.log("This is an overriden public method.");
    }
}

let objB = new ConstructorB();
console.log(objB.publicAttribute);
objB.publicMethod();