const Tools = require('../models/Tools');


const create = async (req, res) => {
    try {
     const tool = new Tools(req.body);
     tool.users = req.id; // global reference for user id
       const data = await tool.save();
       res.status(201).json({ message: "nuevo Link", data });
        console.log("nueva herramienta");
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