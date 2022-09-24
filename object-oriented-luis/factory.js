const object = createObject(1);
object.publicInstanceMethod();
object.privateAttributeX = 666;
console.log(`object.privateAttributeX: ${object.privateAttributeX}`);
object.publicInstanceMethod();

function createObject(parameter) {
    let that = {
        privateAttributeX: parameter,
        privateAttributeY: 0,
        privateMethod: function () {
            this.privateAttributeX++;
            this.privateAttributeY++;
        }
    }
    return {
        publicInstanceMethod: function () {
            that.privateMethod();
            console.log(`privateAttributeX: ${that.privateAttributeX} - privateAttributeY: ${that.privateAttributeY}`);
        }
    }
}