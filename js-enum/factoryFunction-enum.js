const SeasonEnum = Object.freeze({
    Winter: createSeasonEnum("Winter"),
    Summer: createSeasonEnum("Summer"),
    Autumn: createSeasonEnum("Autumn"),
    Spring: createSeasonEnum("Spring"),
});

function createSeasonEnum(season){
    return{
        name: season,
        methodA: function(){
            return "Season: " + this.name;
        }
    }
}

const winter = SeasonEnum.Winter;
const summer = SeasonEnum.Summer;
const autumn = SeasonEnum.Autumn;
const spring = SeasonEnum.Spring;

console.log(spring.methodA());