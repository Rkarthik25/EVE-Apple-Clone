const express=require("express")
const { connection } = require("./config/db")
const { adminRouter } = require("./routes/admin.routes")
const cors= require("cors")
const app= express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))
// if endpoint is "admin" then redirect it to the "adminRouter"
app.use("/admin",adminRouter)

app.listen(process.env.PORT,async()=>{
try{
await connection
console.log("connected to the db")
}
catch{
console.log("can not connect to the db")
}

console.log("server is running at port",process.env.PORT)
})