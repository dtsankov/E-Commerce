const {
  getMostRated,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
  addProduct,
  addComment,
  getProductComments,
} = require("../services/productServices");

const { updateUserProducts } = require("../services/userServices");

const productController = require("express").Router();


//create Product
productController.post("/create", async (req, res) => {
  try {
    const data = Object.assign({ _ownerId: req?.user?._id }, req.body)
    const userId = req?.user?._id;

    const product = await addProduct(data, userId);

    await updateUserProducts(data._ownerId, product._id);

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Error creating product!' });
  }
});


//get All Products
productController.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json(products);
});

//Get most rated products
productController.get("/most-recent", async (req, res) => {
  const product = await getMostRated();
  res.status(200).json(product);
});

//Get product by ID
productController.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const product = await getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      throw new Error("Invalid Product ID!");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//Update Product by ID
productController.put("/edit/:id", async (req, res) => {
  try {
    const product = await getProductById(req.params.id);

    if (req.user._id != product._ownerId) {
      return res
        .status(403)
        .json({ message: "You cannot edit this product" });
    }
    const result = await updateProduct(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//Add Comments to Product and Update by ID

productController.put('/add-comment/:id', async (req, res) => {
  try {
    const result = await addComment(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
})


// Delete product
productController.delete("/:id", async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (req.user._id != product._ownerId._id) {
      return res.status(403).json({ err: err.message });
    }
    await deleteProduct(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = productController;
