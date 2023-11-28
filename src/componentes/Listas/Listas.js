import './Listas.css';

const Listas = () => {
 return(
<div class="Listas">
            <button>Mis Listas</button>
            <div>
                <button>Todo</button>
                <div>
                    <button>Urgente</button>
                </div>
                <div>
                    <button>Este mes</button>
                </div>
                <div>
                    <button>Puede esperar</button>
                </div>
            </div>
            <div>
                <button>Nueva Lista</button>
            </div>
         </div>
 );
}

export default Listas;