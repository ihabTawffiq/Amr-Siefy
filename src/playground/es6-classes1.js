class Person{
    constructor(name = 'Anonymous',age=0){
        this.name = name;
        this.age=age;
    }
    getGreeting(){
        return `Hi ${ this.name }`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}


class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let discription=super.getDescription();
        if(this.major){
            discription +=` the major is ${this.major}`;
        }
        return discription;
    }
 }

 class Traveler extends Person{
     constructor(name,location){
         super(name);
         this.location=location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greet =super.getGreeting();
        if(this.location){
            greet +=` from ${this.location} `
        }
        return greet;
    }
 }
const me = new Traveler('Usama Yaseen','Riyad');
console.log(me.getGreeting());
