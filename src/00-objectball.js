// function gameObject() {
//   return {
//     home: {
//       teamName: "Brooklyn Nets",
//       colors: ["Black", "White"],
//       players: {
//         "Alan Anderson": {
//           number: 0,
//           shoe: 16,
//           points: 22,
//           rebounds: 12,
//           assists: 12,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 1,
//         },
//         "Reggie Evans": {
//           number: 30,
//           shoe: 14,
//           points: 12,
//           rebounds: 12,
//           assists: 12,
//           steals: 12,
//           blocks: 12,
//           slamDunks: 7,
//         },
//         "Brook Lopez": {
//           number: 11,
//           shoe: 17,
//           points: 17,
//           rebounds: 19,
//           assists: 10,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 15,
//         },
//         "Mason Plumlee": {
//           number: 1,
//           shoe: 19,
//           points: 26,
//           rebounds: 12,
//           assists: 6,
//           steals: 3,
//           blocks: 8,
//           slamDunks: 5,
//         },
//         "Jason Terry": {
//           number: 31,
//           shoe: 15,
//           points: 19,
//           rebounds: 2,
//           assists: 2,
//           steals: 4,
//           blocks: 11,
//           slamDunks: 1,
//         },
//       },
//     },
//     away: {
//       teamName: "Charlotte Hornets",
//       colors: ["Turquoise", "Purple"],
//       players: {
//         "Jeff Adrien": {
//           number: 4,
//           shoe: 18,
//           points: 10,
//           rebounds: 1,
//           assists: 1,
//           steals: 2,
//           blocks: 7,
//           slamDunks: 2,
//         },
//         "Bismak Biyombo": {
//           number: 0,
//           shoe: 16,
//           points: 12,
//           rebounds: 4,
//           assists: 7,
//           steals: 7,
//           blocks: 15,
//           slamDunks: 10,
//         },
//         "DeSagna Diop": {
//           number: 2,
//           shoe: 14,
//           points: 24,
//           rebounds: 12,
//           assists: 12,
//           steals: 4,
//           blocks: 5,
//           slamDunks: 5,
//         },
//         "Ben Gordon": {
//           number: 8,
//           shoe: 15,
//           points: 33,
//           rebounds: 3,
//           assists: 2,
//           steals: 1,
//           blocks: 1,
//           slamDunks: 0,
//         },
//         "Brendan Haywood": {
//           number: 33,
//           shoe: 15,
//           points: 6,
//           rebounds: 12,
//           assists: 12,
//           steals: 22,
//           blocks: 5,
//           slamDunks: 12,
//         },
//       },
//     },
//   };
// }

// const homeTeam = gameObject().home;
// const awayTeam = gameObject().away;
// const allPlayers = { ...homeTeam.players, ...awayTeam.players };

// function numPointsScored(playerName) {
//   for (player in allPlayers) {
//     if (player === playerName) return allPlayers[playerName].points;
//   }
// }

// function shoeSize(playerName) {
//   for (player in allPlayers) {
//     if (player === playerName) return allPlayers[playerName].shoe;
//   }
// }

// function teamColors(team) {
//   return homeTeam.teamName === team ? homeTeam.colors : awayTeam.colors;
// }

// function teamNames() {
//   return [homeTeam.teamName, awayTeam.teamName];
// }

// function playerNumbers(team) {
//   const data = gameObject();
//   for (let key in data) {
//     const theTeam = data[key];
//     if (theTeam.teamName === team) {
//       return Object.keys(theTeam.players).map((player) => {
//         return theTeam.players[player].number;
//       });
//     }
//   }
// }

// function playerStats(nameOfPlayer) {
//   for (player in allPlayers) {
//     if (player === nameOfPlayer) return allPlayers[nameOfPlayer];
//   }
// }

// function bigShoeRebounds() {
//   const data = gameObject();
//   const memory = { shoeSize: 0 };
//   for (let key in data) {
//     const theTeam = data[key];
//     for (let playerName in theTeam.players) {
//       const player = theTeam.players[playerName];
//       if (player.shoe > memory.shoeSize) {
//         memory.shoeSize = player.shoe;
//         memory.rebounds = player.rebounds;
//       }
//     }
//   }
//   return memory.rebounds;
// }

// function mostPointsScored() {
//   const players = allPlayers;
//   let mostPoints = 0;
//   let highestScoringPlayer = "";
//   for (let player in players) {
//     if (playerStats(player).points > mostPoints || mostPoints === 0) {
//       highestScoringPlayer = player;
//       mostPoints = playerStats(player).points;
//     }
//   }
//   return highestScoringPlayer;
// }

// function eachTeamScores(team) {
//   const data = gameObject();
//   for (let key in data) {
//     const theTeam = data[key];
//     if (theTeam.teamName === team) {
//       return Object.keys(theTeam.players).map((player) => {
//         return theTeam.players[player].points;
//       });
//     }
//   }
// }

// const homeTeamScores = eachTeamScores("Brooklyn Nets");
// const awayTeamScores = eachTeamScores("Charlotte Hornets");

// function sum(input) {
//   if (toString.call(input) !== "[object Array]") return false;

//   var total = 0;
//   for (var i = 0; i < input.length; i++) {
//     if (isNaN(input[i])) {
//       continue;
//     }
//     total += Number(input[i]);
//   }
//   return total;
// }

// function winningTeam() {
//   if (sum(homeTeamScores) > sum(awayTeamScores)) {
//     return homeTeam.teamName;
//   } else {
//     return awayTeam.teamName;
//   }
// }

// function playerWithLongestName() {
//   const homePlayerNameArray = Object.keys(homeTeam.players);
//   const awayPlayerNameArray = Object.keys(awayTeam.players);
//   const justNames = homePlayerNameArray.concat(awayPlayerNameArray);
//   let longestStr = "";
//   const check = (str) => {
//     if (str.length > longestStr.length) longestStr = str;
//   };
//   justNames.forEach((item) => {
//     check(typeof item === "string" ? item : longestString(item));
//   });
//   return longestStr;
// }

// function mostSteals() {
//   const players = allPlayers;
//   let mostSteals = 0;
//   let highestStealingPlayer = "";
//   for (let player in players) {
//     if (playerStats(player).steals > mostSteals || mostSteals === 0) {
//       highestStealingPlayer = player;
//       mostSteals = playerStats(player).steals;
//     }
//   }
//   return highestStealingPlayer;
// }

// function doesLongNameStealATon() {
//   if (playerWithLongestName() === mostSteals()) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

function gameObject(){
    const teams={
        home:{
            teamName: 'homeBrooklyn Nets',
            colors:["Black", "White"],
            players:{
                "Alan Anderson	":{
                    "number":0,
                    "Shoe":16,
                    "points":16,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "Shoe":14,
                    "points":12,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":12,
                    "Blocks":12,
                    "Slam Dunks":7,
                },
                "Brook Lopez":{
                    "number":11,
                    "Shoe":17,
                    "points":17,
                    "Rebounds":19,
                    "Assists":10,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":15,
                },
            },
        },
        away:{
            teamName: 'Charlotte Hornets',
            colors:["Turquoise", "Purple"],
            players:{
                "Alan Anderson	":{
                    "number":0,
                    "Shoe":16,
                    "points":16,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "Shoe":14,
                    "points":12,
                    "Rebounds":12,
                    "Assists":12,
                    "Steals":12,
                    "Blocks":12,
                    "Slam Dunks":7,
                },
                "Brook Lopez":{
                    "number":11,
                    "Shoe":17,
                    "points":17,
                    "Rebounds":19,
                    "Assists":10,
                    "Steals":3,
                    "Blocks":1,
                    "Slam Dunks":15,
                },
            },
        
        },
    }
    console.log("Object.entries(oo) =>", Object.entries(teams));
}
console.log(gameObject())