export const FilaDeTareas = ({tarea, alternarTarea}) => {
    return(
        <tr>
            <td>
                {tarea.name}
                <input 
                    name="alternartareas"
                    type="checkbox"
                    checked={tarea.done}
                    onChange={() => alternarTarea(tarea)}
                />
            </td>
        </tr>
    )
}


