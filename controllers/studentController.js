const db=require('../utils/db-connection')
const student=require('../models/student')

const addstudent=async(req,res)=>{
    try {
        const {name,email}=req.body;
        await student.create({
            name:name,
            email:email,
          
        })
          res.status(200).send(`student ${name} added`)
    } catch (error) {
         res.status(500).send(error.message)
         return;
    }
    

}
//update
const updatestudent=async(req,res)=>{
    try {
         const id=req.params.id;
       const {name,email}=req.body;
       const Student=await student.findByPk(id)
        if(!Student){
         res.status(404).send("student not found")
         return;
        }
       if(name)Student.name=name;
       if(email)Student.email=email;
        await Student.save()
 
       res.status(200).send(`student ${name} updated`)
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}
//delete
const deleteStudent=async(req,res)=>{
    
    try {
        const id=req.params.id;
        const Student=await student.destroy({
           where :{
            id:id
           }
        })
        if(!Student){
            res.status(404).send("student not found")
         return;
        }
        res.status(200).send(`student deleted`)
    } catch (error) {
         res.status(500).send(error.message)
    }

}

//to get all students
const getStudent=async(req,res)=>{
    
   try {
        
        const Student=await student.findAll()
        if(Student.length===0){
            res.status(404).send("student not found")
         return;
        }
          res.status(200).json(Student)
    } catch (error) {
         res.status(500).send(error.message)
    }

}

module.exports={
    addstudent,
    updatestudent,
    deleteStudent,
    getStudent
}