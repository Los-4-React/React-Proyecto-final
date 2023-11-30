import { FilaDeTareas } from "../FilaDeTareas/FilasDeTareas";
import './TablaDeTareas.css';


export const TablaDeTareas = ({tareas, alternarTarea, showCompleted = false}) => {

    const filasDeTareas = (donevalue) =>{

        return(
            tareas
            .filter(tarea => tarea.done === donevalue )
            .map(tarea =>(
                <FilaDeTareas tarea={tarea} key={tarea.name} alternarTarea={alternarTarea}/>
            ))
        )
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                    filasDeTareas(showCompleted)
                }
            </tbody>
        </table>
    )
}