const monster = { // object literal to represent the monster
    lifePoints: 100
}

function attack(){
    if(monster.lifePoints > 0){ // prevents more attacks after monster is dead
        monster.lifePoints -= 10; // reduces monster's remaining life points
        if (monster.lifePoints <= 0) // check to see if the monster is dead (0 or less lifepoints)
            console.log("The monster is dead!");
        else console.log("The monster has " + monster.lifePoints + " life points left")
    }
}