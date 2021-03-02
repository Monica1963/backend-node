const Case = require("../models/Cases");

const single = async (req, res) => {
    try{
        const {id}= req.params;
        const data = await Case.findById(id);
        res.json(data);
    }catch (e){
        console.error(e);
        res.sendStatus(500);
    }
}
const all = async (_, res) => {
    try{
        const data = await Case.find();
        console.log(data);
        res.json(data);
    } catch (e){
        console.error(e);
        res.sendStatus(500);
    }
};

module.exports= { all, single};