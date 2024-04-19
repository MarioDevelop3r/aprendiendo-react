// Importamos los Hooks necesarios de React
import { useState } from "react";

// Definimos los turnos posibles para el juego
const TURNS = {
  X: 'X',
  O: 'O'
};

// Componente Square representa un cuadrado individual en el tablero
const Square = ({ children, updateBoard, isSelected, index }) => {
  // Clase CSS para el cuadrado, que cambia si está seleccionado
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  // Función que se ejecuta al hacer clic en el cuadrado
  const handleClick = () => {
    updateBoard(index); // Actualiza el tablero con el turno actual
  };

  // Retorna el cuadrado con su contenido y clase CSS
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5], // Horizontal
  [6, 7, 8], // Horizontal
  [0, 3, 6], // Vertical
  [1, 4, 7], // Vertical
  [2, 5, 8], // Vertical
  [0, 4, 8], // Diagonal
  [2, 4, 6] // Diagonal
];

// Componente principal App que maneja el estado del juego
function App() {
  // Estado inicial del tablero con 9 cuadrados vacíos
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado inicial del turno, comienza con X
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null)


  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo;
      if
        (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;

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

    const newWinner = checkWinner(newBoard)
    if (newWinner) {

      setWinner(() => {
        return newWinner
      })
    }
    console.log('Winner is ', newWinner)

  };

  // Renderiza el tablero y los cuadrados individuales
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
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

    </main>
  );
}

// Exportamos el componente App para su uso en otras partes de la aplicación
export default App;

