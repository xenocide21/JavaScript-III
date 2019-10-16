/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
    return `${this.name} was killed`
};
GameObject.prototype.heal = function(){
   return `${this.name} was healed to full health`
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes){
    GameObject.call(this, attributes);
    this.healthPoints = attributes.healthPoints;
    this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage`
};

CharacterStats.prototype.resurrected = function(){
    return `${this.name} was resurrected back to full life`;
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes){
    CharacterStats.call(this, attributes);
    this.guild = attributes.guild;
    this.faction = attributes.faction;
    this.language = attributes.language;
    this.weapons = attributes.weapons;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
    return (`${this.name} says "prepare for battle" in ${this.language}`)
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const oracle = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Yuui',
    guild: 'Legion',
    faction: 'Union of Fury',
    weapons: [
      'Optare Rogar II',
    ],
    language: 'Vail',
  });

  const warrior = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'KhaosSlayer',
    guild: 'Legion',
    faction: 'Union of Fury',
    weapons: [
      'Mellan Skia II',
    ],
    language: 'Nordein',
  });

  const ranger = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    guild: 'Forest Kingdom',
    faction: 'Alliance of Light',
    weapons: [
      'Artraiya Adein',
    ],
    language: 'Human',
  });

  console.log(oracle.createdAt); // Today's date
  console.log(ranger.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(warrior.healthPoints); // 15
  console.log(oracle.name); // Yuui
  console.log(warrior.faction); // Union of Fury
  console.log(oracle.weapons); // Optare Rogar II
  console.log(ranger.language); // Vail
  console.log(warrior.guild); //KhaosSlayer's Guild
  //console.log(ranger.greet()); // Lilith offers a greeting in Vail.
  console.log(oracle.greet());
  console.log(oracle.takeDamage()); // Yuui took damage.
  console.log(oracle.heal());
  console.log(warrior.destroy()); // KhaosSlayer was removed from the game.
  console.log(warrior.resurrected());


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!