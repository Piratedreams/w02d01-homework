console.log('running');

// A light switch that can be either on or off.

// A boolean value since it is binary for its settings. Either on or off, true or false.

// A user 's email address.

    // A string because you're allowed to have Characters and whole sentences.

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.

    // An object because those are the characteristics of the object.

// A list of student names from our class.

    // An array for listing different values.


// A list of student names from our class, each with a location.

    // Using an array to have the students and having the students that are objects that give them details.

// A list of student names from our class, each with a location and each with a list of favorite tv shows.

    // An array of students with objects again just add the strings of their location and of their favorite TV show within the objects.



// const rainbowColors = ["red", "orange", "yellow", "green", "Blue", "purple"];

// console.log(rainbowColors[4]);

// const ben = {
//     location: "Denver",
//     hobby: "Photography",
//     favoriteFood: "Carbonara",
//     favoriteDataType: "Boolean",
// }

// console.log(ben.hobby);

// const crazyObject = {
//     taco: [{
//             meat: 'steak',
//             cheese: ['panela', 'queso', 'chihuahua']
//         },
//         {
//             meat: 'chicken',
//             salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//         },
//     ],
//     larry: {
//         nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//         quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//         characters: [{
//                 name: "Jeff",
//                 occupation: "manager"
//             },
//             {
//                 name: "funkhauser",
//                 occupation: "tv dude"
//             },
//             {
//                 name: "susie",
//                 occupation: "jeffs wife",
//                 favourtieHobby: "Swearing at Larry and Jeff"
//             },
//         ]
//     }
// }
// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                            }
                        }
                    }
                }
            }
        }
    }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
