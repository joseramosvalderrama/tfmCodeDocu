// Reference: 
// https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/
// https://www.javascripttutorial.net/javascript-factory-functions/

function createA() { // This design doesn't seem to allow public attributes to be called from private methods
    let privateAttribute = "A This is a private attribute.";

    function privateMethod() {
        console.log("A This is a private method.");
        console.log(privateAttribute);
    }

    return { 
        publicAttribute: "A This is a public attribute.",
        publicMethod: function () { 
            console.log("A This is a public method.");
            privateMethod();        
        } 
    }
}

let objA = createA();
console.log(objA.publicAttribute);
objA.publicMethod();

// Inheritance, showcasing the alternative non-return-contained design

function createB() {
    let B = createA();

    B.publicAttribute = "B This is an overriden public attribute."

    function privateMethod() {
        console.log(B.publicAttribute);
    }

    B.publicMethod = function () {
        console.log("B This is an overriden public method.");
        privateMethod();
    }

    return B;
}
let objB = createB();
objB.publicMethod();