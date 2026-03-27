const express=require('express')
const router=express.Router();
const studentController=require('../controllers/studentController')

router.post('/',studentController.addstudent)
router.put('/:id',studentController.updatestudent)
router.delete('/:id',studentController.deleteStudent)
router.get('/',studentController.getStudent)

module.exports=router;