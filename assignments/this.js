/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding calls the function from the window context which will refer to the window object when no other principle is met
* 2. Implicit binding is when the this keyword is bound to an object and is within a method in that object
* 3. New binding binds the this keyword with the new object when you use a function constructor
* 4. Explicit binding is bound to a function using apply call or bind
*
* write out a code example of each explanation above
*/

// Principle 1
var exampleWindow = function() {
    console.log("window binding example");
};
exampleWindow();

// code example for Window Binding

// Principle 2
function implicitBinding(){
    console.log(this.a);
}
var implicitObject = {
    a:"implicit binding example",
    example:implicitBinding
};
implicitObject.example();

// code example for Implicit Binding

// Principle 3
function Computer(processor, ram, videoCard){
    this.processor = processor;
    this.ram = ram;
    this.videoCard = videoCard;

    this.build = (processor, ram, videoCard) => {
        console.log(
            `My computer has an ${this.processor} and ${this.ram}, which is powered by a ${this.videoCard}`
        )
    }
}
const gamingRig = new Computer('Intel Xeon X5690', '16GB DDR3 1600MHz', 'nVidia GTX 570 SLI');
gamingRig.build();

// code example for New Binding

// Principle 4
function Pets(name, species, age){
    this.name = name;
    this.species = species;
    this.age = age;
}
const asuna = new Pets("Asuna", "cat", 1);
const atlas = {
    name: "Atlas",
    species: "dog",
    age: .5
};
function myPets(){
    console.log(`My pet ${this.name} is a ${this.species} and is ${this.age} years old`)
}

myPets.call(asuna);
myPets.apply(atlas);

// code example for Explicit Binding