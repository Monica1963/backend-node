
const mongoose = require("mongoose");


const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log("Conectado a la BD");
          
         

    } catch (e){
        console.error(e);
    }
}

module.exports = { dbConnection };