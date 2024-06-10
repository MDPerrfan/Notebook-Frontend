import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container-main">
            <div className="alert" style={{ height: "40px" }}>
              <Alert alert={alert} />
            </div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
            </Routes>
            <Footer />
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
