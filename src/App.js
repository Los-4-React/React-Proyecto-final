import { useState, useEffect } from 'react';
import "./App.css";
import { TablaDeTareas } from './componentes/TablaDeTareas';
import { ControlesVisibles } from './componentes/ControlesVisibles';


function App() {

  
  const [tareasItems, setTareasItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

//funcion que añade nueva tarea
  function crearTarea(tareaName){
    if (!tareasItems.find(tarea => tarea.name === tareaName)){
      setTareasItems([...tareasItems,{name: tareaName, done:false}])
    }
    else{
      alert("Esa tarea ya existe")
    }
    
  };

//función que cambia la propiedad done a true o false. Esta funcion va a se pasada como propiedad a los componentes
  const alternarTarea = tarea => {
    setTareasItems(
      tareasItems.map(t => (t.name === tarea.name) ? {...tarea, done: !t.done}: t)
    );
  };

//cuando reinicio la pág. los items quedan guardados
  useEffect(() => {
    let datos = localStorage.getItem('tareas')
    if (datos){
      setTareasItems(JSON.parse(datos))
    }
    
  }, []);

  const eliminarTareas = () =>{
    setTareasItems(tareasItems.filter(tarea => !tarea.done))
    setShowCompleted(false)
  }

//guarda los items en el localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareasItems))
  }, [tareasItems]);

  // showCompleted encerrado entre {} muestra la tabla de tareas completas cuando le das click al checkbox
  return (
    <div className="App">
      <CreadorDeTareas crearTarea={crearTarea}/>
      <TablaDeTareas tareas={tareasItems} alternarTarea={alternarTarea}/>
      <ControlesVisibles
      isChecked={showCompleted}
      setShowCompleted={(checked)=> setShowCompleted(checked)}
      eliminarTareas={eliminarTareas}
      />
      {
        showCompleted === true && (
          <TablaDeTareas tareas={tareasItems} alternarTarea={alternarTarea} showCompleted= {showCompleted} />
        )
      }
    </div>
  );
};

export default App;