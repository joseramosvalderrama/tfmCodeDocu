function createSeasonEnum(){
    function createEnum(season){
        let name = season;
        function methodA(){
            return "Season: " + name;
        }
        return{
            methodA
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

console.log(summer.methodA());