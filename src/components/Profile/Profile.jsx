import {useState, useEffect, useContext} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import resume from '../../assets/FrontendDeveloperCv.pdf'
import {BsGithub, BsLinkedin} from "react-icons/bs";
import "./profile.scss"
import profile from '../../assets/profile.jpeg'
import { DarkModeContext } from "../../context/DarkMode";

function Profile(){
    const {darkMode} = useContext(DarkModeContext)

    return (
        <Container fluid className={darkMode ? "dark-mode container" : "white-mode container"}>
        <Row className="d-flex justify-content-around align-items-center">
            <Col className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="profile-title">Gastón Da Ruda</h2>
                <h5 className="profile-subtitle">Frontend Developer Jr</h5>
                <p className="profile-text">I started by my own, I studied in Coderhouse, do some freelance projects with a team of developers and designers and now I`m part of the staff of Javascript and React Js tutors at Coderhouse since 2022.</p>
                <div className="d-flex align-items-center gap-3 mt-2 mb-3 justify-content-between">
                    <a href="https://github.com/gastondaruda" target="_blank" rel="noreferrer">
                        <BsGithub className="profile-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gastondaruda/" target="_blank" rel="noreferrer">
                        <BsLinkedin className="profile-icon"/>
                    </a>
                </div>
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