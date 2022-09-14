// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// Clousures do not propertly support public attributes
function ClousureA() {

    let privateAttribute = "This is a private attribute.";
    
    function publicMethod() {
        console.log("This is a public method. ");
        privateFunction();
    }

    function publicMethod2() {
        console.log("This is another public method. ");
    }

    function privateFunction() {
        console.log("This is a private function. ");
        console.log(privateAttribute);
    }

    return {
        publicMethod,
        publicMethod2
    }

}
ClousureA.publicStaticMethod = function() {
    console.log("This is a static method.");
}
ClousureA.STATIC_FIELD = "This is a static field";

console.log(ClousureA.STATIC_FIELD);
ClousureA.publicStaticMethod();
let objA = ClousureA();
objA.publicMethod();

console.log('\nInheritance\n');

// Inheritance can't be done on clousures. Below implementation using constructor functions and prototypes doesn't work
ClousureA.prototype.constructor = ClousureA;
ClousureA.prototype.publicMethod = ClousureA().publicMethod;
ClousureA.prototype.publicMethod2 = ClousureA().publicMethod2;

// Declare child clousure
let ClousureB = function () { };
ClousureB.prototype = ClousureA;
ClousureB.prototype.constructor = ClousureA;
ClousureB.publicStaticMethod = ClousureA.publicStaticMethod;
/*ClousureB.prototype.publicMethod = function() {
    console.log("This is an overriden inherited public method.");
};*/
ClousureB.prototype.publicMethod2 = function() {
    console.log("This is an augmentated inherited public method.");
    ClousureA.prototype.publicMethod2.call(this); // call to super.publicMethod2()
};
ClousureB.prototype.publicMethod3 = function() {
    console.log("This is a new child-exclusive public method.");
};

ClousureB.publicStaticMethod();
let objB = new ClousureB();
objB.publicMethod();
objB.publicMethod2();
objB.publicMethod3();
