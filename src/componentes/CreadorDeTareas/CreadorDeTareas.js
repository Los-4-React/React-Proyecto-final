import './CreadorDeTareas.css';
import { useState } from "react";


export function CreadorDeTareas({crearTarea}) {

    //captura lo que escribimos en el input
    const [newTareaNombre, setNewTareaNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        crearTarea(newTareaNombre);
        setNewTareaNombre('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                name="tarea"
                type="text"
                placeholder="Ingresa una nueva tarea"
                value={newTareaNombre}
                onChange={(e) => setNewTareaNombre(e.target.value)} />
                {" "}
            <button>Agregar</button>
        </form>
    );
}