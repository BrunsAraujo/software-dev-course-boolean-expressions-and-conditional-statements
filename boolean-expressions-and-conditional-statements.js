/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
//HOME ASSIGNMENT CODE
const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;
const hasGold = false;
const trustHorse = true;

console.log("You wake up beside a misty river. Two paths lie ahead: one toward a castle, one toward a bridge guarded by an ogre.");
const choice = readline.question("Do you go to the 'castle' or the 'bridge'? ");

if (choice === "castle") {
  if ((hasMap || hasCompass) && hasTorch) {
    console.log("You navigate through foggy terrain and arrive at the castle gates.");
    const rideHorse = readline.question("A talking horse offers you a ride. Do you accept? (yes/no) ");
    if (rideHorse === "yes" && trustHorse) {
      console.log("The horse gallops through secret trails and leads you to treasure!");
    } else {
      console.log("You walk on foot and reach the castle tired, but alive.");
    }
  } else {
    console.log("Without proper tools, you lose your way in the fog.");
  }
} else if (choice === "bridge") {
  if (hasSword && (hasGold || !hasGold)) {
    console.log("An ogre stops you and demands gold.");
    if (hasGold==="yes") {
      console.log("You offer him gold. He lets you pass.");
    } else {
      console.log("You raise your sword and fend off the ogre!");
    }
  } else {
    console.log("You have no weapon. The ogre growls and blocks your path.");
  }
} else {
  console.log("Confused by the terrain, you wander into the woods and disappear into legend...");
}