const router = require("express").Router();

router.get("./",(res,req)=>{
    res.json("Get customers")
});
router.get("./:id",(res,req)=>{
    res.json({message:"Customer"})
});
router.post("./",(res,reg)=>{
    res.send("create customers")
});
router.put("/:id",(res,req)=>{
    res.send("update.customer")
});
router.delete("./:id",(res,req)=>{
    res.send("remove customers")
})


module.exports = router;
