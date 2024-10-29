import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the credentials
    if (credentials.email === "" || credentials.password === "") {
        alert("Email and password cannot be empty");
        return;
    }

    try {
        const response = await fetch("https://notebook-backend-dn86.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        console.log("Login response:", json); // Log the complete response

        if (json.success) {
            // Save the auth token
            localStorage.setItem('token', json.authToken);
            console.log("Stored Token:", localStorage.getItem('token'));

            // Redirect to home page
            navigate("/"); // Use navigate to redirect the user to the home page
        } else {
            props.showAlert("Invalid Email or Password!", "danger");
        }
    } catch (error) {
        console.error("Error during login:", error);
        props.showAlert("An error occurred. Please try again.", "danger");
    }
}

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='container login'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-outline-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
