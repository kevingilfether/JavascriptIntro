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

function swap() {
    var imageSrc = document.getElementById("swapImage").src;

    if (imageSrc.includes("Mozilla")) {
        document.getElementById("swapImage").src = "images/suite_transparent_large.png";
    }
    else {
        document.getElementById("swapImage").src = "images/Mozilla-Firefox-Free-Download.png";
    }
    //for debugging
    console.log(imageSrc)
}

function printArray()
{
    var favFoods = ["Pizza", "Sushi", "Pupusas", "Cabbage and Noodles"];
    var outputText = "<ul>";

    for(var i = 0; i<favFoods.length; i++){
        outputText += "<li>" + favFoods[i] + "</li>";
    }

    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML += outputText;
}

