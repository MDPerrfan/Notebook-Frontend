import React from 'react';
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
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Hi I'm allert"/>
        <div className="container-main">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </div>
        <Footer />
      </Router>
      </NoteState>
    </>
  );
}

export default App;
