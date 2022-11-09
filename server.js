const express = require('express')
const app = express()

const Contenedor = require('./controllers/Contenedor')

const routerProductos = require('./routes/productos/index')
const routerBase = require('./routes/productos/index')

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({extended:true}));


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use('/api/productos', routerProductos)
app.use('/', routerBase)