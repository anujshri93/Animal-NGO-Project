import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  ABOUT_US,
  ASK_FOR_HELP,
  BASE_ROUTE,
  DONATE,
  LOG_IN,
  SIGN_UP,
} from "../Constants/AppRoute";
import logo from "../img2.png"; // Ensure you have the correct path to your logo image
import { logout } from "../Services/AdminService";
import { useNavigate } from "react-router-dom";

export function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(BASE_ROUTE);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#FFFEE0",
        height: "80px",
        paddingBottom: "0px",
        paddingTop: "0px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand
          href={ABOUT_US}
          style={{ fontWeight: "bolder", color: "#FFA000" }}
        >
          HOPE FOR STRAYS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{ marginLeft: "auto", marginRight: "250px" }}
          >
            <LinkContainer to={BASE_ROUTE}>
              <Nav.Link style={{ marginRight: "20px", padding: "15px 20px" }}>
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={ABOUT_US}>
              <Nav.Link style={{ marginRight: "20px", padding: "15px 20px" }}>
                About Us
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={ASK_FOR_HELP}>
              <Nav.Link style={{ marginRight: "20px", padding: "15px 20px" }}>
                Ask For Help
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={DONATE}>
              <Nav.Link style={{ marginRight: "20px", padding: "15px 20px" }}>
                Donate
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <LinkContainer to={SIGN_UP}>
          <Button variant="primary" className="me-2">
            Sign Up
          </Button>
        </LinkContainer>
        <Button variant="success" onClick={handleLogout}>
          Admin Logout
        </Button>
      </Container>
    </Navbar>
  );
}