class Kofo {
    constructor(name, ppa){
        this.a = name
        this.location = ppa
    }

    doing(){
        console.log("she is in class");
    }
};


let kudirat = new Kofo("olamide", "ogijo")
console.log(kudirat.a);
console.log(kudirat.location);


class Car {
    constructor(model, year,){
this.type = model
this.time = year
    }
    display(){
console.log("this is the latest model");
    }

};

let version = new Car("maybach", 2024, "black")
console.log(version.type);
console.log(version.time);


class person{
    name
    age
    gender
static noOfperson = 0
    constructor(name, age, gender){
this.name = name
this.age = age
this.gender =gender
person.noOfperson += 1
    }
    static desc(){
        return `i have ${person.noOfperson} person(s)`
    }
};
console.log(person.desc());
person.noOfperson


let person1 = new person("kofoworola","15", "female")
console.log(person1);


console.log(this);



class motor{
    constructor(power){
        this._power = power
        this._fuel = 35
    }
get power(){
    return `${this.power} horsepower`
}
}
console.log();


