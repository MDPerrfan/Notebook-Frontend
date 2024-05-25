import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import '../App.css'
export default function About(props) {

  return (
    <>
    <Container fluid className="about-section" style={{color:props.mode==='dark'?'white':'black'}}>
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
            What is <strong className="coral"> TextCraft</strong>
            </h1>
            {/* <Aboutcard style={{color:props.mode==='dark'?'white':'black'}}/> */}
            <div className="quote-card-view" style={{color:props.mode==='dark'?'white':'black'}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}}>
            <span className="coral">TextCraft</span> is a versatile web application designed to empower users with a suite of text manipulation tools. Whether you're a writer, student, programmer, or just someone who frequently interacts with text, <span className="coral">TextCraft</span>
            provides a seamless platform to enhance your text processing experience.<span className="coral"></span>
            <br />
            <br />
            Key Features:
          </p>
          <ul style={{color:props.mode==='dark'?'white':'black',listStyleType:"none"}}>
            <li className="about-activity">
              <ImPointRight /><span className="coral">Text Transformation:</span>  Easily convert text to uppercase, lowercase, or remove spaces.
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="coral">Clipboard Integration:</span>   Swiftly copy and paste text to and from the system clipboard.
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="coral">Word and Character Count:</span>   Instantly track the word and character count of your text.
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="coral">Typing Speed Calculator:</span>   Measure your typing speed in real-time with a built-in WPM calculator.
            </li>
            <li className="about-activity">
              <ImPointRight/><span className="coral">Dark Mode Support:</span>   Customize your viewing experience with dark mode for reduced eye strain.
            </li>
          </ul>

          <p style={{color:props.mode==='dark'?'white':'black' }}>
          "The best thing about a boolean is even if you are wrong, you are only off by a bit."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
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
