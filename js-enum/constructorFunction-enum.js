function Season(season){
    this.name = season;
    this.methodA = function(){
        return "Season: " + this.name;
    }
}

Season.Winter = new Season("Winter");


console.log(autumn.methodA());