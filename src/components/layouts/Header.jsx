import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);

  // Scroll navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  // Function to scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("about")}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("menu")}>
                Our Menu
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("blog")}>Blog</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
