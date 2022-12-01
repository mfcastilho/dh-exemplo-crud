const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController.js");

router.get("/usuarios", UsersController.showUsers);

router.post("/usuarios", UsersController.store);


router.get("/usuarios/:id", UsersController.showUser);


module.exports = router;