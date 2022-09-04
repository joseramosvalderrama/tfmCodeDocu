// Symbol let us create enum values that cannot collide between them and Object.freeze does not let us change an enum value.
// https://www.sohamkamani.com/javascript/enums/

const Seasons = Object.freeze({
	Summer: Symbol("summer"),
	Autumn: Symbol("autumn"),
	Winter: Symbol("winter"),
	Spring: Symbol("spring")
});

Seasons.Spring = "winter";

console.log(Seasons.Spring);