const mongoose=require('mongoose')

const connectstring=process.env.DATABASE

mongoose.connect(connectstring).then((res)=>{
    console.log('mongodb is successful')
}).catch(rej=>{
    console.log('mongodb is failed')
})

