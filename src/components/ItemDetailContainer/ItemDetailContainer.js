import { useEffect, useState } from "react"
import { getProductosByID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductosByID(itemId)
            .then(producto => {
                setProducto(producto)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
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