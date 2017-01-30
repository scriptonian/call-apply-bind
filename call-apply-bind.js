var Food = {
    name: "kiwi",
    category: "Fruit",
    makeJuice: function() {
        var message = "Making " + this.name + " juice";
        return message;
    }
}

Function.prototype.makeJuice = function() {
    //console.log("Making " + this.name + " juice");
}

var myFruit = function Food() {
    this.name = "kiwi";
}.makeJuice();


var myFruit = function() {
    return this.makeJuice();
}
//myFruit();

var myPineapple = myFruit.bind(Food);
//console.log(myPineapple());

function myFunction() {
    console.log("Do Something");
}
//call myFunction
var anotherPineapple = myFruit.call(Food);
//console.log(anotherPineapple);

var myNewFruit = function(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    //console.log("Arguments:" + arg1 + ' and ' + arg2);
    return this.makeJuice();
}

var output = myNewFruit.call(Food, "Strawberry", "Blackberry");
//console.log(output);

//Using Apply

var myBetterFruit = function() {
    this.name = 'Mango';
    return this.makeJuice();
}

var mango = myBetterFruit.apply(Food);
//console.log(mango);


var SuperFood = {
    makeJuice: function(fruit) {
        console.log("Making some awesome " + fruit + " juice");
    }
};

(function(arg1) {
    this.makeJuice('Chia Seed');
    console.log("Another option is " + arg1 + " juice");
}).call(SuperFood, 'Mango');

// function cookFood(ingredient1, ingredient2) {
//     console.log('Adding ' + ingredient1 + ' to bowl');
//     console.log('Adding ' + ingredient2 + ' to bowl');
// }

cookFood("Oil", "Onion");

var cookWithOil = cookFood.bind(this, 'Oil');
cookWithOil("Onion")

function cookFood(ingredient2) {
    var ingredient1 = "Oil";
    console.log('Adding ' + ingredient1 + ' to bowl');
    console.log('Adding ' + ingredient2 + ' to bowl');
}
cookFood("Onion");

function multiply(a,b) {
    return a*b;
}
var multiplyByThree = multiply.bind(this, 3, 2);
console.log( multiplyByThree() );

var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice();
console.log(sliced);