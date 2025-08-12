import logo from "../../assets/user/Logo.png";
import logoF from "../../assets/user/logoFooter.png";
import Zalo from "../../assets/user/zalo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faLocationDot, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import Menu from "../../components/user/Menu";
export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="mt-1 border-top border-3">
            <div className="bg-secondary text-light">
                <div class="container-xl d-flex justify-content-evenly mb-1 ">
                    <div className="p-2 bd-highlight" style={{ width: "400px" }}>
                        <div className="d-flex justify-content-center">
                            <img src={logoF} style={{ width: "100px", height: "auto" }} alt="Logo công ty Gentech" />
                        </div>
                        <p>Chúng tôi không chỉ bán LEGO / NON LEGO mà còn mang đến trải nghiệm mới mẻ cho khách hàng với dịch vụ lắp ráp trải nghiệm tại chỗ miễn phí tại cửa hàng hoặc các điểm bán của <strong><a href="http://novocafe.vn/">Novo Café Vietnam.</a></strong></p>
                    </div>
                    <div className="p-2 bd-highlight" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", width: "400px" }}>
                        <div className="mb-1" style={{ position: "relative" }}>
                            <p style={{ fontWeight: 600, marginBottom: "0px" }}>Thông tin liên hệ</p>
                            <div className="border-bottom border-2 border border-dark" style={{ width: "27%" }}></div>
                        </div>
                        <p className="text-wrap"><FontAwesomeIcon icon={faLocationDot} /> Địa Chỉ : 231/1 Nguyễn Phúc Chu - Phường 15 - Quận Tân Bình - TP. Hồ Chí Minh.</p>
                        <p className="text-wrap"><FontAwesomeIcon icon={faPhone} /> ĐIện thoại :  0707 868 600 - 0789 636 979</p>
                        <p className="text-wrap"><FontAwesomeIcon icon={faEnvelope} /> Mail : hcns@ichiskill.edu.vn</p>
                        <p className="text-wrap"><FontAwesomeIcon icon={faGlobe} /> Website : www.ichiskilll.com</p>
                    </div>
                    <div className="p-2 bd-highlight" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6" }}>
                        <div className="mb-1" style={{ position: "relative" }}>
                            <p style={{ fontWeight: 600, marginBottom: "0px" }}>Chính sách</p>
                            <div className="border-bottom border-2 border border-dark" style={{ width: "35%" }}></div>
                        </div>
                        <p className="text-wrap">CHÍNH SÁCH THANH TOÁN</p>
                        <p className="text-wrap"> CHÍNH SÁCH BẢO MẬT THÔNG TIN</p>
                        <p className="text-wrap"> ĐĂNG KÝ HỌC VIÊN</p>
                        <p className="text-wrap">  QUYỀN LỢI CỦA HỌC SINH</p>
                    </div>
                    <div className="p-2 bd-highlight" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6" }}>
                        <div className="mb-1" style={{ position: "relative" }}>
                            <p style={{ fontWeight: 600, marginBottom: "0px" }}>Dịch vụ khách hàng</p>
                            <div className="border-bottom border-2 border border-dark" style={{ width: "95%" }}></div>
                        </div>
                        <p className="text-wrap">Về chúng tôi</p>
                        <p className="text-wrap">Liên hệ với chúng tôi</p>
                        <p className="text-wrap">FAQ</p>
                        <p className="text-wrap">Hệ thống của hàng</p>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-0 my-0 border-top container-xxl">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2025 GENTECH, Inc</p>
                    <a href="/home" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                        <img src={logo} style={{ width: "80px", height: "auto" }} alt="Logo công ty Gentech" />
                    </a>

                    <ul className="nav col-md-4 justify-content-end text-dark">
                        <Menu />
                    </ul>
                    <div style={{
                        position: 'fixed',
                        bottom: '160px',
                        right: '20px',
                        display: 'flex',
                        borderRadius: '50%',
                        backgroundColor: '#0000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        zIndex: 9999
                    }}>
                        <img src={Zalo} style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                        }}
                            alt="Logo zalo" />
                    </div>
                    <div style={{
                        position: 'fixed',
                        bottom: '90px',
                        right: '20px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#0084FF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        zIndex: 9999
                    }}>
                        <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
                    </div>
                    {showScroll && (
                        <div onClick={scrollToTop} style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '28px',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            zIndex: 9998
                        }}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                    )}
                </div>

            </div>
        </footer>


    )
}

