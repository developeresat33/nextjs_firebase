"use client";

import { useState, useEffect } from 'react';
import ListTile from '../../components/list_tile';
import '../dashboard/custom.css';
import { useProductController } from '../../controllers/product_controller';
import { useLoading } from '../../widgets/loading';
import { addProduct, deleteProduct } from '../../states/product_provider';
import { db, collection, } from '../../lib/firebase';
import { onSnapshot } from "firebase/firestore";

export default function ProductsContent() {
    const { formData, handleChange } = useProductController();
    const [errorMessage, setMsg] = useState('');
    const { setIsVisible } = useLoading();
    const [productList, setProductList] = useState([]);

    // Firestore'daki `products` koleksiyonunu gerçek zamanlı dinlemek için useEffect
    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "products"),
            (snapshot) => {
                const products = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductList(products);
            },
            (error) => {
                console.error("Error fetching products:", error);
            }
        );

        // Cleanup function
        return () => unsubscribe();
    }, []);

    const doAdd = async () => {
        console.log(formData); // Bu formData değerlerini konsola yazdırır

        const result = await addProduct(formData, setIsVisible);
        if (result.success) {
            setMsg('');
            formData.productName = '';
            formData.productModel = '';
        } else {
            setMsg(result.message);
        }
    };



    // Ürünü silme işlemi
    const handleDelete = async (productId) => {
        const result = await deleteProduct(productId, setIsVisible);
        if (result.success) {
            setMsg(''); // Hata mesajını sıfırlayın
        } else {
            setMsg(result.message); // Hata mesajını gösterin
        }
    };

    return (
        <div>
            <div className="row gx-1">
                <div className="col-md-5 mb-2">
                    <input
                        type="text"
                        id="productName"
                        className="form-control"
                        placeholder="Ürün Adı"
                        value={formData.productName || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-5 mb-2">
                    <input
                        type="text"
                        id="productModel"
                        className="form-control"
                        placeholder="Ürün Modeli"
                        value={formData.productModel || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-2 ">
                    <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={doAdd}>
                        Ekle
                    </button>
                </div>
            </div>

            <hr />

            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="product-list">
                {productList.map((product, index) => (
                    <ListTile key={index} product={product} onDelete={() => handleDelete(product.id)} />
                ))}
            </div>
        </div>
    );
}
