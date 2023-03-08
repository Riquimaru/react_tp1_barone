import './NavBar.css'
import Carrito from '../CartWidget/CartWidget'

const NavBar = (props) =>{
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand m-3" href="#">{props.titulo}</a>
  <Carrito/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav m-4">
      <li class="nav-item">
        <a class="nav-link" href="#">{props.link1}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{props.link2}</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;