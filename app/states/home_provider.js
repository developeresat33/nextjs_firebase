// app/states/home_provider.js
import { db,query, collection, where, getDocs } from '../lib/firebase.js'; // Firebase yapılandırmanızı içe aktarın

export const doLogin = async (email, password) => {
    try {
        // Kullanıcıları sorgula
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email), where('password', '==', password));
        const querySnapshot = await getDocs(q);

        // Eğer kullanıcı bulunduysa, giriş başarılı
        if (!querySnapshot.empty) {
            return true; // Giriş başarılı
        }
        return false; // Giriş başarısız
    } catch (error) {
        console.error("Giriş hatası:", error);
        return false;
    }
};