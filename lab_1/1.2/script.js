const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1
// const [aa, bb] = Object.entries(game.scored);
// console.log(aa, bb);
for (const [countGoal, players] of Object.entries(game.scored)) {
    console.log(`Goal ${Number(countGoal)+1}: ${players}`);
}

// 2
const odds = Object.values(game.odds);
let tb = 0;
for (const i of odds) {
    tb += i;
}
console.log(tb/odds.length);

// 3
const entries_odds = Object.entries(game.odds);
console.log(entries_odds);

for (const [key, value] of entries_odds) {
    // console.log(game[key] ?? "draw", value);
    const oddStr = key == 'x' ? 'draw' : `victory ${game[key]}`;
    console.log(`Odd of ${oddStr}: ${value}`);
};

// BONUS
game.scores = {};

const scored = game.scored.sort();


/**
 * game.scores['<tên cầu thủ>'] = <số bàn thắng>
 * ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
 * ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
*/


// for (const i of scored) {
//     let dem = 0;
//     let so_ban_thang = 0;
//     for (const j of scored) {
//         if (game.scores[i] == game.scores[j]) {
//             dem++;
//         }
//         so_ban_thang = dem;
//         game.scores[i] = so_ban_thang;
//         break;
//     }
// }

// for (let i = 0; i < scored.length; i++) {
//     if (i )
// }

// ['Gnarby', 'Hummels', 'Lewandowski', 'Lewandowski']
// for (let i = 0; i < scored.length; i++) {
//     let count = 1;
//     console.log(i);
//     while (scored[i] == scored[i+1]) {
//         count++;
//         i++;
//     }
//     game.scores[scored[i]] = count;
// }
// console.log(scored);
// console.log(scored[1]);
// console.log(game.scores);

const scores = {};

for (const player of game.scored) {
    scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);