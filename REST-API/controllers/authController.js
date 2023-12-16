const { getByOwner } = require("../services/productServices");
const {
    register,
    login,
    updateUser,
    getUser,
} = require("../services/userServices");

const authController = require("express").Router();

// Register route
authController.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await register(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.end();
});

// Login route
authController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.end();
});

// Logout route
authController.get("/logout", (req, res) => {
    res.status(204).end();
});

// Get products by owner

authController.get("/profile/:id", async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
});
// Get user by id

authController.get("/profile", async (req, res) => {
    const user = req?.user;
    const products = await getByOwner(user);
    res.status(200).json(products);
    res.end();
});
// Update user by id

authController.put("/profile/edit", async (req, res) => {
    try {
        const user = req?.user._id;
        const updatedUser = await updateUser(user, req.body);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
module.exports = authController;
