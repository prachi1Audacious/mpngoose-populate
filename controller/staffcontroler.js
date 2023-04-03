const Staff = require('../model/staffModel')
async function create(req,res){
        
    const {name,email} = req.body;
    const staff = await Staff.create({
         name,
         email
    })
    console.log(staff)
    return res.send(staff)
}
module.exports= {
    create
} 