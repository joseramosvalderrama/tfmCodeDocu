const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666; // Private so no actual modification made
console.log(`object.privateAttributeX: ${object.privateAttributeX}`); // Warning!!!
object.publicInstanceMethod();

// Clousure
// Pro: private attributes, private functions, public methods
// Limitations: No public attributes, must use getter/setter

function createObject(privateAttributeX) {
  let privateAttributeY = 0;
  return {
    publicInstanceMethod: function () {
      privateFunction();
      console.log(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
    }
  };

  function privateFunction() {
    privateAttributeX++;
    privateAttributeY++;
  }
}