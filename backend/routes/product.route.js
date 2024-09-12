import express from 'express';
import { createProduct, deleteProductByID, getAllProducts, updateProductByID } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProductByID);
router.delete('/:id', deleteProductByID);

export default router;