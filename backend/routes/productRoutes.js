import Product from "../models/productModel.js";
import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    // Async to use await
    const products = await Product.find({}); // Return a promise, instead i use await
    res.json(products); // It will get convert to JSON
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);
export default router;
