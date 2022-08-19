let productModel = require("../model/productmodel");

Controllers = {};

Controllers.addProduct = async function (req, res) {
  const data = req.body;
  try {
    let result = await productModel.create({
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      quantity: data.quantity,
    });
    res.send("Product added");
  } catch (err) {
    res.send("Error generate", err);
  }
};

Controllers.viewProduct = function (req, res) {
  return productModel
    .find()
    .then((result) => res.send(result))
    .catch((err) => res.send("some error occurd"));
};

Controllers.deleteProduct = function (req, res) {
  const delid = req.params.id;
  return productModel
    .findByIdAndDelete(delid)
    .then((result) => res.send(`item deleted with ID : ${delid}`))
    .catch((err) => console.log("error while deleting"));
};

Controllers.updateProduct = function (req, res) {
  const updateid = req.params.id;
  return productModel
    .findByIdAndUpdate(updateid, req.body)
    .then((data) => res.send("product data updated"))
    .catch((err) => console.log(err));
};

//checkout will decrement the product quantity by 1

Controllers.checkoutProduct = async function (req, res) {
  const checkoutProductid = req.params.id;
  try {
    let result = await productModel.updateOne(
      { _id: checkoutProductid },
      { $inc: { quantity: -1 } }
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
  return;
};
Controllers.home = async function (req, res) {
  res.render("home");
};

module.exports = Controllers;
