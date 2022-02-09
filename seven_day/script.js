//an array that contains 1 -10
var number=[];
var i = 0;
while(i<10){

    i++

   var aleatorio = Math.floor(Math.random() * 50);
   number.push(aleatorio);

}

console.log(number);

// //create a function than create an array with random numbers

function random(value) {
  var number = [];
  var i = 0;
  while (i < value) {
    i++;

    var aleatorio = Math.floor(Math.random() * 50);
    number.push(aleatorio);
  }
  return number;
}

console.log(random(3));
console.log(random(5));
console.log(random(10));
