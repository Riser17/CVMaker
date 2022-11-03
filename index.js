
const express = require("express");
const fileRoutes = require('./router/router');
var cors = require('cors')
const app = express();
const cookieParser= require ("cookie-parser")
const dotenv = require('dotenv');


var bodyParser = require('body-parser');

require('./conn');

app.use(cookieParser());
dotenv.config();



app.use(cors({ credentials:true, origin:'http://localhost:3000' }));



// parse application/json
app.use(bodyParser.json())


app.use('/api', fileRoutes.routes);



const port = process.env.PORT || 9090;

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);

})

