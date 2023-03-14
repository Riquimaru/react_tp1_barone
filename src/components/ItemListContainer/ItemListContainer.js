import { useEffect, useState } from "react";
import {getProductos} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) =>{
const {greeting} = props;
const [productos, setProductos] = useState([])
useEffect(()=>{
    getProductos()
    .then(productos => {
        setProductos(productos)
    })
}, []);


    return(
        <div>
        <h2>{greeting}</h2>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;