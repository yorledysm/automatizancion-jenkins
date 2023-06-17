const { Router } = require('express')
const {createProyectos, getProyectos, updateProyectoByID} =
require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyectos)

// consultar todos
router.get('/', getProyectos)

router.put('/:id',  updateProyectoByID)



module.exports=router;