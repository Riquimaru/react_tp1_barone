import { Link } from "react-router-dom";
import './Item.css'

const Item = ({id, nombre, imagen, descripcion, precio})=>{
return(
<div class="container">
<div className="card align-items-center p-2" id="tarjeta">
    <img className="card-img-top" src={imagen} alt={descripcion} />
    <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Precio: {precio}</li>
    </ul>
    <div className="card-body">
        <Link to={`/item/${id}`}><a href="#" className="card-link" id="links">Detalles</a></Link>
    </div>
</div>
</div>
)
}

export default Item;