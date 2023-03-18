import './ItemList.css'
import Item from '../Item/Item'

const ItemList = (props) => {
    const { productos } = props;
    return (
        <div>
            {productos.map(productos => {
                return <Item key={productos.id} {...productos}/>
            })}
        </div>
    )
}

export default ItemList;