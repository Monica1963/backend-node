const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const { dbConnection } = require("./database/config");
const {securedUser} = require('./middlewares/auth');
dbConnection();

const cases = require('./routes/cases');
const auth = require("./routes/auth");
const purchase = require('./routes/purchase');
const contact = require('./routes/contact');
const n2app = require('./routes/n2app');
const tool = require('./routes/tools');
const {readMyFile, readbyline, ExcelAJSON} = require('./utils/fs');


const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(logger('dev'));
// app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use("/auth", auth);
app.use("/cases", cases);
app.use("/purchase", securedUser, purchase);
app.use("/contact", contact);
app.use("/n2app",securedUser, n2app);
app.use("/tool",securedUser, tool);

// app.get("/", (req, res)  => {
//     console.log("Hiiiii");
//     res.sendStatus(200);
// })


// app.get("/products", (req, res)  => {

//     console.log("Productos");
//     res.sendStatus(200);
// })


// app.post("/products", (req,res) => {
//     console.log(req.body);
//     res.status(201).json({message: "tutototot"});
// });

app.listen(3000);
// readMyFile();
// readbyline();
ExcelAJSON();

