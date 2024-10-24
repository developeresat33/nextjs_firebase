import Login from '../app/pages/login.js';

export default function Home() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
                <a className="navbar-brand" href="#">
                    StarSolve Dashboard
                </a>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hakkında</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">İletişim</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Login /> {/* Login bileşenini burada çağır */}
        </div>
    );
}
