// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Static fields and functions don't seem to be available outside of class declarations

function clousureA() {
    let that = {
        privateAttribute: "This is a private attribute.",
        privateMethod: function () {
            console.log("This is a private method.");
            console.log(that.privateAttribute);
        }
    }
    
    function publicMethod() {
        console.log("This is a public method. ");
        console.log(that.privateAttribute);
        that.privateMethod();
    }


    return {
        publicMethod
    }

}


clousureA.publicStaticMethod = function(){
    console.log("This is a static method.");
}
clousureA.STATIC_FIELD = "This is a static field";

console.log(clousureA.STATIC_FIELD);
clousureA.publicStaticMethod();
let objA = new clousureA();
console.log(objA.publicAttribute);
//console.log(objA.#privateAttribute); // Will print undefined
objA.publicMethod();
// objA.privateMethod(); // Will throw not a function error

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
