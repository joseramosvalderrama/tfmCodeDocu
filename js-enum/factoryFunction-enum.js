function createSeasonEnum(){
    function createEnum(season){
        return{
            name: season,
            methodA: function(){

            }
        }
    }

    return{
        Winter: createEnum("Winter"),
        Summer: createEnum("Summer"),
        Autumn: createEnum("Autumn"),
        Spring: createEnum("Spring"),
    }
}

const winter = createSeasonEnum().Winter;
const summer = createSeasonEnum().Summer;
const autumn = createSeasonEnum().Autumn;
const spring = createSeasonEnum().Spring;

console.log(winter);