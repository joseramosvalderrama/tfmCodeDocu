const SeasonEnum = Object.freeze({
    Winter: createSeasonEnum("Winter"),
    Summer: createSeasonEnum("Summer"),
    Autumn: createSeasonEnum("Autumn"),
    Spring: createSeasonEnum("Spring"),
});

function createSeasonEnum(season){
    let name = season;
    function methodA(){
        return "Season: " + name;
    }
    return{
        methodA
    }
}

const winter = SeasonEnum.Winter;
const summer = SeasonEnum.Summer;
const autumn = SeasonEnum.Autumn;
const spring = SeasonEnum.Spring;

console.log(summer.methodA());