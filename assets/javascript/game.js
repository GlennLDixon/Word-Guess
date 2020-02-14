// Global Var
//=====================================================================
// Arrays and variables needed for holding data
const sitcoms = ["Martin", "Family Matters", "A Different World", "Living Single", "Smart Guy", "Fresh Prince", "The Wayans Bros", "Steve Harvey Show", "The Parkers", "The Jamie Foxx Show", "In Living Color", "Moesha", "Kenan and Kel", "The PJs", "Cousin Skeeter"];
let secretWord = "";
let lettersinWord = [];
const numBlanks = 0;
let blanksAndSucesses = [];
let wrongGuesses = [];

// Game Counters
let winCount = 0;
let lossCount = 0;
const guessesLeft = 10;

window.addEventListener('keypress', startGame, false);

function startGame(e) {
    if (e.code) {
        console.log("game started");
    }
}
