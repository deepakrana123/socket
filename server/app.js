import express from "express"
import {Server} from "socket.io"
import {createServer} from "http"
const PORT=3001
const app = express()
const server=new createServer(app)

const io=new Server(server,{
    cors:{
        origin:"*",
        methods:['GET',"POST"],
        credentials:true
    }
})

io.on("connection",(socket)=>{
    console.log("User Connect")
    console.log("id",socket.id)
})
app.get("/",(req,res)=>{
    console.log("hlo")
})
server.listen(PORT,()=>{
    console.log("server is running on port 3001")
})