const User = require("../models/userModels");

const UserController = {
  getAll: async (req, res) => {
    try {
      const users = await User.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter lista de clientes" });
    }
  },

  create: async (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
      res.status(400).json({ error: "Nome e Email são obrigatórios" });
    }

    try {
      const id = await User.create(nome, email);
      res.status(201).json({ id, nome, email });
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar um novo cliente" });
    }
  },

  delete: async (req, res, db) => {
   const id = Number(req.params.id);
   if(!id){
    res.status(400).json({error:"Selecione um id existente"});
   }

   try{
    const deleteuser = await User.delete(id)
    if(deleteuser){
    res.status(200).json({message:"Usuario deletado com sucesso",id})
    }else{
        res.status(404).json({error:"Usuário não encontrado"})
    }
   }catch(error){
    res.status(500).json({error:"Erro ao deletar o usuario"});
   }
  },
  update: async (req,res,db)=>{
    const id = Number(req.params.id);
    const {nome,email} = req.body;

    if (!id) {
      res.status(400).json({ error: "ID é obrigatório" });
    }
    if (!nome || !email) {
      res.status(400).json({ error: "Nome e Email são obrigatórios" });
    }
    
    try{
      const updateuser = await User.update(id, nome,email);
      if(updateuser){
        res.status(200).json({message:"Usuário atualizado com sucesso",id}); 
      }else{
        res.status(404).json({error:"Usuário não atualizado"})
      }
    }catch(error){
      res.status(500).json({error:"Erro ao atualizar usuário"})
    }
  }
};

module.exports = UserController;

