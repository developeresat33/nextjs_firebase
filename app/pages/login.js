"use client";
// app/login.js
import { useState, } from 'react';
import AlertModal from '../widgets/alert_modal';
import { doLogin } from '../states/home_provider';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal görünürlüğü
    const [isLoading, setLoginSuccess] = useState(false);
    const [errorMessage, setMsg] = useState('');
    const handleSubmit = async (e) => {
        setShowModal(false);
        e.preventDefault();
        setLoginSuccess(true);
        const loginSuccess = await doLogin(email, password);



        if (!loginSuccess) {
            setMsg('Giriş bilgileri hatalı. Lütfen tekrar deneyin.');
            setShowModal(true);



        } else {
            
            console.log("Kullanıcı başarıyla giriş yaptı.");
        }

        setLoginSuccess(false);
    };



    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
            <div className="bg-light rounded shadow p-5" style={{ width: '400px', height: '400px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Adresi</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Şifre</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Beni Hatırla</label>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary" style={{ width: '150px' }}>      {/* Spinner */}
                            {isLoading && <div className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}  {!isLoading && (<span>Giriş Yap</span>)} </button>
                    </div>
                </form>
            </div>

            <AlertModal
                show={showModal}
                title="Giriş Hatası"
                description={errorMessage}
            />

        </div>


    );
}
