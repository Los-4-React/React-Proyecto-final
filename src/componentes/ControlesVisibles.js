export function ControlesVisibles({ isChecked, setShowCompleted, eliminarTareas }) {

    const eliminar = () => {
        if (window.confirm('¿Estas seguro de querer eliminarlo?')) {
            eliminarTareas()
        }
    }

    return (
        <div>
            <input
                name="eliminartarea"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setShowCompleted(e.target.checked)} />

            <label>Tareas hechas</label>
            {" "}
            <button onClick={(eliminar)}>
                Eliminar
            </button>
        </div>
    )
} export function ControlesVisibles({ isChecked, setShowCompleted, eliminarTareas }) {

    const eliminar = () => {
        if (window.confirm('¿Estas seguro de querer eliminarlo?')) {
            eliminarTareas()
        }
    }

    return (
        <div>
            <input
                name="eliminartarea"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setShowCompleted(e.target.checked)} />

            <label>Tareas hechas</label>
            {" "}
            <button onClick={(eliminar)}>
                Eliminar
            </button>
        </div>
    )
}