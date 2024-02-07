const {
  getMostRecent,
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
    req.body['_ownerId'] = req.user._id;
    const product = await addProduct(req.body, req.user._id);
    await updateUserProducts(req.body._ownerId, product._id);
    res.status(201).json(product);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});


//get All Products
productController.get("/", async (req, res) => {
  try {

  const page = req.query.page;
  const pageSize = req.query.pageSize

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const products = await getAllProducts();

  const paginatedProducts = products.slice(startIndex, endIndex);
  
  const totalPages = Math.ceil(products.length / pageSize);

  res.status(200).json({ products: paginatedProducts, totalPages });
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  
});

//Get most recent products
productController.get("/most-recent", async (req, res) => {
  const product = await getMostRecent();
  res.status(200).json(product);
});

productController.get("/search", async (req, res) => {
  const product = await getAllProducts(req.query.search);
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
    console.log(req.body, req.params.id);
    const result = await updateProduct(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json( `The problem is here`, err.message );
  }
});

//Add Comments to Product and Update by ID

productController.put('/add-comment/:id', async (req, res) => {
  try {
    const result = await addComment(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
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
