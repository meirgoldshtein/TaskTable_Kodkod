console.log("it run")
const {taskModel} = require("./taskModul")
const express = require("express")
const path = require("path")
const http = require("http")
let port = "3000"
const app = express()
app.use(express.json())
const cors = require('cors')

// app.use(express.static(path.json(__dirname,"public")))
const server = http.createServer(app)
server.listen(port)
require("./MongoConnect");
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));
app.get("/",async (rec,res)=>{
    try {
        let data = await taskModel.find();
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
})



