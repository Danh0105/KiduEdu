import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link px-2 text-body-secondary text-dark"}`}>Trang chủ</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link px-2 text-body-secondary text-dark"}`} to="/store"> Cửa hàng</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link px-2 text-body-secondary text-dark"}`} to="/lesson">Khóa học</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : "nav-link px-2 text-body-secondary text-dark"}`} to="/about">About </NavLink>
            </li>
        </>

    )
}
