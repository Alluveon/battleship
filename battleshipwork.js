/*Step 1: declaring variables */

//we'll make the locations variable later on 
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; //this wont have a variable until its started up

var hits = 0;
var guesses = 0; //assigning initial value to count from

var isSunk = false; //will become true later

//undefined variables dont have an initial value 

/*GAME LOGIC*/

//step 1
//oh yknow maybe that's why my bottles code didnt work yesterday lol
//didnt use double equals
while (isSunk == false) {
    //user guess
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");{
    
    //checking guess 

    if (guess < 0 || guess > 6) { //if the guess isnt between this then
        alert("Please enter a valid cell number!"); //we use this
    } else {
        guesses = guesses + 1; //if its valid then we add one to guesses!
    }

/*we're taking this out bc this is redundant and difficult to read
IT SUCKS

    if (guess == location1) {
        hits = hits + 1; 
    } else if (guess == location2) {
        hits = hits + 1;
    } else if (guess == location 3) {
        hits = hits +  1;
    }*/

//the actually better way to do it, which i was RIGHT... nice 
} 
    if (guess ==location1 || guess == location2 || guess == location3){
        hits = hits + 1;
    }

    if (hits == 3){
        isSunk = true;
        alert("You sank my battleship!"); //this will end the code
        //but we should add some STATS
    }

    var stats = "you took" + guesses + "guesses to sink the battleship"
        + "which means your shooting accuracy was " + (3/guesses);

    alert(stats);
}

/*things that could be improved 

    - it currently can't like?  detect for strings it just registers them
    as a miss rn