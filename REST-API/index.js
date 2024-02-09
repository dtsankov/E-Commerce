if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    console.log('Running in development environment');
} else if (process.env.NODE_ENV === 'development') {
    // Code specific to the development environment
    console.log('Running in production environment')}

 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const productController = require('./controllers/productController')
const authController = require('./controllers/authController')
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middlewares/auth');
const cookieSecret = process.env.COOKIESECRET || 'SoftUni';
const connectionString = 'mongodb://127.0.0.1:27017/a-zConstructionDb';
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;




start();

async function start() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(connectionString);
    console.log('Database connected');

    const app = express();
    app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
    app.use(authMiddleware);
    app.use(cookieParser(cookieSecret));
    app.use(express.json());
    app.get('/', (req, res) => {
        res.json({ message: 'REST service active' });
    });

  
    app.use('/auth', authController)
    app.use('/products/catalog', productController);
    
    app.listen(3000, () => console.log('REST service started on port 3000!'));
}