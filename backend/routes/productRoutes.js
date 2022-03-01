const express = require("express");

const router = express.Router();
const {
  getAllproducts,
  getProductById,
} = require("../controller/productControllers");
//@Desc GET all prodcut from DB
//@route GET api/products
//@access Public
router.get("/", getAllproducts);

//@Desc GET a single prodcut from DB
//@route GET api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
