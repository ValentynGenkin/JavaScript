const drinkTypes = ['cola', 'lemonade', 'water'];

const drinkTray = [];

//Selects a random drink in drinkTypes
function randomDrink () {
  a = Math.floor(Math.random()*3);
  return drinkTypes[a];
}
const drink = randomDrink();

// Copy of drinkTypes  
const cloneDrinkTypes = Object.assign([], drinkTypes);


  for (i = 0; drinkTray.length < 2 ; i++){
    drinkTray.push(randomDrink()); 
  if (drinkTray[0] !== drink) {
    drinkTray.push(drink)
  } else if (drinkTray[0] === drink){
    drinkTypes.splice(drinkTypes.indexOf(drink), 1)
    drinkTray.push(drinkTypes[Math.floor(Math.random()*drinkTypes.length)])
  }for (i = 0; i < cloneDrinkTypes.length; i++){
    drinkTray.push(cloneDrinkTypes[i])
  }
  }

  // Shuffle all drinks in a tray
  function shuffle() {
    return Math.random () - 0.5; 
  }

console.log(`Hey guys, I brought a ${drinkTray.sort(shuffle).join(', ')}!`)
console.log(`Hey guys, I brought a ${drinkTray.sort(shuffle).join(', ')}!`)