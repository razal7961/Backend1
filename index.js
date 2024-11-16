require('dotenv').config()

const express=require('express')

const cors=require('cors')

const server=express()

server.use(cors())

server.use(express.json())

const routes=require('./routes/routes')

require('./connection/dbconnection')

const PORT=process.env.PORT || 5000



server.use(routes)


server.listen(PORT,()=>{
    console.log('server running at port',PORT)
})
server.get('/',(req,res)=>{
    res.send('<h1>server running successfully</h1>')
})