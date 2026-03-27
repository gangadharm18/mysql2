const express=require('express')
const router=express.Router();
const studentController=require('../controllers/studentController')

router.post('/add',studentController.addstudent)
router.put('/update/:id',studentController.updatestudent)
router.delete('/delete/:id',studentController.deleteStudent)

module.exports=router;