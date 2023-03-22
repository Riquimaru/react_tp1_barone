import '../ItemList/ItemList.css'
import ItemContador from "../ItemContador/ItemContador";
const ItemDetail = ({ nombre, precio, imagen, descripcion, stock, categoria, }) => {
    return (
        <div class="container">
            <div className="card align-items-center p-2" id="tarjeta">
                <img className="card-img-top" src={imagen} alt={descripcion} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: {precio}</li>
                    <li className="list-group-item">Stock: {stock}</li>
                    <li className="list-group-item">Categoría: {categoria}</li>
                </ul>
                <ItemContador stock={stock}/>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;