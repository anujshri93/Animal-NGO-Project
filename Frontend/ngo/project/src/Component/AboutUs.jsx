import { Container, Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { Header } from "./Header";
import image from "../rutuja.png";
import image2 from "../amol.jpg";
import image3 from "../vivek.jpg";
import tip1 from "../tip1.jpg";
import tip2 from "../tip3.jpg";
import tip3 from "../tip2.jpg";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export function AboutUs() {
  return (
    <>
    <NavigationBar/>
    <Container>
      <Header 
        title="Welcome to About Us"
        description="We are a nonprofit animal welfare organisation working to create a safe and healthy world for every animal, and for the people who love them.
"
      />
      <Container>
        <div
          style={{
            backgroundImage:
              "url(https://www.amtmindia.org/wp-content/uploads/2024/03/Banner-2048x768.jpg)",

            padding: "20px",
            marginTop: "30px",
            borderRadius: "5px",
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundPosition: "center", // Centers the image
            width: "100%", // Set the width of the div
            height: "400px",
            display: "flex", // Flexbox for alignment
            alignItems: "center", // Center vertically
            justifyContent: "center", // Align content to the right
          }}
        >
          {/*                            
                                <h3>Our Latest Campaign</h3>
                                <p>
                                    We are launching a new campaign to help stray animals in urban areas. Our goal is to provide food, shelter, and medical care to as many strays as possible.
                                    Your support can make a big difference in the lives of these animals. Join us in our mission to give them a better future.
                                </p>
                                <Button variant="primary" size="lg" className="align-self-start">Get Involved</Button>
                            */}
        </div>

        <div
          style={{
            backgroundColor: "#E9EAEC",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <Container>
            <h3 style={{ textAlign: "center" }}>Animal Tips and Care</h3>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={tip1} />
                  <Card.Body>
                    <Card.Title>Animal protection policy</Card.Title>
                    <Card.Text>
                      Safeguarding the Voiceless: Animal Protection Policies in
                      India May 15, 2024 No Comments India, with its rich,
                      variable landscape and diverse ecosystems, is home to a
                      myriad of animal species. Recognising the importance of
                      preserving its natural heritage and ensuring the welfare
                      of its inhabitants, the country has implemented a range of
                      animal protection policies.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={tip2} />
                  <Card.Body>
                    <Card.Title>Pet Friendly Road</Card.Title>
                    <Card.Text>
                      Embarking on a road trip can be an exhilarating adventure,
                      but it’s even more rewarding when you have your furry
                      companions along for the ride. Here are some essential
                      considerations to keep in mind when taking your pets on a
                      road trip. Remember, safety should always come first.
                      Ensure your pets are securely restrained in the vehicle
                      and have access to water and frequent breaks for exercise.
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={tip3} />
                  <Card.Body>
                    <Card.Title>First Aid</Card.Title>
                    <Card.Text>
                      Pet Safety 101: Essential First Aid Every Pet Parent
                      Should Know May 1, 2024 No Comments Being equipped with
                      the knowledge and skills to administer first aid can be
                      lifesaving for your beloved pets. By being prepared and
                      proactive, you can be the hero your pet needs in times of
                      crisis. Remember, quick and calm action is crucial in
                      emergencies. Your pet's well-being depends on your ability
                      to act decisively."
                    </Card.Text>
                    <Button variant="primary">Know more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          style={{
            backgroundColor: "light grey",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          <Container>
            <h3 style={{ textAlign: "center" }}>ABOUT US</h3>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Rutuja Katekhaye</Card.Title>
                    <Card.Text>
                      CDAC KHARGHAR - The spokesperson. She is a fearless
                      speaker and confindent in what she does.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={image2} />
                  <Card.Body>
                    <Card.Title>Amol Sonawane</Card.Title>
                    <Card.Text>
                      CDAC KHARGHAR - The Thinker , dynamic and logical in
                      approach, consistently brings balance to the team.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "20rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    border: "1px solid ",
                  }}
                  className="mx-auto mb-4"
                >
                  <Card.Img variant="top" src={image3} />
                  <Card.Body>
                    <Card.Title>Vivek Jadhav</Card.Title>
                    <Card.Text>
                      CDAC KHARGHAR - Creative , a master of design and
                      creativity, always brings a fresh perspective.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          
        </div>
      </Container>
      
    </Container>
    <Footer/>
    </>
    
  );
}

export default AboutUs;
