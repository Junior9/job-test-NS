const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();


//import routers
const apiRoutes = require('./router/api_router');

//middlewares
app.use(morgan('dev')); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended :false}))

//routes
app.use('/',apiRoutes);

//start serve
app.listen(3000, () =>{
	console.log("Serve up");

});