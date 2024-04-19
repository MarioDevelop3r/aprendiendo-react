// Componente Square representa un cuadrado individual en el tablero
export const Square = ({ children, updateBoard, isSelected, index }) => {
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