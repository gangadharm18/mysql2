const db=require('../utils/db-connection')

const addstudent=(req,res)=>{
    const {name,email,age}=req.body;
    const addQuery=`insert into students(name,email,age) 
    values(?,?,?)`

    db.execute(addQuery,[ name,email,age],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            
            return;
        }
        console.log("student added")
        res.status(200).send(`student ${name} added`)
    })

}
//update
const updatestudent=(req,res)=>{
    const id=req.params.id;
    let fields=[];
    let values=[];
    const {name,email,age}=req.body;
    if(name){
        fields.push("name=?")
        values.push(name);
    }
    if(email){
        fields.push("email=?")
         values.push(email);
    }
    if(age){
        fields.push("age=?")
         values.push(age);
    }
   
    if (fields.length === 0) {
        return res.status(400).send("No fields to update");
    }
    const updateQuery=`update  students set ${fields.join(", ")} where id=?`
    values.push(id)

    db.execute(updateQuery,values,(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("student not found")
            return;
        }
        console.log("student updated")
        res.status(200).send(`student ${name} updated`)
    })

}
//delete
const deleteStudent=(req,res)=>{
    const id=req.params.id;
    const deleteQuery=`DELETE FROM students where id=?`

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("student not found")
            return;
        }
        console.log("student deleted")
        res.status(200).send(`student  deleted with id ${id}`)
    })

}

//to get all students
const getStudent=(req,res)=>{
    const getQuery=`select id,name from students`
    db.execute(getQuery,(err,result)=>{
         if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
        if(result.length===0){
            res.status(200).send('No students yet')
        }
        res.status(200).send(result)
    })
}

module.exports={
    addstudent,
    updatestudent,
    deleteStudent,
    getStudent
}