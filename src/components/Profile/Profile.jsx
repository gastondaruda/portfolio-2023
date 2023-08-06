import {useState, useEffect, useContext} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import resume from '../../assets/FrontendDeveloperCv.pdf'
import "./profile.scss"
import profile from '../../assets/profile.jpeg'
import { DarkModeContext } from "../../context/DarkMode";

function Profile(){
    const {darkMode} = useContext(DarkModeContext)

    return (
        <Container fluid className={darkMode ? "dark-mode container" : "white-mode container"}>
        <Row className="d-flex justify-content-around align-items-center">
            <Col className="d-flex justify-content-center align-items-center flex-column">
                <h2>Gastón Da Ruda</h2>
                <h5>Frontend Developer Jr</h5>
                <Button href={resume}variant={darkMode ? "outline-info" :"info"}>Resume</Button>{' '}
            </Col>
            <Col className="d-flex justify-content-center align-items-center flex-column">
                <img className="img" src={profile} alt="Frontend Developer" />
            </Col>
        </Row>
    </Container>
    )
}

export default Profile