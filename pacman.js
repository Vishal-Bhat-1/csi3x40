function createGame(n) {
    const game = Array(n).fill('.');
    const pacmanIndex = Math.floor(Math.random() * n);
    let ghostIndex;
    let fruitIndex;
    
    // Ensure the ghost and fruit do not overlap with each other or pacman
    do {
        ghostIndex = Math.floor(Math.random() * n);
    } while (ghostIndex === pacmanIndex);
    
    do {
        fruitIndex = Math.floor(Math.random() * n);
    } while (fruitIndex === pacmanIndex || fruitIndex === ghostIndex);
    
    game[pacmanIndex] = 'C';
    game[ghostIndex] = '^';
    game[fruitIndex] = '@';
    
    return game;
}

console.log(createGame(10));