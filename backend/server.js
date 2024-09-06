import express from 'express';
import { connectDB } from './config/db.js';
import Product from '../models/product.model.js';

const app = express();
app.use(express.json()); // allows us to accept JSON data in body

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

app.post('/api/products', async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product: ", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ sucess: true, message: 'Product deleted' });
    } catch (error) {
        res.status(404).json({ success: false, message: 'Product not found' });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at https://localhost:5000");
});

// masozow
// GzU4Nayy0qFQ3d1e