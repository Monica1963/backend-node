
const N2app = require('../models/N2app');


const create = async (req, res) => {
    try {
     const escalamiento = new N2app(req.body);
     escalamiento.users = req.id; // global reference for user id
       const data = await escalamiento.save();
       res.status(201).json({ message: "nuevo escalamiento", data });
        console.log("nuevo escalamiento");
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  };
  
  const all = async (req, res) => {
    try {
    //   const data = await Purchase.find({ users: req.id });
    //   res.json({ message: `Todas las compras del usuario ${req.id}`, data });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  };


module.exports = { all, create};