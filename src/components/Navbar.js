import React, { useEffect } from 'react'
import { Link,useLocation} from 'react-router-dom'
import { SlNotebook } from "react-icons/sl";
export default function Navbar() {
    let location= useLocation();
    useEffect(()=>{
        
    },[location])
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
                        <div className="navbar-nav">
                            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
                            <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
