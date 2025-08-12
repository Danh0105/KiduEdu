import React, { useState } from 'react';
import product2 from '../../assets/user/product2.png';
import promotion from '../../assets/user/promotion.png';
import Dropdown from '../../components/user/Dropdown';
export default function Cart() {
    const [count, setCount] = useState(1);
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ width: "18px" }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <th scope="col" >Sản phẩm</th>
                        <th className='text-center' scope="col" >Đơn giá</th>
                        <th className='text-center' scope="col" >Số lượng</th>
                        <th className='text-center' scope="col" >Số tiền</th>
                        <th className='text-center' scope="col" >Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }} >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>
                    <tr>
                        <th className='align-middle text-center ' scope="row">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <td className='d-flex flex-row align-items-center ' style={{ width: "auto" }}>
                            <img src={product2} alt="Sản phẩm" width={80} height={80} />
                            <div class="d-flex flex-column bd-highlight">
                                <a style={{
                                    textDecoration: "none",
                                    width: "208px",
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.87)",
                                    lineHeight: "16px",
                                }} href='/' title='Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC' class="link-dark p-2 bd-highlight">
                                    Bộ Cảm Biến Kiểm Tra PH 0-14 + Đầu Dò Điện Cực BNC
                                </a>
                                <div class="bd-highlight">
                                    <img src={promotion} alt="Deal" width={208} height={18} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <Dropdown />
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: "rgba(0,0,0,.54)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            paddingLeft: "12px"
                                        }}
                                    >
                                        Một bộ1
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className='align-middle text-center ' style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            paddingLeft: "12px"
                        }} >

                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td class="align-middle text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn  border-end-0 btn-outline-secondary border-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control text-center rounded-0 border-secondary"
                                    value={count}
                                    min={1}
                                    style={{
                                        width: '50px',
                                        height: "32px",
                                    }}
                                    onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                                />
                                <button
                                    style={{ width: '50px', height: "32px" }}
                                    className="btn border-start-0 btn-outline-secondary rounded-0 d-flex align-items-center justify-content-center"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td className='align-middle text-center'
                            style={{
                                fontSize: "14px",
                                lineHeight: "16px",
                                paddingLeft: "12px",
                                color: '#ee4d2d'
                            }}
                        >
                            <p className='mb-0'>₫195.646</p>
                        </td>
                        <td className='align-middle text-center'>
                            Xóa
                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <div className='me-2'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                    <div
                        style={{
                            fontSize: "20px",
                        }}
                    >Chọn tất cả</div>
                </div>
                <div className='d-flex align-items-center gap-3 m-3'>
                    <div
                        style={{
                            fontSize: "25px",
                            lineHeight: "20px",
                            paddingLeft: "12px",
                            color: '#ee4d2d'
                        }}
                    >
                        Tổng cộng (0 Sản phẩm):₫0
                    </div>
                    <div>
                        <button
                            className='btn btn-danger'
                            style={{
                                fontSize: "20px",
                            }}
                        >Mua Hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
