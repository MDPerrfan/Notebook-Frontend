import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
    let location = useLocation();
    useEffect(() => {

    }, [location])
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {/*  <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}<SlNotebook />
                        My Notebook
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {localStorage.getItem('token') ? (
                        <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                    ) : (
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
                        </form>
                    )}
                    </div>

                </div>
            </nav>
        </>
    )
}
