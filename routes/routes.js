const express=require('express')

const employcontroller=require('../controller/employcontroller')

const router= new express.Router

router.post('/register',employcontroller.register)
router.get('/get',employcontroller.getEmploys)
router.delete('/delete/:id',employcontroller.deleteEmploy)
router.put('/edit/:sid',employcontroller.editEmploy)

module.exports=router