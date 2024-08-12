import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { Header } from "./Header";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { Volunteer } from "./Volunteer";
import { Link } from "react-router-dom";

import carousal1 from "../carousal-3.webp";
import carousal2 from "../carousal-2.webp";
import carousal3 from "../carousal-4.webp";

import webimage1 from "../webimage-1.webp";
import webimage2 from "../webimage-2.webp";
import webimage3 from "../webimage-3.webp";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export function Home() {
  return (
    <>
      <NavigationBar />

      <Container fluid className="background">
        {/* <Header title="" description="" /> */}

        <div
          style={{
            fontFamily: "Segoe ui light",
            backgroundColor: "rgb(252,196,44)",
            padding: "20px",
            borderRadius: "5px",
            marginTop: "20px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 style={{ fontWeight: "bold" }}>OUR MISSION</h2>
              <p style={{ fontWeight: "bold" }}>
                Welcome to our home! At Hope for Strays, our vision is clear: to
                rescue animals in need and raise awareness about their plight.
                Through our tireless efforts, we offer hope to creatures great
                and small, providing them with a chance for a better life. But
                our mission goes beyond individual rescues; we aim to foster
                empathy and understanding for all living beings. Through
                education, advocacy, and community engagement, we strive to
                create a world where every animal is valued and respected. Join
                us as we work towards a more compassionate and harmonious planet
                for both humans and animals.
              </p>
            </Col>
          </Row>
        </div>

        <Carousel className="mt-4">
          <Carousel.Item>
            <img className="d-block w-100" src={carousal2} alt="First slide" />
            <Carousel.Caption>
              <h3>Our First Rescue</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal1} alt="Second slide" />
            <Carousel.Caption>
              <h3>Our Second Rescue</h3>
              <p>.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Our Third Rescue</h3>
              <p>.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* RESCUE CARDS */}
        <div
          style={{
            backgroundColor: "#E9EAEC",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <Container>
            <h3 style={{ textAlign: "center" }}>Animal in treatment</h3>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "5px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={webimage1} />
                  <Card.Body>
                    <Card.Title>Pearl's Story</Card.Title>
                    <Card.Text>
                      Pearl, a spirited puppy, endured a tragic accident caused
                      by a negligent Ola cab driver. Left with a severe wound on
                      her front leg, Pearl's pain was palpable. Yet, with timely
                      intervention and care, Pearl embarked on a journey of
                      healing, resilience, and newfound hope.
                    </Card.Text>
                    <a
                    href="https://www.positivelywoof.com/dog-rescue-stories-pearl-born-without-eyes/"
                    class="btn btn-primary"
                  >
                    Know more
                  </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "5px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={webimage2} />
                  <Card.Body>
                    <Card.Title>Rani's Story</Card.Title>
                    <Card.Text>
                      Rani, a gentle cow, was trapped in a ravine. Rescuers
                      rushed to her aid, finding her frightened but unharmed.
                      With careful teamwork, they hoisted Rani to safety. Now,
                      in the sanctuary, Rani roams freely, a symbol of
                      resilience and the kindness of strangers.
                    </Card.Text>
                    <a
                    href="https://www.petaindia.com/blog/peta-india-won-the-custody-of-rani-a-rescued-cow/"
                    class="btn btn-primary"
                  >
                    Know more
                  </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "5px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={webimage3} />
                  <Card.Body>
                    <Card.Title>Moti's Story</Card.Title>
                    <Card.Text>
                      Moti is a 5-months old pup rescued from Vasai recently. He
                      has a broken spine and in a very bad condition due to a
                      dog attack. He requires immediate attention and treatment
                      to give him relief from the intolerable pain. Donate now
                      to help Moti recieve help. We are raising Rs. 18000 for
                      her treatment.
                    </Card.Text>
                    <a
                    href="https://dharamsalaanimalrescue.org/pariah-story-street-dog/"
                    class="btn btn-primary"
                  >
                    Know more
                  </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ANIMAL AND OUR INFO */}
        <div
          style={{
            backgroundColor: "rgb(252,196,44)",
            padding: "20px",
            marginTop: "30px",
            borderRadius: "5px",
          }}
        >
          <Container>
            <Row>
              <Col md={6}>
                <img
                  src="https://www.amtmindia.org/wp-content/uploads/2021/10/dog-illustration.png"
                  alt="Description"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h3>Our Latest Campaign</h3>
                <p>
                  We are launching a new campaign to help stray animals in urban
                  areas. Our goal is to provide food, shelter, and medical care
                  to as many strays as possible. Your support can make a big
                  difference in the lives of these animals. Join us in our
                  mission to give them a better future.
                </p>
                <Link to="/volunteer">
                  <Button variant="primary" size="lg">
                    Get Involved
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        {/* VOLUNTEER AND DONATE */}
        <div
          style={{ padding: "20px", marginTop: "20px", borderRadius: "5px" }}
        >
          <Row>
            <Col>
              <Card
                style={{
                  width: "30rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  border: "5px solid ",
                }}
                className="mx-auto mb-4"
              >
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/people-donating-sanitary-material_23-2148507989.jpg?
                                t=st=1716120739~exp=1716124339~hmac=8fe3f6f2c292a50388a6a1ff1e52faff94fbee8a5ddd553ac02320cf98a87cba&w=740"
                />
                <Card.Body>
                  <Card.Title>Volunteer</Card.Title>
                  <Card.Text>
                    At Hope for Strays, volunteering means more than caring for
                    animals. You'll assist in rescues, organize events, and help
                    with outreach to find forever homes for strays like Bella.
                    Your efforts provide medical care, nourishment, and love.
                    Join us to make a lasting impact on the lives of these
                    vulnerable animals today.
                  </Card.Text>
                  <Link to="/volunteer">
                    <Button variant="primary">Volunteer</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  width: "30rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  border: "5px solid ",
                }}
                className="mx-auto mb-4"
              >
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/adopt-pet-concept_23-2148523582.jpg?
                                t=st=1716120853~exp=1716124453~hmac=91b9397ea5061165a9eaceadca7fc1ff9c8f2f8f3ff7a9892b4ab12eea5c6f10&w=740"
                />
                <Card.Body>
                  <Card.Title>Adopt A Friend</Card.Title>
                  <Card.Text>
                    Adopting rescue puppies and kittens saves lives and combats
                    pet overpopulation. By choosing adoption, you provide a
                    loving home to a deserving animal, reduce demand for
                    unethical breeding, and support animal shelters. Make a
                    compassionate choice—adopt a rescue pet and experience the
                    joy of giving a puppy or kitten a second chance.
                  </Card.Text>
                  <a
                    href="https://thepetnest.com/adopt-a-pet"
                    class="btn btn-primary"
                  >
                    Adopt
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
        {/* FOOTER */}
        {/* <footer
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
              <h5>Follow Us</h5>
              <div>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://twitter.com"
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
                style={{ marginTop: "10px" }}
              >
                Corporate Social Responsibility
              </Button>
            </Col>
          </Row>
        </Container>
      </footer> */}
      </Container>
    </>
  );
}
