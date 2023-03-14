import './ItemList.css'

const ItemList = (props) => {
    const { productos } = props;
    return (
        <div>
            {productos.map(productos => {
                return (
                    <div class="container">
                        <div className="card align-items-center p-2" id="tarjeta">
                            <img className="card-img-top" src={productos.imagen} alt={productos.descripcion} />
                            <div className="card-body">
                                <h5 className="card-title">{productos.nombre}</h5>
                                <p className="card-text">{productos.descripcion}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Precio: {productos.precio}</li>
                                <li className="list-group-item">Stock: {productos.stock}</li>
                                <li className="list-group-item">Categoría: {productos.categoria}</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Detalle</a>
                                <a href="#" className="card-link">Comprar</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;