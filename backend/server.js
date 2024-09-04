import express from 'express';
import { connectDB } from './config/db.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at https://localhost:5000");
});

// masozow
// GzU4Nayy0qFQ3d1e