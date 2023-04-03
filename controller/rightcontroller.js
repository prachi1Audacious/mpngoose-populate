// const Right= require('../model/rightsModel')

// create: async(req,res) => {
//     const right = await Right.create({
//         staff_id:req.body.staff_id,
//         right:req.body.right
//     })

//     const rightData = await right.save();
//     console.log(rightData)
//     return res.send(rightData);
// }



// module.exports = {
//     create
// }

//  const Right= require('../model/rightsModel')
// async function create(req,res){
    
//        const {staff_id,rights} = req.body;
//        const rightData = await Right.create({  
//         staff_id,
//         rights
//  });
//     console.log(rightData)
//     return res.send(rightData);
// }


// module.exports = {
//     create 
// }


const Right = require('../model/rightsModel')

module.exports = {
     create:async(req,res) => {
        const right = await Right.create({

            staff_id:req.body.staff_id,
            right:req.body.right
        });
         const rightData = await right.save();
         console.log(rightData)
         return res.send(rightData);
     
}
//  staffByRight: async(req,res)=>{
//     Right.find();
//  }
}
