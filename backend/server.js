import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

const app = express();

app.use(express.json()); // allows us to accept JSON data in body
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at https://localhost:" + PORT);
});

// masozow
// GzU4Nayy0qFQ3d1e