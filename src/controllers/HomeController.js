const HomeController = {
  showHome: (req, res)=>{
    res.send("Página Inicial!");
  },
  showContato: (req, res)=>{
    res.send("Página de Contato!");
  },
  showLogin: (req, res)=>{
    res.send("Página de Login!");
  },
  showCadastro: (req, res)=>{
    res.send("Página de Cadastro!");
  },  
  showDontFind: (req, res)=>{
    res.status(404).send("Esta rota não existe");
  }
};

module.exports = HomeController;