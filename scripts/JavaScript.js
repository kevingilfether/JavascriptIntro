//console.log("Hello World!");
//var name = "Kevin";

//console.log("Hello " + name);

////writing a loop to count from 1-10

//for (var i = 1; i < 11; i++)
//{
//    console.log(i);
//}

//Starting to talk about JavaScript Functions

//function helloWorld() {
//    var greeting = "Hello world!";
//    alert(greeting);
//}

//helloWorld();

function add(a, b) {
    return a + b;
}

console.log(add(4, 1000000000))


//Anonymous function
var otherFunction = function (a, b) {
    return a + b;
}
console.log(otherFunction(2, .4));

//write a function that takes in a name and prints "Hello [name]"

function helloNamer(name) {
    console.log("Hello " + name + "!");
}

function updateDiv() {
    var outputString = "Hello, and welcome to my webpage.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "</p>";
}


