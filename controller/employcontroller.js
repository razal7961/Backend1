const employs=require('../modal/employschema')

exports.register=async (req,res)=>{
    console.log('inside register')
    const {id,name,gender,email,salary}=req.body 
    console.log(`id:${id},name:${name},gender:${gender},email:${email},salary:${salary}`)

    try{

        existingemploy=await employs.findOne({email})
        if (existingemploy){
            res.status(406).json('Existing employ')
        }
        else{
            const newemploy= new employs({id,name,gender,email,salary})
            console.log(newemploy)
            await newemploy.save()
            res.status(200).json(newemploy)
        }
    }

    catch (err){
        res.status(400).json('something went wrong'+err)
    }
}

exports.getEmploys=async(req,res)=>{
    console.log('inside get')
    try{
        const data=await employs.find()
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(406).json('something went wrong'+err)
    }
}

exports.deleteEmploy=async(req,res)=>{
    console.log('inside get')
    const {id}=req.params
    console.log(id)
    try{
        const result=await employs.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json('something went wrong'+err)
    }
}

exports.editEmploy=async(req,res)=>{
    console.log('inside get')
    const {id,name,gender,email,salary}=req.body
    const {sid}=req.params
    console.log(sid)
    console.log(id,name,gender,email,salary)

    try{
        const result=await employs.findOneAndUpdate({_id:sid},{id,name,gender,email,salary})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json('something went wrong'+err)
    }
}