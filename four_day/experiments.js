//Experiment #1 what happens when we don't pass enough arguments? 

function makeTea(cups, tea){
    console.log ("Brewing " + cups + " cups of " + tea);
} 

//undefined in tea because we don't agree a argument 
makeTea(3);

//Experiment #2 what happens when we pass too many arguments? 
//in this case JavaScript just ignores the extra 
makeTea(3, "Earl Grey", "hey you!", 52);

//EXPERIMENT #3: what happens when we have NO parameters?
//No worries, many functions have no parameters 
function barkAtTheMoon(){
    alert("auuuuuuuu!");

}

barkAtTheMoon();

