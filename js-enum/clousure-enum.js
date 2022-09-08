const SeasonEnum = Object.freeze({
    Winter: createSeason("Winter"),
    Summer: createSeason("Summer"),
    Autumn: createSeason("Autumn"),
    Spring: createSeason("Spring"),
});

function createSeason(season){
    let name = season;
    function methodA(){
        return "Season: " + name;
    }
    return{
        methodA
    }
}
createSeason.Winter = createSeason("Winter");

const winter = SeasonEnum.Winter;
const summer = SeasonEnum.Summer;
const autumn = SeasonEnum.Autumn;
const spring = SeasonEnum.Spring;

console.log(summer.methodA());