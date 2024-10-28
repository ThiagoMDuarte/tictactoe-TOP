// FUNÇÃO createPlayer() - CRIAR JOGADORES
function createPlayer(name,symbol) {
    return {name,symbol}
}
// FUNÇÃO TicTacToeGame() - PRINCIPAL
function TicTacToeGame () {
    let board = Array(9).fill(null);
    let players = [];
    let currentPlayer;
    // FUNÇÃO initializePlayer() - CHAMA O CREATE PLAYER
    const initializePlayer = () => {
        players = [createPlayer('Player1','X'),createPlayer('Player2','O')]
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
            // MUDAR O CURRENTPLAYER
            switchPlayer()
            //ATUALIZAR O BOARD
            updateBoard()
        }
    }
    // FUNÇÃO checkWinOrDraw() - VERIFICAR VITORIA / EMPATE **

    // FUNÇÃO displayBoard() - EXIBIR TABULEIRO NO DOM

    // FUNÇÃO updateBoard() - MODIFICAR O DOM

    // FUNÇÃO resetGame - REINICIAR O JOGO 
}
    