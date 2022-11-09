const Contenedor = require('../../controllers/Contenedor')
const express = require('express')
const app = express()
const { Router } = express
const routerProductos = new Router()
const ProductoController = new Contenedor('productos.json')
const Contenedor1 = new Contenedor('productos.json')
const routerBase = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}));


routerProductos.get('/', ProductoController.getAll)
routerProductos.get('/:id', ProductoController.getById)
routerProductos.post('/', ProductoController.save)
routerProductos.put('/:id',ProductoController.update)
routerProductos.delete('/:id',ProductoController.deleteById)
routerBase.get('/', (req, res) => {
    const getProductos = Contenedor1.getAll
    console.log(getProductos)
    res.render('index');
})
module.exports = routerProductos
module.exports = routerBase
