const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.log(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();

function createObject(parameter) {
    let returned = {
        publicAttributeX: parameter,
        publicAttributeY: 0,
        publicInstanceMethod: function () {
            privateFunction(returned);
            console.log(`publicAttributeX: ${returned.publicAttributeX} - publicAttributeY: ${returned.publicAttributeY}`);
        }
    };
    return returned;

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}