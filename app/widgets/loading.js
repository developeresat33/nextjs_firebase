
"use client";
import { createContext, useContext, useState } from 'react';


const LoadingContext = createContext();

// useLoading Hook'u oluştur
// useLoading hook'u
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

export const LoadingProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <LoadingContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
            {isVisible && <Loading />} {/* isVisible durumuna göre Loading gösterilir */}
        </LoadingContext.Provider>
    );
};

export default function Loading() {
    const { isVisible } = useLoading(); // isVisible değerini al

    if (!isVisible) return null; // Eğer görünür değilse bileşeni render etmeyin

    return (
        <div className="d-flex justify-content-center align-items-center loading-overlay" style={{ height: '100vh', width: '100vw' }}>
            <div className="bg-light box d-flex justify-content-center align-items-center" style={{ width: '65px', height: '65px', borderRadius: '10px' }}>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
}