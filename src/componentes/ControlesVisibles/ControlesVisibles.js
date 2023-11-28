import './ControlesVisibles.css';

export function ControlesVisibles({ isChecked, setShowCompleted, eliminarTareas }) {

    const eliminar = () => {
        if (window.confirm('¿Estas seguro de querer eliminarlas?')) {
            eliminarTareas()
        }
    }

    return (
        <div className="controles">
              <input
                    name="eliminartarea"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setShowCompleted(e.target.checked)} />
              <label>Ver tareas hechas</label>
                <button onClick={(eliminar)}>
                    Eliminar tareas hechas
                </button>
        </div>
    )
} 