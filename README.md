# BattleShip-Game
The repository contains a text-based JavaScript game that I created for a school project. The game is based on BattleShip and was created on January 24, 2019.

## How to Play

Upon running the script, the game will prompt the player to select the coordinates and direction of the bows of their two battleships. The game takes place on a 12 x 12 coordinate plane and will automatically correct the player's ships if they are placed out of the game area.

Once the player's ships are placed, the game will randomly place two enemy ships on a 12 x 12 plane. The player will now be prompted to choose coordinates to "shoot" and will be notified if the coordinate they chose landed on an enemy battleship. Each round the player and the enemy will both shoot once, with the enemy shots landing on random coordinates. A battleship is sunk when all its points on the plane are hit with a shot.

The player will be prompted to end the game at the end of each round after three rounds. The game also ends once either the player or the enemy has all their battleships sunk. Once the game ends, the program will print the number of rounds that were played.

## How it Works 

This program first gives the computer 8 variables for its long ship and 6 variables for its medium ship. Then it asks the user to fill in 4 variables for the long ship and the medium ship and fills in the other 10 variables for both ships depending on what direction the user wants the ships to face. The first ~400 lines of the code is dedicated to determining the coordinates for each node of all four ships on the plane. The rest of the code is the game itself and interfaces with the player.

After the user chooses where they want there ships to be, the actual game starts. The user gets to choose the x axis and the y axis of where they want to shoot, if they hit an enemy ship, it will be printed to the screen and the variables that held the coordinates of that part of the enemy ship would become "sunk". If the user misses the enemy ships, it will just be printed to the screen. 

After the user shoots, the computer randomly picks a coordinate and shoots, if it hits one of the user's ships, it will be printed to the screen and the user's variable
that was in that place will become "sunk". If the computer misses, the game will go on as usual. 

*This game is complete and will not be updated or added upon.*
