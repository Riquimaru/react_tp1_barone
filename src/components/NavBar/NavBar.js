import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="linknav">
      <NavLink to='/'><a className="navbar-brand m-3">Tienda Barone</a></NavLink>
      <Link to='/carrito'><CartWidget /></Link>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav m-4">
          <li className="nav-item">
            <NavLink to='/categoria/celular'><a className="nav-link">Celulares</a></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/categoria/notebook'> <a className="nav-link">Notebooks</a></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;