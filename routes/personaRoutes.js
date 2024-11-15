const express  = require ("express");
const router = express.Router();
const personaController = require("../controllers/personaController");

router.post('/registro', personaController.registrarPersona);

module.exports = router;