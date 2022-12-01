const dataBase = require("../database/data-base.json");
const fs = require("fs");
const path = require("path");
const { v4: gerarId } = require('uuid');



const UsersController = {
  showUsers: (req, res)=>{

    const usuarios = dataBase;
    res.send(usuarios);
  },
  showUser: (req, res)=>{
    
    const {id} = req.params; 
    const { admin } = req.query;
    console.log(req.query);

    const user = dataBase.usuarios.find(user=> user.id == id);
    if(!user){
      return res.send("Usuário não encontrado!");
    }

    return res.send(user);
  },
  store: (req, res) =>{
    const {nome, email, senha} = req.body;
    console.log(req.body);
    const novoUsuario = {
      id: gerarId(),
      nome: nome,
      email: email,
      senha:senha
    }
    
    dataBase.usuarios.push(novoUsuario);
    console.log(dataBase);
    let bancoAtualizado = JSON.stringify(dataBase);

    fs.writeFileSync(path.resolve("src", "dataBase", "usuario.json"), bancoAtualizado);

    return res.send(novoUsuario);  
  }
}


module.exports = UsersController;


