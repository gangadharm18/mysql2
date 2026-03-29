const express=require('express')
const db=require('./utils/db-connection')
const app=express()
app.use(express.json())
const studentRoute=require('./routes/studentRoute')
//models
require('./models')

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log("listening to server")

})

}).catch((err)=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!")
})
app.use('/students',studentRoute)
app.use((req,res)=>{
    res.status(404).send("page not Found")
})