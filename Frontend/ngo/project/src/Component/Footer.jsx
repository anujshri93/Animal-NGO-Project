import react from 'react';
import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer(){

    return(

        <footer
        style={{
          backgroundColor: "rgb(252,196,44)",
          padding: "20px 0",
          marginTop: "20px",
          boxShadow: "12px 12px 12px rgba(0,0,0,0.1)",
          
        }}
      >
        <Container>
          <Row>
            <Col md={8} className="text-center">
              <h5 style={{marginLeft:"350px", fontWeight:"bold", color:"#2979FF"}}>Follow Us</h5>
              <div style={{marginLeft:"350px"}}>
                <a
                  href="https://www.facebook.com/amtmindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.instagram.com/amtmindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCz64RiyW03lib1S1OwCwPEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaYoutube size={30} />
                </a>
                <a
                  href="https://www.twitter.com/amtmindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaTwitter size={30} />
                </a>
              </div>
            </Col>
            <Col md={4} className="text-right">
              <Button
                variant="secondary"
                href="/csr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "25px", marginRight:"10px", backgroundColor:"#3D5AFE"}}
              >CSR
                {/* Corporate Social Responsibility */}
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}