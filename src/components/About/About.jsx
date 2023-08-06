import {useContext, useEffect, useState} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import "./about.scss"
import { skills } from "./skills"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiMongodb } from "react-icons/si";
import {
    faSass,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { DarkModeContext } from "../../context/DarkMode"


function About(){
    const {darkMode} = useContext(DarkModeContext)

    return(
        <>
        <Container className={darkMode ? "dark-mode container" : "white-mode container"}>
            <Row>
                <Col>
                    <h4>About me</h4>
                    <p className="text-justify">I am a very ambitious front-end developer looking for a position with an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                    <p className="text-justify">I`m highly confident, curious by nature, and perpetually working to improve my skills, one design problem at a time.</p>
                    <p className="text-justify">I am currently part of the Javascript Tutors team at Coderhouse. Encouraging and facilitating communication between student and teacher. I make the corrections of the different challenges and students works. I listen to the needs of the student, motivating them by being a figure that advises, guides and encourages students to complete their studies successfully.</p>
                    <p className="text-justify">I am looking for a way to make my code reusable and scalable, I worked on several projects independently designing and developing web applications. I have the ability to work in a team and be able to help its members when necessary. I have analytical skills and I consider myself an innovative and creative person who wants to grow.</p>
                </Col>
                <Col className="d-flex justify-content-center align-items-center flex-column">
                    <h3>Stack Tecnologies</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {
                            skills.map(skill => <Button variant={darkMode ? "outline-info" :"info"} key={skill.name}>{skill.name}</Button>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About