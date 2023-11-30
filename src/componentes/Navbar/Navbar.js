import './Navbar.css';
import icono from './icono.png'

const Navbar = () => {
    return (
      <div class="nav">
        <div>
          <img src={icono} />
        </div>
        <div>
          <h1>Task App</h1>
        </div>
      </div>
    );
}

export default Navbar;
