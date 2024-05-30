import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "",name:"",cpassword:""});
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (credentials.password !== credentials.cpassword) {
            alert("Passwords do not match");
            return;
        }
        // Validate the credentials
        if (credentials.email === "" || credentials.password === "") {
            alert("Email and password cannot be empty");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                    name:credentials.name 
                })
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                if (json.error === "Email already exists!") {
                    props.showAlert("User already exists", "danger");
                } else {
                    props.showAlert("An error occurred. Please try again.", "danger");
                }
            } else {
                // Save the auth token
                localStorage.setItem('token', json.authtoken);
    
                // Redirect to login page
                navigate("/login");
                props.showAlert("Successfully created your account!", "success");
            }
        } catch (error) {
            console.error("Error during Signup:", error);
            props.showAlert("An error occurred. Please try again.", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                onChange={onChange}
                name="name"
                id="name"
                value={credentials.name}
                required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
                type="email"
                className="form-control"
                onChange={onChange}
                id="email"
                name="email"
                value={credentials.email}
                aria-describedby="emailHelp"
                required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                onChange={onChange}
                name="password"
                id="password"
                value={credentials.password}
                required
                minLength={5}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input
                type="password"
                className="form-control"
                onChange={onChange}
                name="cpassword"
                id="cpassword"
                value={credentials.cpassword}
                required
                minLength={5}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}
