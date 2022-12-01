const express = require("express");
const router = express.Router();//armazendo o método do express para trabalhar com rotas

const HomeController = require("../controllers/HomeController.js")



router.get("/", HomeController.showHome);
router.get("/contato", HomeController.showContato);
router.get("/login", HomeController.showLogin);
router.get("/cadastro", HomeController.showCadastro);






module.exports = router;