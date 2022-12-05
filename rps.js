const ROCK = {toString: () => "Rock",  beats: () => (other) => other === SCISSORS}
const PAPER = {toString: () => "Paper",  beats: () => (other) => other === ROCK}
const SCISSORS = {toString: () => "Scissors",  beats: () => (other) => other === PAPER}

const MOVES = [ROCK,PAPER,SCISSORS]

for (const moveA of MOVES){
    for (const moveB of MOVES){    
        console.log(`${moveA} beats ${moveB} ? ${moveA.beats(moveB) ? 'Yes' : 'No'}`)
    }
}
