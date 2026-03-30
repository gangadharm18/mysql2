const courses=require('../models/course')
const students=require('../models/student')

const addCourse=async(req,res)=>{
    try {
         const {name}=req.body;
        const course=await courses.create({name:name})
        res.status(201).json(course)
    } catch (error) {
        res.status(500).json(error.message)
    }
   
}
const addstudentCourse=async(req,res)=>{
    try {
        const {studentId,courseId}=req.body;
        const student=await students.findByPk(studentId)
        const course=await courses.findAll({
            where:{
                id:courseId
            }
        })
        await student.addCourse(course)
        const updatedstudent=await students.findByPk(studentId,{include:courses})
        res.status(201).json(updatedstudent)
    } catch (error) {
         res.status(500).json(error.message)
    }
}


module.exports={
    addCourse,
    addstudentCourse
}