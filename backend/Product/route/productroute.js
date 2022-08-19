const express= require("express")
const router = express.Router()
const Controllers = require("../controller/productcontroller")
const authentication = require("../middleware/auth")

router.post("/addproduct",authentication, Controllers.addProduct)
router.get("/viewproduct",Controllers.viewProduct)
router.delete("/deleteproduct/:id",authentication,Controllers.deleteProduct)
router.put("/updateproduct/:id",authentication,Controllers.updateProduct)
router.put("/checkoutproduct/:id",Controllers.checkoutProduct)


module.exports = router