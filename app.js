
//importando express
const express = require("express");

//importando rotas
const homeRouters = require("./src/routes/homeRoutes.js");
const usersRouters = require("./src/routes/usersRoutes.js");
const adminRoutes = require("./src/routes/adminRoutes");


const HomeController = require("./src/controllers/HomeController.js");

const app = express();
const port = 3000;


/*Por padrão o express recebe as requisições e devolve como texto.
Mas para o padrão do dia a dia precisamos trabalhar com json.
Esse comando abaixo, faz com que todas as requisições e respostas do servidor, sejam em json */
app.use(express.json());

app.use(homeRouters);
app.use(usersRouters);
app.use(adminRoutes);

app.use(HomeController.showDontFind);

app.listen(port, () =>{
  console.log(`O servidor está rodando na porta ${port}`);
});


