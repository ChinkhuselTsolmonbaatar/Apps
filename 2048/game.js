class Game2048{
    constructor(){
        this.tiles = Array(16).fillnull;
        this.gameBoard = document.getElementById('game-board');
        this.scoreDisplay = document.getElementById('score');
        this.restartButton = document.getElementById('restart');
        this.initGame();
    }

    initGame(){
        this.score = 0;

        this.renderBoard();
    }

    renderBoard()
    {
        
        this.scoreDisplay.textContent = 'Score: ${this.score}';
    }
}
document.addEventListener('DOMContentLoaded', () => new Game2048());