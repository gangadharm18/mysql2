const express=require('express')
const courseController=require('../controllers/courseController')
const router=express.Router();


router.post('/add',courseController.addCourse);
router.get('/studentcourse',courseController.addstudentCourse)

module.exports=router
