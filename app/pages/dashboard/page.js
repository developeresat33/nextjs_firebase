"use client";
import { useState } from 'react';
import '../dashboard/custom.css';
import MainContent from './main_content';
import SettingsContent from './settings_content';
import ProductsContent from './products_content';
import { useRouter } from 'next/navigation'; // 'next/navigation' ile doğru import

export default function Dashboard() {
    const [activeContent, setActiveContent] = useState('main'); // Varsayılan içerik
    const router = useRouter();
    const handleMenuClick = (content) => {
        setActiveContent(content); // Tıklanan menüye göre içeriği güncelle
    };
    const handleLogout = () => {
        console.log("Çıkış yapılıyor...");
        router.push('./login'); // Login sayfasına yönlendir
    };
    const renderContent = () => {
        switch (activeContent) {
            case 'products':
                return <ProductsContent />;
            case 'settings':
                return <SettingsContent />;
            case 'main':
            default:
                return <MainContent />;
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="row gx-0">
                <div className="col-md-3">
                    <div className="content-left" style={{ width: "100%" }} id="sidebarMenu">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="sidebar-logo d-flex justify-content-between">
                                <i className="bi bi-app-indicator"></i>
                                <span className="logo-text ms-2 d-none d-md-inline">StarSolve</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-secondary d-md-none me-2" type="button" data-bs-toggle={"collapse"}
                                    data-bs-target={"#mobileMenu"} aria-expanded="false" aria-controls="mobileMenu">
                                    <i className="bi bi-list">
                                    </i> {/* Menu Icon */}
                                </button>
                                <button className="btn btn-outline-light" type="button" onClick={handleLogout}>
                                    <i className="bi bi-box-arrow-right" ></i> {/* Logout Icon */}

                                </button>
                            </div>
                        </div>
                        <div className="collapse d-md-block" id="mobileMenu">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-light" onClick={() => handleMenuClick('main')}>
                                        <i className="bi bi-house me-2"></i>Anasayfa
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-light" onClick={() => handleMenuClick('products')}>
                                        <i className="bi bi-cart me-2"></i>Ürünler
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-light" onClick={() => handleMenuClick('settings')}>
                                        <i className="bi bi-gear me-2"></i>Ayarlar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-9">
                    <div id="content-middle" className="content-middle" style={{ width: "100%", height: "100vh" }}>
                        {renderContent()} {/* Aktif içeriği render et */}
                    </div>
                </div>
            </div>
        </div>
    );
}
