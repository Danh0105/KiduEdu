import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

// Layouts
import UserLayout from "../layouts/user/UserLayout";
// import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/user/Login";
// Pages - User
import Home from "../pages/user/Home";
import Dashboard from "../pages/user/Dashboard"
import Layout from "../layouts/user/Layout";
import Register from "../pages/user/Register";
// import PrivateRoute from "../components/user/PrivateRoute";
import Lesson from "../pages/user/Lesson";
import Store from "../pages/user/Store";
import Cart from "../pages/user/Cart";
import About from "../pages/user/About";
export default function AppRoutes() {
    return (
        <BrowserRouter basename="/KiduEdu">
            <Routes>

                {/* User routes */}
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login" element={<Layout />}>
                    <Route index element={<Login />} />
                </Route>
                <Route path="/register" element={<Layout />}>
                    <Route index element={<Register />} />
                </Route>
                <Route path="/dashboard" element={<UserLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/about" element={<UserLayout />}>
                    <Route index element={<About />} />
                </Route>
                {/* <Route
                    path="/lesson"
                    element={
                        <PrivateRoute>
                            <Lesson />
                        </PrivateRoute>
                    }
                /> */}
                <Route path="/lesson" element={<Layout />}>
                    <Route index element={<Lesson />} />
                </Route>
                <Route path="/store" element={<Layout />}>
                    <Route index element={<Store />} />
                </Route>
                <Route path="/cart" element={<Layout />}>
                    <Route index element={<Cart />} />
                </Route>
                {/* Admin routes */}
                {/* <Route
                    path="/admin"
                    element={isAdmin ? <AdminLayout /> : <Navigate to="/" replace />}
                >

                </Route> */}

                {/* Not found route */}
                {/* <Route path="*" element={<NotFound />} /> */}

            </Routes>
        </BrowserRouter >
    );
}
