"use client";


import { db, query, collection, addDoc, where, getDocs, doc, deleteDoc } from '../lib/firebase.js';



export const addProduct = async (productData, setIsVisible) => {
    setIsVisible(true); // Loading görünür hale gelsin

    try {
        const productRef = collection(db, 'products');
        const q = query(productRef, where('productName', '==', productData.productName));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: 'Bu ürün adı zaten kullanılıyor.' };
        }



        await addDoc(productRef, productData); // Yeni nesneyi ekle

        return { success: true, message: 'Kayıt başarılı.' };
    } catch (error) {
        console.error("Kayıt hatası:", error);
        return { success: false, message: 'Kayıt işlemi başarısız.' };
    } finally {
        setIsVisible(false); // İşlem bittiğinde Loading gizlensin
    }
};



// Ürünü Firestore'dan silen fonksiyon
export const deleteProduct = async (productId, setIsVisible) => {
    setIsVisible(true); // Loading görünür hale gelsin

    try {
        const productDocRef = doc(db, 'products', productId);
        await deleteDoc(productDocRef);
        return { success: true, message: 'Ürün başarıyla silindi.' };
    } catch (error) {
        console.error("Silme hatası:", error);
        return { success: false, message: 'Ürün silme işlemi başarısız.' };
    } finally {
        setIsVisible(false); // İşlem bittiğinde Loading gizlensin
    }
};