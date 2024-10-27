// app/pages/main_content.js
export default function MainContent() {
    return (
        <div className="main-content">
            <h2>Hoşgeldiniz, Kullanıcı!</h2>
            <p>Dashboard'ınıza hoş geldiniz. Aşağıdaki bilgilere göz atın:</p>

            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Toplam Kullanıcı</div>
                        <div className="card-body">
                            <h5 className="card-title">150</h5>
                            <p className="card-text">Sistemde kayıtlı toplam kullanıcı sayısı.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Yeni Kayıtlar</div>
                        <div className="card-body">
                            <h5 className="card-title">20</h5>
                            <p className="card-text">Son 30 günde yeni kaydedilen kullanıcılar.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header">Aktif Kullanıcı</div>
                        <div className="card-body">
                            <h5 className="card-title">75</h5>
                            <p className="card-text">Son 24 saatte sisteme giriş yapan kullanıcılar.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h4>Son Aktiviteler</h4>
                <ul className="list-group">
                    <li className="list-group-item">Kullanıcı A kaydı oluşturdu.</li>
                    <li className="list-group-item">Kullanıcı B ayarlarını güncelledi.</li>
                    <li className="list-group-item">Kullanıcı C profil resmini değiştirdi.</li>
                </ul>
            </div>
        </div>
    );
}
