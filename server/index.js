require('dotenv').config(); 
const express = require("express")
const app = express();
const connection = require("./db");
const cors = require("cors")
const imageRoutes = require("./routes/images")

//connecting to database
connection();

//middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use("/api/images", imageRoutes)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`))
