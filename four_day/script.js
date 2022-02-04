var nameDog = prompt("Write your dog name: ");
var weigthDog = prompt("Write your dog weigth");

function isFat(par1, par2){
    par1 = nameDog;
    par2 = weigthDog;

    if(par2 > 20){
        alert(nameDog + " says WOOF WOOF! " );
    }else{
         alert(nameDog + " says woof woof!");
    }
}

isFat();