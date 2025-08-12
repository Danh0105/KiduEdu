import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/user/sign-in.css";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json(); // Phản hồi là JSON: { token: "..." }

            if (res.ok) {
                localStorage.setItem('token', data.token);
                alert('Đăng nhập thành công!');
                navigate('/dashboard');
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert('Không kết nối được máy chủ');
            console.error(error);
        }
    };

    return (
        <div className="py-4 bg-body-tertiary d-flex justify-content-center">
            <form style={{ width: "500px" }}>
                <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password"
                        id="floatingPassword"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
                    <label className="form-check-label" for="checkDefault">
                        Remember me
                    </label> </div> <button className="btn btn-primary w-100 py-2" onClick={login} type="submit">Sign in</button>
            </form>

        </div>

    )
}
