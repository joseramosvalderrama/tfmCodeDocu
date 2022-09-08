// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

class ClassA {

    static STATIC_FIELD = "This is a static field";
    #privateAttribute; // Private attributes must be defined prior to use
    publicAttribute;

    constructor () {
        this.publicAttribute = "This is a public attribute.";
        this.#privateAttribute = "This is a private attribute.";
    }

    publicMethod() {
        console.log("This is a public method. ");
        this.#privateMethod();
    }

    #privateMethod() {
        console.log("This is a private method.");
    }

    static publicStaticMethod() {
        console.log("This is a static method.");
    }

}

console.log(classA.STATIC_FIELD);
classA.publicStaticMethod();
let objA = new classA();
console.log(objA.publicAttribute);
//console.log(objA.#privateAttribute); // Will print undefined
objA.publicMethod();
// objA.privateMethod(); // Will throw not a function error

class classB extends classA {

    constructor() {
        super();
    }

    publicMethod() {
        console.log("This is an overriden inherited public method.");
    }
}

classB.publicStaticMethod();
let objB = new classB();
objB.publicMethod();