function SeasonEnum(){    
    this.Winter= new Season("Winter");
    this.Summer= new Season("Summer");
    this.Autumn= new Season("Autumn");
    this.Spring= new Season("Spring");
    function Season(season){
        this.name = season;
        this.methodA = function(){
            return "Season: " + this.name;
        }
    }
}

const seasonEnum = new SeasonEnum();
const winter = seasonEnum.Winter;
const summer = seasonEnum.Summer;
const autumn = seasonEnum.Autumn;
const spring = seasonEnum.Spring;

console.log(autumn.methodA());