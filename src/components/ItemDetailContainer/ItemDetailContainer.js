import { useEffect, useState } from "react"
import { getProductosByID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { bd } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        // getProductosByID(itemId)
        //     .then(producto => {
        //         setProducto(producto)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
        const refProducto = doc(bd, "productos", itemId)
        getDoc(refProducto)
        .then(snaposhot =>{
            const data = snaposhot.data()
            const adaptarProducto = {id: snaposhot.id, ...data}
            setProducto(adaptarProducto)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [itemId])

    if (loading) {
        return <h1>Buscando...</h1>
    }

    return (
        <div>
            <h1>Detalles</h1>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;