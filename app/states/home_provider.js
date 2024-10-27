
import { db, query, collection, addDoc, where, getDocs } from '../lib/firebase.js';




// Giriş fonksiyonu
export const doLogin = async (email, password, setIsVisible) => {
    setIsVisible(true); // Loading görünür hale gelsin

    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email), where('password', '==', password));
        const querySnapshot = await getDocs(q);

        return !querySnapshot.empty; // Giriş başarılıysa true döner
    } catch (error) {
        console.error("Giriş hatası:", error);
        return false;
    } finally {
        setIsVisible(false); // İşlem bittiğinde Loading gizlensin
    }
};

// Kayıt fonksiyonu
export const register = async (userData, setIsVisible) => {
    setIsVisible(true); // Loading görünür hale gelsin

    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', userData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: 'Bu e-posta adresi zaten kullanılıyor.' };
        }

        // password_confirmation'ı hariç tutarak yeni bir nesne oluştur
        const { password_confirmation, ...dataToSend } = userData;

        await addDoc(usersRef, dataToSend); // Yeni nesneyi ekle

        return { success: true, message: 'Kayıt başarılı.' };
    } catch (error) {
        console.error("Kayıt hatası:", error);
        return { success: false, message: 'Kayıt işlemi başarısız.' };
    } finally {
        setIsVisible(false); // İşlem bittiğinde Loading gizlensin
    }
};
