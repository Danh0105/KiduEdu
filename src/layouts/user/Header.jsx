import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/user/Logo.png";
import cart from "../../assets/user/cart-shopping-solid-full.svg";
import heart from "../../assets/user/heart-solid-full.svg";
import user from "../../assets/user/user-solid-full.svg";
import '../../assets/user/header.css';
import Navigate from "./Navigation"
import Menu from '../../components/user/Menu';
export default function Header() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    const login = () => {
        navigate("/login");
    };
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <div className={`sticky-lg-top ${scrolled ? 'bg-secondary' : 'bg-white'}`}>
                <header className={`container d-flex justify-content-between align-items-center py-0 border-bottom gap-3 mb-2`}>
                    <div className="navbar-nav d-flex flex-row gap-3">
                        <Link to="/">
                            <img src={logo} style={{ width: "90px", height: "auto" }} alt="Logo công ty Gentech" />
                        </Link>
                        <nav className=" navbar navbar-expand-lg bg-body-tertiary rounded sticky-lg-top" aria-label="Eleventh navbar example">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarsExample09">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <Menu />
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="navbar-nav d-flex flex-row gap-3">
                        <div className="navbar-nav d-flex flex-row gap-3">
                            <div>
                                <Link to="/cart"><img src={cart} alt="Cart" style={{ width: "35px", height: "35px", color: "white" }} /></Link>
                                <p
                                    className="rounded-circle"
                                    style={{
                                        position: "absolute",
                                        color: "#d73038",
                                        backgroundColor: "white",
                                        top: "10px",
                                        right: "252px",
                                        width: "18px",
                                        height: "18px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    0
                                </p>
                            </div>

                        </div>
                        <div className="navbar-nav d-flex flex-row">
                            <button type="button" className="btn btn-danger" onClick={login} style={{ borderRadius: '18px' }}>
                                <img src={user} alt="Cart" style={{ width: "30px", height: "30px", color: "white" }} />
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </header>


            </div>
        </>
    );
}
