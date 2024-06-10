import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import '../App.css'
export default function About(props) {

  return (
    <>
      <Container fluid className="about-section" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <Container >
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                What is <strong className="coral">My Notebook</strong>
              </h1>
              {/* <Aboutcard style={{color:props.mode==='dark'?'white':'black'}}/> */}
              <div className="quote-card-view" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      <span className="coral">My Notebook</span> is a user-friendly web application designed to help you efficiently manage your notes. Whether you're a student, professional, or anyone needing to organize thoughts and information, <span className="coral">My Notebook</span> offers a streamlined platform for creating, editing, and storing your notes securely.
                      <br />
                      <br />
                      Key Features:
                    </p>
                    <ul style={{ color: props.mode === 'dark' ? 'white' : 'black', listStyleType: "none" }}>
                      <li className="about-activity">
                        <ImPointRight /><span className="coral">Account Management:</span> Open your personal account to securely save and manage your notes.
                      </li>
                      <li className="about-activity">
                        <ImPointRight /><span className="coral">Create and Store Notes:</span> Quickly add new notes and store them for easy access later.
                      </li>
                      <li className="about-activity">
                        <ImPointRight /><span className="coral">Update and Edit Notes:</span> Effortlessly update and modify your notes as your thoughts evolve.
                      </li>
                      <li className="about-activity">
                        <ImPointRight /><span className="coral">Delete Notes:</span> Remove notes that you no longer need with a simple click.
                      </li>
                      <li className="about-activity">
                        <ImPointRight /><span className="coral">Dark Mode Support:</span> Enjoy a comfortable viewing experience with the option to switch to dark mode.
                      </li>
                    </ul>
                  </blockquote>

                </Card.Body>
              </div>
            </Col>
            {/*           <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
          </Row>
        </Container>
      </Container>
    </>
  )
}
