// FUNÇÃO createPlayer() - CRIAR JOGADORES
function createPlayer(name,symbol) {
    return {name,symbol}
}
// FUNÇÃO TicTacToeGame() - PRINCIPAL
function TicTacToeGame () {
    let board = Array(9).fill(null);
    let players = [];
    let currentPlayer;

    // FUNÇÃO initializePlayers() - CHAMA O CREATE PLAYER
    const initializePlayers = () => {
        players = [createPlayer('Player-1','X'),createPlayer('Player-2','O')]
        currentPlayer = players[0]
    };
    // FUNÇÃO switchPlayer() -  ALTERNA ENTRE P1 E P2
    const switchPlayer = () => {
        if (currentPlayer === players[0]) {
            currentPlayer = players[1]
        } else {
            currentPlayer = players[0]
        }
    };
    // FUNÇÃO makeMove() - FAZ A JOGADA E CHAMA switchPlayer
    const makeMove = (position) => {
        // SO PODE FAZER A JOGADA SE position === null / ESTIVIER VAZIO
        if (!board[position]) {
            board[position] = currentPlayer.symbol
            updateBoard()
            if (!checkWinOrDraw()) {
                switchPlayer();
            }
        }
    }
    // FUNÇÃO checkWinOrDraw() - VERIFICAR VITORIA / EMPATE **
    const checkWinOrDraw = () => {
        const winCondition = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ]

        // Verifica se há uma condição de vitória
        const hasWon = winCondition.some(combination => {
            return combination.every(index => board[index] === currentPlayer.symbol);
        });

        if (hasWon) {
            alert(`${currentPlayer.name} Venceu!`);
            resetGame();
            return true;
        }

        // Verifica empate
        const isDraw = board.every(cell => cell !== null);
        if (isDraw) {
            alert('Empate!');
            resetGame();
            return true;
        }

        return false;
    };
    // FUNÇÃO PARA CRIAR E RENDERIZAR O TABULEIRO NO DOM
    const displayBoard = () => {

    const board = document.querySelector('.board');
    board.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell'); 
        cell.dataset.position = i; 
        cell.addEventListener('click', () => makeMove(i));
        board.appendChild(cell); 
    }

    // Cria e adiciona o botão de reset ao board
    const resetButton = document.createElement('button');
    resetButton.id = 'reset';          
    resetButton.textContent = 'Reiniciar Jogo';
    resetButton.addEventListener('click', resetGame);
    board.appendChild(resetButton);   
    }

    // FUNÇÃO PARA ATUALIZAR O TABULEIRO NO DOM
    const updateBoard = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    };
    // FUNÇÃO resetGame - REINICIAR O JOGO
    const resetGame = () => {
        board = Array(9).fill(null);
        initializePlayers();
        updateBoard();
    };
    return { initializePlayers,displayBoard,resetGame,checkWinOrDraw }
}


const game = TicTacToeGame();
game.initializePlayers();
game.displayBoard();