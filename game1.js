const readlineSync = require('readline-sync');

const name = readlineSync.question ('What is your players Name: ');

readlineSync.question(name + ' Welcome to this RPG, good luck on your adventure...');

const badGuys = ['Wind', 'Earth', 'Fire', 'Water'];
const treasure = ["Foretitude", "Growth", "Will", "Power"];
var prize = [];
let userHealth = 30;
const options = ["Walk", "Exit", "Print"];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower= Math.floor(Math.random() * (4-2.5+6) + 3);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    console.log(badGuy);
    let badGuysHealth = 30;
    const badGuysPower = Math.floor(Math.random() * (4-2.7+4) + 5);

    const index = readlineSync.keyInSelect(options, 'How would you like to continue')

    if (options[index] == "Exit"){
        return userHealth = 0;
    }
    else if (options[index] == "Print"){
        console.log(name + ': \n' + userHealth + '\n treasure:' + pickUp);
    }
    else if (options[index] === "Walk"){
        let key = Math.random();
        if (key <= .3){
            console.log("Walking...")
        }
        else if (key >= .3){
            console.log(badGuy + " showed up...")

            while(badGuysHealth > 0 && userHealth > 0){
                
                const user = readlineSync.question ("Would you like to run? enter 'r' or  to attack hit 'a'");
                
                switch (user){
                    case 'r': // Get away
                    const run = Math.random();
                    if(run < .5){
                        console.log('You were attacked before you could get away ' + badGuy + ' hits you with ' + badGuysPower);
                  } else{
                      console.log(' you got away successfully');
                      break;
                  }
                    case 'a': // attack 
                    badGuysHealth = badGuysHealth - attackPower;
                    console.log("Your attack hits " + badGuy + " dealing " + attackPower + " damage");
                    userHealth = userHealth - badGuysPower;
                    console.log(badGuy + " hit you dealing " + badGuysPower)
                    
                    if (badGuysHealth <=0){
                        console.log("You defeated " + badGuy + '\n' + " you received: " +pickUp)
                        let loot = Math.random();
                        if(loot <= .3){
                            prize.push(pickUp);
                        }
                        else if (userHealth <=0){
                            console.log(badGuy + "Has defeated you, GAME OVER");
                        }
                    }

              }
            }
   
        }

    }
}
while(userHealth > 0){
    UserRestore = function(){
        userActive = true;
        userHealth =  40;
        };
        UserRestore();
        game();
}