//create an object 

var chevy = {
//each property is separed by a comma
    make: "Chevy",
    model:"Bel Air",
    year: 1957,
    color: "Red",
    passengers: "2",
    convertible: false,
    mileage: 1021

}; //we end the object with a closing curly brace and just like any other variable declaration, we end this one with a semicolon


var cadi = {
    make: "Cadillac",
    model:" GM",
    year: 1955,
    color: "Brown",
    passengers: "5",
    convertible: false,
    mileage: 12892
}


var fiat = {
    make: "Fiat",
    model:"500",
    year: 1957,
    color: "Medium Blue",
    passengers: "2",
    convertible: false,
    mileage: 88000
}

//access a property
//use the name of the object first 
//then a dot 
//then the name of the property
fiat.make

//we can use a property in any expression, like this

var km = fiat.mileage;

if(km < 80000){
    alert("Buy now!");
};
//change the value of a property
//just specify the property youwant to change and then give it a new value.
fiat.mileage = 80600;

//As long as the property doesn't already exist in the object, it's added to the object. 
//Otherwise, the property with this name is updated 
fiat.needsWashing = true;

console.log(fiat);

function prequalify(car){
    if(car.year > 1960){
        if(car.mileage < 10000){
            console.log("true");
        }
    }

}

prequalify(chevy);