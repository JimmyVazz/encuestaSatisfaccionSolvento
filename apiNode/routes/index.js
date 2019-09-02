const express = require('express');
const router  = express.Router();
const encuesta = require('../UseCases/EncuestaAcreditado')
/* GET home page */
router.get('/', (req, res, next) => {
  res.json({
    name: "Jimmy",
    apepat: "Vasquez",
    apemat: "Fuentes"
  })
});

router.post('/encuesta', async(req, res) => {
  const {
    folioCliente, 
    respuesta1, 
    respuesta2, 
    respuesta3
  } = req.body
  const newEncuesta = await encuesta.createEntry
  (title, body, image, dateCreated)
  res.json({
    succes: true,
    message: "Entry created",
    data: {
      entry: newEntry
    }
  })
})

module.exports = router;