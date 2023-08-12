import {useContext, useEffect, useState} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import "./about.scss"
import { skills } from "./skills"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
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
import SpinnerComponent from "../Loading/Loading";


function About(){
    const {darkMode} = useContext(DarkModeContext)
    const [studies, setStudies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const studios = collection(db, "studies")

        getDocs(studios)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setStudies(nuevosProductos);
                setLoading(false)
            }
            )
            .catch(error => console.log(error))

    }, [])

    return(
        <>
        {loading && <SpinnerComponent />}
        {!loading && <Container className={darkMode ? "dark-mode container" : "white-mode container"}>
                        <Row>
                            <Col>
                                <h4 className="about-title">About me</h4>
                                <p className="text-justify about-text">I am a very ambitious front-end developer looking for a position with an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                                <p className="text-justify about-text">I`m highly confident, curious by nature, and perpetually working to improve my skills, one design problem at a time.</p>
                                <p className="text-justify about-text">I am currently part of the Javascript Tutors team at Coderhouse. Encouraging and facilitating communication between student and teacher. I make the corrections of the different challenges and students works. I listen to the needs of the student, motivating them by being a figure that advises, guides and encourages students to complete their studies successfully.</p>
                                <p className="text-justify about-text">I am looking for a way to make my code reusable and scalable, I worked on several projects independently designing and developing web applications. I have the ability to work in a team and be able to help its members when necessary. I have analytical skills and I consider myself an innovative and creative person who wants to grow.</p>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center flex-column">
                                <h3 className="about-title">Stack Tecnologies</h3>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {
                                        skills.map(skill => <Button variant={darkMode ? "outline-info" :"info"} key={skill.name} classname="about-btn">{skill.name}</Button>)
                                    }
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <h3 className="about-title">Studies</h3>
                            </Col>
                        </Row>
                            {
                                studies.sort(function(a, b){return b.orden - a.orden}).map((studie) =>(
                                    <Row key={studie.id} className="about-study mb-4 mt-4 border">
                                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-2">
                                            <img src={studie.img} alt={studie.name} className="about-img"/>
                                        </Col>
                                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-2">
                                            <h4 className="about-study_name">{studie.name}</h4>
                                            <span className="about-study_date">{studie.date}</span>
                                        </Col>
                                    </Row>
                                ))
                            }
                    </Container>}
        </>
    )
}

export default About