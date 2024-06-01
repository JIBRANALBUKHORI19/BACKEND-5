const express = require('express')
const routerNilai = express.Router()
const ctrNilai = require('../controller/nilai')

routerNilai.get('/nilai/:nim', ctrNilai.getNilaiByNim)
routerNilai.get('/nilai/:nim/:semester', ctrNilai.getNilaiByNimSemester)
routerNilai.post('/nilai/:nim', ctrNilai.createNIlai)
routerNilai.put('/nilai/:nim', ctrNilai.UpdateNilai)
routerNilai.delete('/nilai/:nim', ctrNilai.DeleteNilai)


module.exports = routerNilai