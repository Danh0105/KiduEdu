import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/user/Logo.png";
import user from "../../assets/user/user-solid-full.svg";
import '../../assets/user/header.css';
import Menu from '../../components/user/Menu';
export default function Header() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const login = () => {
        navigate("/login");
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsLoggedIn(false);
        navigate("/login");
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);

        // Theo dõi thay đổi token
        const handleStorage = () => {
            setIsLoggedIn(!!localStorage.getItem('token'));
        };
        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    return (
        <>

            <div className={`sticky-lg-top ${scrolled ? 'bg-secondary ' : 'bg-white'}`}>
                <header className={`container d-flex justify-content-between align-items-center py-0 gap-3 mb-2 pt-2`}>
                    <div className="navbar-nav d-flex flex-row gap-3 justify-content-between align-items-center">
                        <Link to="/">
                            <img src={logo} style={{ width: "90px", height: "auto" }} alt="Logo công ty Gentech" />
                        </Link>
                        <nav className={`sticky-lg-top ${scrolled ? 'bg-secondary navbar navbar-expand-lg  sticky-lg-top' : 'bg-white navbar navbar-expand-lg  sticky-lg-top'}`} aria-label="Eleventh navbar example">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarsExample09">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                                        <Menu />
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="navbar-nav d-flex flex-row gap-3">
                        <div className="navbar-nav d-flex flex-row gap-3">
                            <div className="position-relative d-inline-block">
                                <Link to="/cart" className="d-inline-block">
                                    <i className="bi bi-cart3 fs-3" style={{ width: 'clamp(28px, 5vw, 40px)', height: 'auto' }}></i>
                                </Link>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle text-danger border d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 'clamp(16px, 3.2vw, 20px)',
                                        height: 'clamp(16px, 3.2vw, 20px)',
                                        fontSize: 'clamp(10px, 2.2vw, 12px)',
                                        backgroundColor: "white",
                                    }}
                                >
                                    0
                                </span>
                            </div>


                        </div>
                        <div className="navbar-nav d-flex flex-row">
                            {isLoggedIn ? (
                                <button type="button" className="btn btn-danger d-flex align-items-center" onClick={logout} style={{ borderRadius: '18px', height: "35px" }}>
                                    <img src={user} alt="Cart" style={{ width: "25px", height: "25px", color: "white" }} />
                                    Đăng xuất
                                </button>
                            ) : (
                                <button type="button" className="btn btn-primary d-flex align-items-center" onClick={login} style={{ borderRadius: '18px', height: "35px" }}>
                                    <img src={user} alt="Cart" style={{ width: "25px", height: "25px", color: "white" }} />
                                    Đăng nhập
                                </button>
                            )}
                        </div>
                    </div>
                </header>


            </div>
        </>
    );
}
