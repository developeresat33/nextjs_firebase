"use client"; // Client bileşeni olduğunu belirtir
import { useState, useEffect } from 'react';

export default function AlertModal({ title, description, show }) {
    const [isVisible, setIsVisible] = useState(show); // Başlangıçta show değerini alır

    // show değeri her değiştiğinde bileşen içindeki state güncellenir
    useEffect(() => {
        setIsVisible(show);
    }, [show]);

    // Eğer modal görünür değilse render etme
    if (!isVisible) return null;

    const handleClose = () => {
        setIsVisible(false); // Modalı kapat
    };

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" aria-hidden="true" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button> {/* Modalı kapat */}
                        </div>
                        <div className="modal-body">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
