const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.log(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();

function createObject(parameter) {
    return {
        publicAttributeX: parameter,
        publicAttributeY: 0,
        publicInstanceMethod: function () {
            privateFunction(this);
            console.log(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);
        }
    };

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}