/*PRAKTIKA SU JS KLASĖMIS

1 UŽDUOTIS

Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
* getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
* getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.


2.1 UŽDUOTIS

Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
ir metodus:

* getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).
* getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).

2.2 UŽDUOTIS

Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 

* getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.
*/



// 1 uzduotis (pasidaviau)
function Movie(name, year, director, budget, income) {
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income
}

Movie.prototype.print = function(){
    console.log(this.name, this.year, this.director, this.budget, this.income)
}
    
    
    const movie1 = new Movie("Fight club", 1999, "David Fincher", "63 000 000 USD", "100 900 000 USD" )
    console.log(movie1)
    movie1.print()

console.log("=========================")


// 2.1 uzduotis

function car(brand, model, year){
    this.brand = brand
    this.model = model
    this.year = year

    this.getIntroduction = function(){
        console.log(`Markė: ${this.brand}, modelis: ${this.model}`)
    }

    this.getAge = function(){
        year >= 2013 ? console.log("10 metų arba naujesnis")  
        : year < 2013 ? console.log("11 metų arba senesnis")
        : ""
    }
}

const car1 = new car("BMW", "e36", 2000)
const car2 = new car("BMW", "e39", 2004)
const car3 = new car("BMW", "e46", 2006)

car1.getIntroduction()
car1.getAge()

