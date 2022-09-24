const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.log(`object.privateAttributeX: ${object.privateAttributeX}`); // Warning!!!
object.publicInstanceMethod();

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