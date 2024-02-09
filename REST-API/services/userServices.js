const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY
const User = require("../models/User");

const validateToken = (token) => {
    try {
        const data = jwt.verify(token, secretKey);
        return data;
    } catch (error) {
        throw new Error("Invalid access token!");
    }
};
const createAccessToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };
    const accessToken = jwt.sign(payload, secretKey);

    return {
        email: user.email,
        _id: user._id,
        role: user.role,
        accessToken,
    };
};

const register = async (email, password) => {
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        const error = new Error("Email already exists!");
        error.status = 409;
        throw error;
    }

    const user = await User.create({ email, password });
    return createAccessToken(user);
};
const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("Invalid email or password!");
        error.status = 409;
        throw error;
    }

    const isUser = await bcrypt.compare(password, user.password);

    if (isUser) {
        return createAccessToken(user);
    } else {
        const error = new Error("Invalid email or password!");
        error.status = 409;
        throw error;
    }
};

const updateUserProducts = async (id, productId) => {
    try {
        const user = await User.findById(id);
        let productsArr = user.products;
        productsArr.push(productId);
        await User.findByIdAndUpdate(id, { products: productsArr });
    } catch (error) {
        throw new Error(error);
    }
};

const getUser = async (id) => {
    return await User.findById(id);
};

const updateUser = async (id, data) => {
    const user = {
        email: data.email,
        username: data.username,
        address: data.address,
        city: data.city,
        country: data.country,
        postalCode: data.postalCode,
        phone: data.phone,
    };

    const updatedUser = await User.findByIdAndUpdate(
        id,
        {
            user,
        },
        {
            new: true,
        }
    );
    return updatedUser;
};
const logout = (token) => {
    blacklist.add(token);
};
module.exports = {
    login,
    register,
    createAccessToken,
    validateToken,
    updateUserProducts,
    updateUser,
    getUser,
    logout,
};
