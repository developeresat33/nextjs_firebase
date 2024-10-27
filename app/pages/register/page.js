// app/pages/register.js
"use client";
import { useState } from 'react';
import { useRegisterController } from '../../controllers/register_controller';
import AlertModal from '../../widgets/alert_modal';
import { register } from '../../states/home_provider';
import { useLoading } from '../../widgets/loading';

export default function Register() {
    const { formData, handleChange } = useRegisterController();
    const [errorMessage, setMsg] = useState('');
    const [showModal, setShowModal] = useState(false);

    const { setIsVisible } = useLoading(); // Burada useLoading kullanımı uygun

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Kayıt verisi:", formData);

        if (formData.password !== formData.password_confirmation) {
            setMsg('Şifreler uyuşmuyor. Lütfen tekrar deneyin.');
            setShowModal(true);
        } else {
            const result = await register(formData, setIsVisible);
            if (result.success) {
                setMsg(result.message);
                setShowModal(true);
                // Başarılı kayıt sonrası yönlendirme yapılabilir
            } else {
                setMsg(result.message);
                setShowModal(true);
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
                <div className="bg-light rounded shadow p-5" style={{ width: '400px', height: '550px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Ad</label>
                            <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Soyad</label>
                            <input type="text" className="form-control" id="surname" value={formData.surname} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Şifre</label>
                            <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password_confirmation" className="form-label">Şifre Tekrar</label>
                            <input type="password" className="form-control" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />
                        </div>
                        <div className='button_inbox d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                        </div>
                    </form>
                </div>
            </div>

            <AlertModal
                show={showModal}
                title=""
                description={errorMessage}
                onClose={handleCloseModal}  // Modalı kapatma fonksiyonu
            />
        </div>
    );
}
