const user =  {
    name:'Usama',
    cities:['Cairo','Giza','Riyad'],
    printPlaces(){
        const city = this.cities.map((city) => {
            return this.name + 'كان عايش في' + city;
        
        });
    return city;
    } 
};
console.log(user.printPlaces());



const multi = {
    num: [1,2,3],
    mult: 2,
    multiply(){
        return this.num.map((num) => num * this.mult);    
    }
};
console.log(multi.multiply());
