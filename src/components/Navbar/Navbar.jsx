import Container from 'react-bootstrap/Container';
import { NavLink} from 'react-router-dom'
import {Offcanvas, Navbar, Nav} from 'react-bootstrap';
import {FaReact} from  "react-icons/fa";
import { DarkModeContext } from '../../context/DarkMode';
import "./navbar.scss"
import { useContext } from 'react';
import Switch from '@mui/material/Switch';

function NavbarComponent() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    const handleClick = () => {
        toggleDarkMode()
    }

    return (
    <>
        {['lg'].map((expand) => (
        <Navbar collapseOnSelect key={expand} expand={expand} className={darkMode ? "navbar navbar-bg-dark d-flex align-items-center position-fixed w-100" : "navbar navbar-bg-white d-flex align-items-center position-fixed w-100"}>
            <Container fluid className={darkMode ? "dark-mode" : "white-mode"}>
                {/*<Navbar.Brand href="#" className="d-flex align-items-center navbar-title">
                    <FaReact className="color-react"/>Gastón Da Ruda - Frontend Developer
                </Navbar.Brand>*/}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                bg="dark"
                variant="dark"
                >
                <Offcanvas.Header closeButton className='color-primary'>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="color-primary navbar-title">
                    Gastón Da Ruda - Frontend Developer
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={`justify-content-evenly align-items-center flex-grow-1 pe-3 nav-item`}>
                            <NavLink to="/" className={darkMode ? "dark-mode" : "white-mode"}>
                                Home
                            </NavLink>
                            <NavLink to="about" className={darkMode ? "dark-mode" : "white-mode"}>
                                About
                            </NavLink>
                            <NavLink to="/portfolio" className={darkMode ? "dark-mode" : "white-mode"}>
                                portfolio
                            </NavLink>
                            <NavLink to="contact" className={darkMode ? "dark-mode" : "white-mode"}>
                                Contact
                            </NavLink>
                            <Switch onClick={handleClick}/>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    ))}
    </>
    );
}

export default NavbarComponent;

