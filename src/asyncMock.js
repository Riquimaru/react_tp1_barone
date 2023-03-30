const productos = [
    {
        id: '1',
        nombre: 'Iphone 12',
        precio: 80000,
        categoria: 'celular',
        stock: 8,
        descripcion: 'Teléfono de gama alta',
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2020/12/iphone-12-blue-select-2020.png'
    },
    {
        id: '2',
        nombre: 'Samsung A12',
        precio: 65000,
        categoria: 'celular',
        stock: 12,
        descripcion: 'Teléfono de media gama',
        imagen: 'https://www.soscomputacion.com.ar/24949/celular-libre-samsung-galaxy-a12-64gb-memoria-interna-4gb-ram.jpg'
    },
    {
        id: '3',
        nombre: 'Samsung J10',
        precio: 45000,
        categoria: 'celular',
        stock: 15,
        descripcion: 'Teléfono de gama baja',
        imagen: 'https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2022/05/Samsung-Galaxy-J10-Official-Image.png?fit=500%2C500&ssl=1'
    }
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 1500)
    })
}

export const getProductosByCategoria = (categoriaId)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos.filter(prod => prod.categoria === categoriaId))
    }, 1500)
})
}

export const getProductosByID = (productoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=> prod.id === productoId))
        }, 1500)
    })
}