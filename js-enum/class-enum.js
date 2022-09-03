// Example from https://www.sohamkamani.com/javascript/enums/

class Season {
    // Create new instances of the same class as static attributes
    static Summer = new Season("summer")
    static Autumn = new Season("autumn")
    static Winter = new Season("winter")
    static Spring = new Season("spring")
  
    constructor(name) {
      this.name = name
    }
}