const express = require('express')
const app = express()
const cors=require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))


const clientes = require('./routes/cliente')
const etapas = require('./routes/etapa')
const proyectos = require('./routes/proyecto')
const tipoProyectos = require('./routes/tipoProyecto')
const universidades = require('./routes/universidad')

app.use('/api/cliente', clientes)
app.use('/api/etapa', etapas)
app.use('/api/proyecto', proyectos)
app.use('/api/tipoProyecto', tipoProyectos)
app.use('/api/universidad', universidades)


module.exports = app


