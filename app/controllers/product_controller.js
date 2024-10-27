import { useState } from 'react';
import ProductModel from '../models/product_model';

export const useProductController = () => {
    const [formData, setFormData] = useState(new ProductModel());

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return { formData, handleChange };
};
