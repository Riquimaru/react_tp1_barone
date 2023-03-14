import './NavBar.css'
import Carrito from '../CartWidget/CartWidget'

const NavBar = (props) =>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand m-3" href="#">{props.titulo}</a>
  <Carrito/>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav m-4">
      <li className="nav-item">
        <a className="nav-link" href="#">{props.link1}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.link2}</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;