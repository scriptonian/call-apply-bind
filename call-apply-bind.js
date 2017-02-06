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


//borrowing with bind
var healthyfoods = {
    items: [
        {name:"apple", category:"fruit"},
        {name:"spinach", category:"vegetable"}
    ],
    displayFirstFood: function(){
        return this.items[0].name;
    }
}
console.log('First food is : ' + healthyfoods.displayFirstFood());

var junkfoods = {
    items: [
        {name:"mac & cheese", category:"carbs"},
        {name:"steak", category:"meats"}
    ]
}

var displayFirstJunk = healthyfoods.displayFirstFood.bind(junkfoods);
console.log("First Junk is " + displayFirstJunk());

var myArrayObject = {
    key1: "value 1",
    key2: "value 1",
    method1: function() {},
    method2: function() {},
    0: "Boobie Flay",
    1: "40",
    2: ["rice", "beans", "broccoli"],
    length: 3 
};

var newArray = Array.prototype.slice.call(myArrayObject, 0);
console.log(newArray);

var myIndexOf = Array.prototype.indexOf.call(myArrayObject, "Boobie Flay");
if(myIndexOf === -1) {
    console.log('user not found');
} else {
    console.log('found user');
}

var myReverse = Array.prototype.reverse.call(myArrayObject);
console.log(myReverse);
var myPush = Array.prototype.push.call(myArrayObject, "push test");
console.log(myArrayObject);
var myPop = Array.prototype.pop.call(myArrayObject);
console.log(myArrayObject);


function funcArguments(params) {
    var args = Array.prototype.slice.call(arguments, 0);
    console.log(args); //[ 'a', 'b', 'c', 'd' ]
}
funcArguments("a", "b", "c", "d");

var myMagicNums = [2, 3, 45, 78, 123, 37, 111];
var maxMagic = Math.max.apply(Math, myMagicNums);
console.log(maxMagic)
