const express=require('express')
const db=require('./utils/db-connection')
const app=express()
app.use(express.json())
//routes
const studentRoute=require('./routes/studentRoute')
const courseRoute=require('./routes/courseRoute')

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
app.use('/courses',courseRoute)
app.use((req,res)=>{
    res.status(404).send("page not Found")
})