const express = require("express");
const router = express.Router();

router.post('/fooddata',(req,res)=>{
    try {
       // console.log(global.fooditem,global.foodcat);
        res.send([global.foodcat,global.fooditem])
    } catch (error) {
        res.send('somting went wrong...')
    }
})
module.exports=router;