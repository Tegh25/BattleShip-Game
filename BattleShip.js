/*
This javascript program is a text based version of the classic game, BattleShip. This program first gives the computer 8 variables for
its long ship and 6 variables for its medium ship. Then it asks the user to fill in 4 variables for the long ship and the medium ship
and fills in the other 10 variables for both ships depending on what direction the user wants the ships to face. After the user chooses
where they want there ships to be, the actual game starts. The user gets to choose the x axis and the y axis of where they want to shoot,
if they hit an enemy ship, it will be printed to the screen and the variables that held the coordinates of that part of the enemy ship
would become "sunk". If the user misses the enemy ships, it will just be printed to the screen. After the user shoots, the computer
randomly picks a coordinate and shoots, if it hits one of the user's ships, it will be printed to the screen and the user's variable
that was in that place will become "sunk". If the computer misses, the game will go on as usual. After 3 turns, the program asks the
user if they want to end the game at the end of each turn, the game will only end when all ship variables for either the computer or
the user are "sunk", or if the user answers "yes" to end the game at the end of a turn. This program also counts turns and prints the
number of turns it took to end the game at the end of the game.
Programmer: Teghveer Singh Ateliey
Date: January 24, 2019 CE
*/

function start(){
    startScreen(); // calls the start screen and the enter function
    enter();
    
    var longShipX1 = Randomizer.nextInt(0, 12); // chooses a random position for the computers long ship
    var longShipY1 = Randomizer.nextInt(0, 12);
    var random = Randomizer.nextInt(1, 2); // chooses if the ship should be vertical or horizontal
    if(random==1){ // if random is one, the ship will be horizontal, two would be vertical
        if(longShipX1>9){ // decides which side of the ship the 3 other parts should be depending on if there is space on the coordinate plane
            var longShipX2 = longShipX1 - 1; // adds the 3 other parts of the ship to the left of the bow
            var longShipX3 = longShipX2 - 1;
            var longShipX4 = longShipX3 - 1;
        }else{
            var longShipX2 = longShipX1 + 1; // adds the 3 other parts of the ship to the right of the bow
            var longShipX3 = longShipX2 + 1;
            var longShipX4 = longShipX3 + 1;
        }
        var longShipY2 = longShipY1; // intiates the y axis variables that will be the same because the ship is horzontal
        var longShipY3 = longShipY1;
        var longShipY4 = longShipY1;
    }else{
        if(longShipY1>9){ // decides which side of the ship the 3 other parts should be depending on if there is space on the coordinate plane
            var longShipY2 = longShipY1 - 1; // adds the 3 other parts of the ship north of the bow
            var longShipY3 = longShipY2 - 1;
            var longShipY4 = longShipY3 - 1;
        }else{
            var longShipY2 = longShipY1 + 1; // adds the 3 other parts of the ship south of the bow
            var longShipY3 = longShipY2 + 1;
            var longShipY4 = longShipY3 + 1;
        }
        var longShipX2 = longShipX1; // intiates the x axis variables that will be the same because the ship is vertical
        var longShipX3 = longShipX1;
        var longShipX4 = longShipX1;
    }

    var medShipX1 = Randomizer.nextInt(0, 12); // chooses a random position for the computers medium ship
    var medShipY1 = Randomizer.nextInt(0, 12);
    while(medShipX1==longShipX1 && medShipY1==longShipY1 || medShipX1==longShipX2 && medShipY1==longShipY2 || medShipX1==longShipX3 && medShipY1==longShipY3 || medShipX1==longShipX4 && medShipY1==longShipY4){
        medShipX1 = Randomizer.nextInt(0, 12); // if the position for the bow of the medium ship is the same as a position for the long ship, the computer chooses new position
        medShipY1 = Randomizer.nextInt(0, 12);
    }
    var random = Randomizer.nextInt(1, 2); // chooses if the ship should be vertical or horizontal
    if(random==1){
        var medShipY2 = medShipY1; // intiates the y axis variables that will be the same because the ship is horzontal
        var medShipY3 = medShipY1;
        var medShipY4 = medShipY1;
        if(medShipX1>10){ // decides which side of the ship the 2 other parts should be depending on if there is space on the coordinate plane
            var medShipX2 = medShipX1 - 1; // intializes the x variable of the second part of the ship left of the bow
            if(medShipX2==longShipX1 && medShipY2==longShipY1 || medShipX2==longShipX2 && medShipY2==longShipY2 || medShipX2==longShipX3 && medShipY2==longShipY3 || medShipX2==longShipX4 && medShipY2==longShipY4){
                if(medShipX1>=2){ // moves both parts of the ship if the position of the second part is the same as one of the positions of the long ship or if the second part is off the coordinate plane
                    medShipX1 = medShipX1 - 2; // moves the bow of the ship west
                }else{
                    medShipX1 = medShipX1 + 2; // moves the bow of the ship east
                }
            }
            medShipX2 = medShipX1 - 1; // confirms that the second part of the ship is to the left of the bow
            
            var medShipX3 = medShipX2 - 1; // intializes the x variable of the third part of the ship left of the second part
            if(medShipX3==longShipX1 && medShipY3==longShipY1 || medShipX3==longShipX2 && medShipY3==longShipY2 || medShipX3==longShipX3 && medShipY3==longShipY3 || medShipX3==longShipX4 && medShipY3==longShipY4){
                if(medShipX1>=2){ // moves all parts of the ship if the position of the third part is the same as one of the positions of the long ship or if the third part is off the coordinate plane
                    medShipX1 = medShipX1 - 2; // moves the bow of the ship west
                }else{
                    medShipX1 = medShipX1 + 2; // moves the bow of the ship east
                }
            }
            medShipX2 = medShipX1 - 1; // confirms that the second part of the ship is to the left of the bow and the third part is to the left of the second part
            medShipX3 = medShipX2 - 1;
        }else{ // this part of the if statement puts the other parts of the ship east of the bow, the above code puts it west of the bow
            var medShipX2 = medShipX1 + 1; // intializes the x variable of the second part of the ship right of the bow
            if(medShipX2==longShipX1 && medShipY2==longShipY1 || medShipX2==longShipX2 && medShipY2==longShipY2 || medShipX2==longShipX3 && medShipY2==longShipY3 || medShipX2==longShipX4 && medShipY2==longShipY4){
                if(medShipX1<=10){ // moves both parts of the ship if the position of the second part is the same as one of the positions of the long ship or if the second part is off the coordinate plane
                    medShipX1 = medShipX1 + 2; // moves the bow of the ship east
                }else{
                    medShipX1 = medShipX1 - 2; // moves the bow of the ship west
                }
            }
            medShipX2 = medShipX1 + 1; // confirms that the second part of the ship is to the right of the bow
            
            var medShipX3 = medShipX2 + 1; // intializes the x variable of the third part of the ship right of the second part
            if(medShipX3==longShipX1 && medShipY3==longShipY1 || medShipX3==longShipX2 && medShipY3==longShipY2 || medShipX3==longShipX3 && medShipY3==longShipY3 || medShipX3==longShipX4 && medShipY3==longShipY4){
                if(medShipX1<=10){ // moves all parts of the ship if the position of the third part is the same as one of the positions of the long ship or if the third part is off the coordinate plane
                    medShipX1 = medShipX1 + 2; // moves the bow of the ship east
                }else{
                    medShipX1 = medShipX1 - 2; // moves the bow of the ship west
                }
            }
            medShipX2 = medShipX1 + 1; // confirms that the second part of the ship is to the right of the bow
            medShipX3 = medShipX2 + 1; // confirms that the third part of the ship is to the right of the second part
        }
    }else{
        var medShipX2 = medShipX1; // intiates the x axis variables that will be the same because the ship is vertical
        var medShipX3 = medShipX1;
        var medShipX4 = medShipX1;
        if(medShipY1>10){ // decides which side of the ship the 2 other parts should be depending on if there is space on the coordinate plane
            var medShipY2 = medShipY1 - 1; // intializes the y variable of the second part of the ship north of the bow
            if(medShipX2==longShipX1 && medShipY2==longShipY1 || medShipX2==longShipX2 && medShipY2==longShipY2 || medShipX2==longShipX3 && medShipY2==longShipY3 || medShipX2==longShipX4 && medShipY2==longShipY4){
                if(medShipY1>=2){ // moves both parts of the ship if the position of the second part is the same as one of the positions of the long ship or if the second part is off the coordinate plane
                    medShipY1 = medShipY1 - 2; // moves the bow of the ship north
                }else{
                    medShipY1 = medShipY1 + 2; // moves the bow of the ship south
                }
            }
            medShipY2 = medShipY1 - 1; // confirms that the second part of the ship is to the north of the bow
            
            var medShipY3 = medShipY2 - 1; // intiates the y variable of the third part of the ship north of the second part
            if(medShipX3==longShipX1 && medShipY3==longShipY1 || medShipX3==longShipX2 && medShipY3==longShipY2 || medShipX3==longShipX3 && medShipY3==longShipY3 || medShipX3==longShipX4 && medShipY3==longShipY4){
                if(medShipY1>=2){ // moves all parts of the ship if the position of the third part is the same as one of the positions of the long ship or if the third part is off the coordinate plane
                    medShipY1 = medShipY1 - 2; // moves the bow of the ship north
                }else{
                    medShipY1 = medShipY1 + 2; // moves the bow of the ship south
                }
            }
            medShipY2 = medShipY1 - 1; // confirms that the second part of the ship is to the north of the bow
            medShipY3 = medShipY2 - 1; // confirms that the third part of the ship is to the north of the second part
        }else{
            var medShipY2 = medShipY1 + 1; // intializes the y variable of the second part of the ship south of the bow
            if(medShipX2==longShipX1 && medShipY2==longShipY1 || medShipX2==longShipX2 && medShipY2==longShipY2 || medShipX2==longShipX3 && medShipY2==longShipY3 || medShipX2==longShipX4 && medShipY2==longShipY4){
                if(medShipY1<=10){ // moves both parts of the ship if the position of the second part is the same as one of the positions of the long ship or if the second part is off the coordinate plane
                    medShipY1 = medShipY1 + 2; // moves the bow of the ship south
                }else{
                    medShipY1 = medShipY1 - 2; // moves the bow of the ship north
                }
            }
            medShipY2 = medShipY1 + 1; // confirms that the second part of the ship is to the southth of the bow
            
            var medShipY3 = medShipY2 + 1;
            if(medShipX3==longShipX1 && medShipY3==longShipY1 || medShipX3==longShipX2 && medShipY3==longShipY2 || medShipX3==longShipX3 && medShipY3==longShipY3 || medShipX3==longShipX4 && medShipY3==longShipY4){
                if(medShipY1<=10){ // moves ship if the position for the third part is the same as a position for the long ship
                    medShipY1 = medShipY1 + 2;
                }else{
                    medShipY1 = medShipY1 - 2;
                }
            }
            medShipY2 = medShipY1 + 1; // confirms that the second part of the ship is to the southth of the bow
            medShipY3 = medShipY2 + 1; // makes sure that the third part is north of the second part
        }
    }
    
    var fLongShipX1 = readInt("Choose X axis of the bow of your Long Ship. (0 - 12) ");
    while(fLongShipX1<0 || fLongShipX1>12){ // ask the user for the x coordinate of their long ship
        fLongShipX1 = readInt("Please choose X axis between 0 and 12. ");
    }
    var fLongShipY1 = readInt("Choose Y axis of the bow of your Long Ship. (0 - 12) ");
    while(fLongShipY1<0 || fLongShipY1>12){ // ask the user for the y coordinate of their long ship
        fLongShipY1 = readInt("Please choose Y axis between 0 and 12. ");
    }
    var direction = readInt("Choose what direction you want your ship to face, the 3 other parts of the ship will be placed behind the bow. (1 = North, 2 = East, 3 = South, 4 = West) ");
    while(direction!=1 && direction!=2 && direction!=3 && direction!=4){ // asks the user to pick a direction for the ship to face
        direction = readInt("Please choose 1 2 3 or 4 . (1 = North, 2 = East, 3 = South, 4 = West) ");
    }
    if(direction==1){ // direction = north
        var fLongShipY2 = fLongShipY1 + 1; // puts 3 parts of ship south of the bow
        var fLongShipY3 = fLongShipY2 + 1;
        var fLongShipY4 = fLongShipY3 + 1;
        if(fLongShipY4>12){
            println("Your ship is off the grid, it will be moved 3 points north. ");
            fLongShipY1 = flongShipY1 - 3; // moves the ship if it goes off the coordinate plane
            fLongShipY2 = fLongShipY1 + 1;
            fLongShipY3 = fLongShipY2 + 1;
            fLongShipY4 = fLongShipY3 + 1;
        }
        var fLongShipX2 = fLongShipX1; // intiates x axis variable that are the same because the ship is vertical
        var fLongShipX3 = fLongShipX1;
        var fLongShipX4 = fLongShipX1;
    }
    else if(direction==2){ // direction = east
        var fLongShipX2 = fLongShipX1 - 1; // puts three parts of ship west of the bow
        var fLongShipX3 = fLongShipX2 - 1;
        var fLongShipX4 = fLongShipX3 - 1;
        if(fLongShipX4<0){
            println("Your ship is off the grid, it will be moved 3 points east. ");
            fLongShipX1 = fLongShipX1 + 3; // moves the ship if it goes off the coordinate plane
            fLongShipX2 = fLongShipX1 - 1;
            fLongShipX3 = fLongShipX2 - 1;
            fLongShipX4 = fLongShipX3 - 1;
        }
        var fLongShipY2 = fLongShipY1; // intiates y axis variables that will be the same because the ship is horizontal
        var fLongShipY3 = fLongShipY1;
        var fLongShipY4 = fLongShipY1;
    }
    else if(direction==3){ // direction = south
        var fLongShipY2 = fLongShipY1 - 1; // puts 3 parts of the ship north of the bow
        var fLongShipY3 = fLongShipY2 - 1;
        var fLongShipY4 = fLongShipY3 - 1;
        if(fLongShipY4>12){
            println("Your ship is off the grid, it will be moved 3 points south. ");
            fLongShipY1 = flongShipY1 + 3; // moves ship if it goes off the coordinate plane
            fLongShipY2 = fLongShipY1 - 1;
            fLongShipY3 = fLongShipY2 - 1;
            fLongShipY4 = fLongShipY3 - 1;
        }
        var fLongShipX2 = fLongShipX1; // intiates x axis variables that will be the same because the ship is vertical
        var fLongShipX3 = fLongShipX1;
        var fLongShipX4 = fLongShipX1;
    }
    else if(direction==4){ // direction = west
        var fLongShipX2 = fLongShipX1 + 1; // puts 3 parts of the ship east of the bow
        var fLongShipX3 = fLongShipX2 + 1;
        var fLongShipX4 = fLongShipX3 + 1;
        if(fLongShipX4<0){
            println("Your ship is off the grid, it will be moved 3 points west. ");
            fLongShipX1 = flongShipX1 - 3; // moves the ship if it goes off the coordinate plane
            fLongShipX2 = fLongShipX1 + 1;
            fLongShipX3 = fLongShipX2 + 1;
            fLongShipX4 = fLongShipX3 + 1;
        }
        var fLongShipY2 = fLongShipY1; // intiates y axis variables that will be the same because the ship is horizontal
        var fLongShipY3 = fLongShipY1;
        var fLongShipY4 = fLongShipY1;
    }
    
    var fMedShipX1 = readInt("Choose X axis of the bow of your Medium Ship. (0 - 12) ");
    while(fMedShipX1<0 || fMedShipX1>12){ // asks the user to choose the x coordinate of the bow of their ship
        fMedShipX1 = readInt("Please choose X axis between 0 and 12. ");
    }
    var fMedShipY1 = readInt("Choose Y axis of the bow of your Medium Ship. (0 - 12) ");
    while(fMedShipY1<0 || fMedShipY1>12){ // asks the user to choose the y coordinate of the bow of their ship
        fMedShipY1 = readInt("Please choose Y axis between 0 and 12. ");
    }
    if(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4){
        println("The coordinates for the bow of your Medium Ship are the same as a part of the Long Ship.");
        while(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4){
            fMedShipX1 = readInt("Choose a different X axis of the bow of your Medium Ship. (0 - 12) "); // asks the user for new coordinates if they are the same as parts of the long ship
            fMedShipY1 = readInt("Choose a different Y axis of the bow of your Medium Ship. (0 - 12) ");
        }
    }
    var direction = readInt("Choose what direction you want your ship to face, the 2 other parts of the ship will be placed behind the bow. (1 = North, 2 = East, 3 = South, 4 = West) ");
    while(direction!=1 && direction!=2 && direction!=3 && direction!=4){ // asks the user to pick a direction for their ship
        direction = readInt("Please choose 1 2 3 or 4 . (1 = North, 2 = East, 3 = South, 4 = West) ");
    }
    if(direction==1){ // direction = north
        var fMedShipY2 = fMedShipY1 + 1; // puts parts south of bow
        var fMedShipY3 = fMedShipY2 + 1;
        if(fMedShipY3>12){
            println("Your ship is off the grid, it will be moved 2 points north. ");
            fMedShipY1 = fMedShipY1 - 2; // moves ship if it is off the grid
            fMedShipY2 = fMedShipY1 + 1;
            fMedShipY3 = fMedShipY2 + 1;
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY2==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY2==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY2==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY2==fLongShipY4){
            if(fMedShipY1>2){
                println("Your medium ship is overlapping your long ship, it will be moved 2 points north.");
                fMedShipY1 = fMedShipY1 - 2; // moves ship if part of it is on a part of the long ship north if there is space
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 2 points south.");
                fMedShipY1 = fMedShipY1 + 2; // moves ship if part of it is on a part of the long ship south
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY3==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY3==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY3==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY3==fLongShipY4){
            if(fMedShipY1>1){
                println("Your medium ship is overlapping your long ship, it will be moved 1 point north.");
                fMedShipY1 = fMedShipY1 - 1; // moves ship if part of it is on a part of the long ship north if there is space
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 1 point south.");
                fMedShipY1 = fMedShipY1 + 1; // moves ship if part of it is on a part of the long ship south
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4 || fMedShipY3>12){
            println("Your medium ship is overlapping your long ship, it will be moved 1 point south.");
            fMedShipY1 = fMedShipY1 + 1; // just in case the bow goes off the grid (grid = coordinate plane)
            fMedShipY2 = fMedShipY1 + 1;
            fMedShipY3 = fMedShipY2 + 1;
        }
        var fMedShipX2 = fMedShipX1; // intiates x axis variables that are the same because the ship is vertical
        var fMedShipX3 = fMedShipX1;
    }
    else if(direction==2){ // direction = east
        var fMedShipX2 = fMedShipX1 - 1; // puts 2 parts of ship west of bow
        var fMedShipX3 = fMedShipX2 - 1;
        if(fMedShipX3<0){
            println("Your ship is off the grid, it will be moved 2 points east. ");
            fMedShipX1 = fMedShipX1 + 2; // moves ship if it is off the grid
            fMedShipX2 = fMedShipX1 - 1;
            fMedShipX3 = fMedShipX2 - 1;
        }
        if(fMedShipX2==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX2==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX2==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX2==fLongShipX4 && fMedShipY1==fLongShipY4){
            if(fMedShipY1>2){
                println("Your medium ship is overlapping your long ship, it will be moved 2 points west.");
                fMedShipX1 = fMedShipX1 - 2; // moves ship if part of it is on a part of the long ship west if there is space
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 2 points east.");
                fMedShipX1 = fMedShipX1 + 2; // moves ship if part of it is on a part of the long ship east
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }
        }
        if(fMedShipX3==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX3==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX3==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX3==fLongShipX4 && fMedShipY1==fLongShipY4 || fMedShipX3>12){
            if(fMedShipY1>1){
                println("Your medium ship is overlapping your long ship, it will be moved 1 point west.");
                fMedShipX1 = fMedShipX1 - 1; // moves ship if part of it is on a part of the long ship west if there is space
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 1 point east.");
                fMedShipX1 = fMedShipY1 + 1; // moves ship if part of it is on a part of the long ship east
                fMedShipX2 = fMedShipY1 + 1;
                fMedShipX3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4){
            println("Your medium ship is overlapping your long ship, it will be moved 1 point west.");
            fMedShipY1 = fMedShipY1 - 1; // just in case the bow of the ship is overlapping the long ship
            fMedShipY2 = fMedShipY1 + 1;
            fMedShipY3 = fMedShipY2 + 1;
        }
        var fMedShipY2 = fMedShipY1; // intiates y axis variables that will be the same because the line is horizontal
        var fMedShipY3 = fMedShipY1;
    }
    else if(direction==3){ // direction = south
        var fMedShipY2 = fMedShipY1 - 1; // puts parts of ship north of bow
        var fMedShipY3 = fMedShipY2 - 1;
        if(fMedShipY3>12){
            println("Your ship is off the grid, it will be moved 2 points south. ");
            fMedShipY1 = fMedShipY1 + 2; // moves ship if it is off the grid
            fMedShipY2 = fMedShipY1 - 1;
            fMedShipY3 = fMedShipY2 - 1;
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY2==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY2==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY2==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY2==fLongShipY4){
            if(fMedShipY1>2){
                println("Your medium ship is overlapping your long ship, it will be moved 2 points north.");
                fMedShipY1 = fMedShipY1 - 2; // moves ship if part of it is on a part of the long ship north if there is space
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 2 points south.");
                fMedShipY1 = fMedShipY1 + 2; // moves ship if part of it is on a part of the long ship
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY3==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY3==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY3==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY3==fLongShipY4 || fMedShipY3<0){
            if(fMedShipY1>1){
                println("Your medium ship is overlapping your long ship, it will be moved 1 point north.");
                fMedShipY1 = fMedShipY1 - 1; // moves ship if part of it is on a part of the long ship north if there is space
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 1 point south.");
                fMedShipY1 = fMedShipY1 + 1; // moves ship if part of it is on a part of the long ship south
                fMedShipY2 = fMedShipY1 + 1;
                fMedShipY3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4){
            println("Your medium ship is overlapping your long ship, it will be moved 1 point north.");
            fMedShipY1 = fMedShipY1 - 1; // just in case the bow of the ship is on a part of the long ship
            fMedShipY2 = fMedShipY1 + 1;
            fMedShipY3 = fMedShipY2 + 1;
        }
        var fMedShipX2 = fMedShipX1; // intiates x axis variables that will be the same because the ship is vertical
        var fMedShipX3 = fMedShipX1;
    }
    else if(direction==4){ // direction = west
        var fMedShipX2 = fMedShipX1 + 1; // puts the parts of the ship east of the bow
        var fMedShipX3 = fMedShipX2 + 1;
        if(fMedShipX3<0){
            println("Your ship is off the grid, it will be moved 2 points west. ");
            fMedShipX1 = fMedShipX1 - 2; // moves the ship west of it is off the grid
            fMedShipX2 = fMedShipX1 + 1;
            fMedShipX3 = fMedShipX2 + 1;
        }
        if(fMedShipX2==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX2==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX2==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX2==fLongShipX4 && fMedShipY1==fLongShipY4){
            if(fMedShipY1>2){
                println("Your medium ship is overlapping your long ship, it will be moved 2 points west.");
                fMedShipX1 = fMedShipX1 - 2; // moves ship if part of it is on a part of the long ship west if theres space
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 2 points east.");
                fMedShipX1 = fMedShipX1 + 2; // moves ship if part of it is on a part of the long ship east
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }
        }
        if(fMedShipX3==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX3==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX3==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX3==fLongShipX4 && fMedShipY1==fLongShipY4 || fMedShipX3<0){
            if(fMedShipY1>1){
                println("Your medium ship is overlapping your long ship, it will be moved 1 point west.");
                fMedShipX1 = fMedShipX1 - 1; // moves ship if part of it is on a part of the long ship west if theres space
                fMedShipX2 = fMedShipX1 + 1;
                fMedShipX3 = fMedShipX2 + 1;
            }else{
                println("Your medium ship is overlapping your long ship, it will be moved 1 point east.");
                fMedShipX1 = fMedShipY1 + 1; // moves ship if part of it is on a part of the long ship
                fMedShipX2 = fMedShipY1 + 1;
                fMedShipX3 = fMedShipY2 + 1;
            }
        }
        if(fMedShipX1==fLongShipX1 && fMedShipY1==fLongShipY1 || fMedShipX1==fLongShipX2 && fMedShipY1==fLongShipY2 || fMedShipX1==fLongShipX3 && fMedShipY1==fLongShipY3 || fMedShipX1==fLongShipX4 && fMedShipY1==fLongShipY4){
            println("Your medium ship is overlapping your long ship, it will be moved 1 point east.");
            fMedShipY1 = fMedShipY1 + 1; // just in case the bow of the ship is overlapping a part of the long ship
            fMedShipY2 = fMedShipY1 + 1;
            fMedShipY3 = fMedShipY2 + 1;
        }
        var fMedShipY2 = fMedShipY1; // intiates y axis variables that will be same because the ship is horizontal
        var fMedShipY3 = fMedShipY1;

    }
    
    println("Your long ship is at: "); // prints the coordinates of the ship onto the screen
    println("(" + fLongShipX1 + ", " + fLongShipY1 + ")");
    println("(" + fLongShipX2 + ", " + fLongShipY2 + ")");
    println("(" + fLongShipX3 + ", " + fLongShipY3 + ")");
    println("and (" + fLongShipX4 + ", " + fLongShipY4 + ")");
    println("Your medium ship is at: ");
    println("(" + fMedShipX1 + ", " + fMedShipY1 + ")");
    println("(" + fMedShipX2 + ", " + fMedShipY2 + ")");
    println("and (" + fMedShipX3 + ", " + fMedShipY3 + ")");
    
    /* provides coordinates of enemy ship, use for troubleshooting when needed
    println("Enemy long ship is at: ");
    println("(" + longShipX1 + ", " + longShipY1 + ")");
    println("(" + longShipX2 + ", " + longShipY2 + ")");
    println("(" + longShipX3 + ", " + longShipY3 + ")");
    println("and (" + longShipX4 + ", " + longShipY4 + ")");
    println("Enemy medium ship is at: ");
    println("(" + medShipX1 + ", " + medShipY1 + ")");
    println("(" + medShipX2 + ", " + medShipY2 + ")");
    println("and (" + medShipX3 + ", " + medShipY3 + ")");
    */
    
    var turns = 0; // intiates the turns variable
    
    while(true){
        coordinate(); // calls coordinate function
        var userShotX = readInt("What is the x axis of your shot. (0-12) ");
        while(userShotX<0 || userShotX>12){ // asks the user for the x coordinate of where they want to shoot
            var userShotX = readInt("Please choose an x axis between 0 and 12. ");
        }
        var userShotY = readInt("What is the y axis of your shot. (0-12) ");
        while(userShotY<0 || userShotY>12){ // asks the user for the y coordinate of where they want to shoot
            var userShotY = readInt("Please choose an y axis between 0 and 12. ");
        }
        if(userShotX==longShipX1 && userShotY==longShipY1){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            longShipX1 = "sunk";
            longShipY1 = "sunk";
        }
        else if(userShotX==longShipX2 && userShotY==longShipY2){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            longShipX2 = "sunk";
            longShipY2 = "sunk";
        }
        else if(userShotX==longShipX3 && userShotY==longShipY3){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            longShipX3 = "sunk";
            longShipY3 = "sunk";
        }else if(userShotX==longShipX4 && userShotY==longShipY4){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            longShipX4 = "sunk";
            longShipY4 = "sunk";
        }
        else if(userShotX==medShipX1 && userShotY==medShipY1){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            medShipX1 = "sunk";
            medShipY1 = "sunk";
        }
        else if(userShotX==medShipX2 && userShotY==medShipY2){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            medShipX2 = "sunk";
            medShipY2 = "sunk";
        }
        else if(userShotX==medShipX3 && userShotY==medShipY3){
            println("You hit an enemy ship! "); // prints line and changes enemy variables to 'sunk' if user hits enemy ship with shot
            medShipX3 = "sunk";
            medShipY3 = "sunk";
        }else{
            println("You missed the enemy's ships. "); // prints line if user does not hit any enemy ships
        }
        if(longShipX1=="sunk" && longShipX2=="sunk" && longShipX3=="sunk" && longShipX4=="sunk" && longShipY1=="sunk" && longShipY2=="sunk" && longShipY3=="sunk" && longShipY4=="sunk"){
            println("You sunk the enemies long ship. "); // reminds user that they sunk the long ship after each turn
        }
        if(medShipX1=="sunk" && medShipX2=="sunk" && medShipX3=="sunk" && medShipY1=="sunk" && medShipY2=="sunk" && medShipY3=="sunk"){
            println("You sunk the enemies medium ship. "); // reminds the user that they sunk the medium ship after each turn
        }
        if(longShipX1=="sunk" && longShipX2=="sunk" && longShipX3=="sunk" && longShipX4=="sunk" && longShipY1=="sunk" && longShipY2=="sunk" && longShipY3=="sunk" && longShipY4=="sunk" && medShipX1=="sunk" && medShipX2=="sunk" && medShipX3=="sunk" && medShipY1=="sunk" && medShipY2=="sunk" && medShipY3=="sunk"){
            var win = "user"; // breaks the while loop and initiates the win variable to user if all the enemies ships are 'sunk'
            break;
        }
        var comShotX = Randomizer.nextInt(0,12); // randomly chooses a coordinate for the enemies shot
        var comShotY = Randomizer.nextInt(0,12);
        println("The enemy shoots at (" + comShotX + ", " + comShotY + ")."); // prints coordinates of enemies shot
        if(comShotX==fLongShipX1 && comShotY==fLongShipY1){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fLongShipX1 = "sunk";
            fLongShipY1 = "sunk";
        }
        else if(comShotX==fLongShipX2 && comShotY==fLongShipY2){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fLongShipX2 = "sunk";
            fLongShipY2 = "sunk";
        }
        else if(comShotX==fLongShipX3 && comShotY==fLongShipY3){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fLongShipX3 = "sunk";
            fLongShipY3 = "sunk";
        }else if(comShotX==fLongShipX4 && comShotY==fLongShipY4){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fLongShipX4 = "sunk";
            fLongShipY4 = "sunk";
        }
        else if(comShotX==fMedShipX1 && comShotY==fMedShipY1){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fMedShipX1 = "sunk";
            fMedShipY1 = "sunk";
        }
        else if(comShotX==fMedShipX2 && comShotY==fMedShipY2){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fMedShipX2 = "sunk";
            fMedShipY2 = "sunk";
        }
        else if(comShotX==fMedShipX3 && comShotY==fMedShipY3){
            println("The enemy hit your ship! "); // prints line and changes user variables to 'sunk' if the enemies shot hits the user's ship
            fMedShipX3 = "sunk";
            fMedShipY3 = "sunk";
        }else{
            println("The enemy missed! "); // prints line if the enemies shot does not hit a user ship
        }
        if(fLongShipX1=="sunk" && fLongShipX2=="sunk" && fLongShipX3=="sunk" && fLongShipX4=="sunk" && fLongShipY1=="sunk" && fLongShipY2=="sunk" && fLongShipY3=="sunk" && fLongShipY4=="sunk" && fMedShipX1=="sunk" && fMedShipX2=="sunk" && fMedShipX3=="sunk" && fMedShipY1=="sunk" && fMedShipY2=="sunk" && fMedShipY3=="sunk"){
            var win = "com"; // breaks the while loop and initiates the win variable to com if all the user ships are 'sunk'
            break;
        }
        turns = turns + 1; // add one to turns variable every turn
        if(turns>3){
            var quit = readLine("Do you want to retreat and end the game? (type 'yes' to quit) ");
            if(quit=="yes"){ // asks the user if they want to quit at the end of every turn after 3 turns
                var win = "tie"; // if user types yes, this breaks the while loop and initiates the win variable to tie
                break;
            }
        }
    }
    if(win=="user"){ // prints the number of turns and the winner if the user wins
        println("You defeated the enemy in " + turns + " turns and won the game! ");
        println("Thanks for playing, game by Teghveer Singh Ateliey. ");
    }
    else if(win=="com"){ // prints the number of turns and the winner if the enemy wins
        println("The enemy sank all your ships in " + turns + " turns and you are defeated. ");
        println("Thanks for playing, game by Teghveer Singh Ateliey. ");
    }
    else if(win=="tie"){ // prints the number of turns and the winner if it's a tie
        println("After " + turns + " turns you retreated and ended the battle. ");
        println("Thanks for playing the game !!!. ");
    }
}

function startScreen(){ // prints the title and what to do when the program starts
    println("Welcome to BattleShip");
    println("Just follow the instructions on your screen to play.");
    var start = readLine("Press enter to start. ");
}

function enter(){ // adds one blank line to the screen (works like the enter button)
    println(" ");
}

function coordinate(){ // gives a visual of the coordinate plane to the user at the start of every turn
    println(" ");
    println("    0   1   2   3   4   5   6   7   8   9   10  11  12");
    println(" 0  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 1  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 2  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 3  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 4  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 5  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 6  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 7  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 8  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println(" 9  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println("10  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println("11  X   X   X   X   X   X   X   X   X   X   X   X   X");
    println("12  X   X   X   X   X   X   X   X   X   X   X   X   X");
}