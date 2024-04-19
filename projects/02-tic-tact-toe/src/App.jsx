// Importamos los Hooks necesarios de React
import { useState } from "react";
import confetti from 'canvas-confetti';


// Importamos el componente Square que representa un cuadrado del tablero
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.jsx"
import { checkWinnerFrom } from "./Logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"


// Componente principal App que maneja el estado del juego
function App() {
  // Estado inicial del tablero con 9 cuadrados vacíos
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado inicial del turno, comienza con X
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)




  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Función para actualizar el tablero y cambiar el turno
  const updateBoard = (index) => {
    if (board[index] || winner) return // Si el cuadrado ya está ocupado, no hacer nada
    const newBoard = [...board]; // Crea una copia del tablero actual
    newBoard[index] = turn; // Actualiza el cuadrado seleccionado con el turno actual
    setBoard(newBoard); // Actualiza el estado del tablero
    // Cambia el turno al siguiente jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', (newBoard))

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      return newWinner
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }





  // Renderiza el tablero y los cuadrados individuales
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button on onClick={resetGame}>.RESET.</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

// Exportamos el componente App para su uso en otras partes de la aplicación
export default App;

