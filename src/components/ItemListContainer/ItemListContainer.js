import { useEffect, useState } from "react";
import { getProductos, getProductosByCategoria } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore";
import { bd } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoriaId } = useParams()


    useEffect(() => {

        setCargando(true)

        // const asyncProductos = categoriaId ? getProductosByCategoria : getProductos
        // asyncProductos(categoriaId)
        //     .then(productos => {
        //         setProductos(productos)
        //     })
        //     .finally(() => {
        //         setCargando(false)
        //     })

        const refProductos = categoriaId ? query(collection(bd, 'productos'), where('categoria', '==', categoriaId)) 
        :collection(bd, 'productos')

        getDocs(refProductos)
        .then(snapshot => {
            const adaptarProductos = snapshot.docs.map(doc =>{
                const data = doc.data()
                return { id: doc.id, ...data }

            })
            setProductos(adaptarProductos)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
        })
    }, [categoriaId]);

    if (cargando) {
        return <h1>Cargando</h1>
    }

    if (productos && productos.length === 0) {
        return <h1>No se encontraron productos</h1>
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;