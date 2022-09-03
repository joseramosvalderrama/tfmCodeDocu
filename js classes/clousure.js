// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Static fields and functions don't seem to be available outside of class declarations

function clousureA() {
    let privateAttribute = "This is a private attribute.";
    let publicAttribute = "This is a public attribute";
    
    function publicMethod() {
        console.log("This is a public method. ")
    }

    function privateMethod() {
        console.log("This is a private method.");
    }

    function getPrivateAttribute() {
        return privateAttribute;
    }

    privateMethod();

    return {
        publicAttribute,
        publicMethod,
        getPrivateAttribute
    }

}

let objA = clousureA();
console.log("Public attribute: " + objA.publicAttribute);
console.log("Private attribute: " + objA.privateAttribute);
objA.publicMethod();

// I couldn't figure out inheritance using clousures. Closest thing seems to be using prototypes which is messy
// Implement all public methods and attributes on the parent prototype
clousureA.prototype.constructor = clousureA;
clousureA.prototype.publicAttribute = "This is a public attribute.";
clousureA.prototype.getPrivateAttribute = function() { return this.getPrivateAttribute; }
clousureA.prototype.publicMethod = function() { console.log("This is a public method. ") }

// Declare child clousure
let clousureB = function(){ };
clousureB.prototype = clousureA;
clousureB.prototype.constructor = clousureB;
clousureB.prototype.publicMethod = function() {
  console.log("Overriden public method");
  clousureA.prototype.publicMethod.call(this); // call to super.publicMethod()
};

clousureB = new clousureB();
clousureB.publicMethod();
