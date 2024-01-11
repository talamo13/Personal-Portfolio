import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function NavMain() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        style={{ height: "75px" }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to={"/"}
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            TAC
          </Navbar.Brand>
          <Nav className="mr-auto ml-auto">
            <Nav.Link
              as={Link}
              to={"/about"}
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/projects"}
              style={{
                fontSize: "28px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/contact"}
              style={{
                fontSize: "28px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/talamo13" target="_blank">
              <Image
                src="../img/github.png"
                alt="Github"
                className="nav-icon"
                style={{ width: "45px", marginRight: "20px" }}
              />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/tyler-alamo-covert-56810a260/"
              target="_blank"
            >
              <Image
                src="../img/linkedin.png"
                alt="LinkedIn"
                className="nav-icon"
                style={{ width: "50px", marginTop: "3px" }}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMain;
