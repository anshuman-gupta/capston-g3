const express= require("express")
const router = express.Router()
const Controllers = require("../controller/productcontroller")

router.post("/addproduct",Controllers.addProduct)
router.get("/viewproduct",Controllers.viewProduct)
router.delete("/deleteproduct/:id",Controllers.deleteProduct)
router.put("/updateproduct/:id",Controllers.updateProduct)
router.put("/checkoutproduct/:id",Controllers.checkoutProduct)


module.exports = router