import {useContext, useEffect, useState} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import "./about.scss"
import { skills, skillsIcons } from "./skills"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DarkModeContext } from "../../context/DarkMode"
import SpinnerComponent from "../Loading/Loading";
import { motion } from "framer-motion"


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
                        <Row className="about-container">
                            <Col className="mt-4 d-flex justify-content-center align-items-center flex-column" xs={6}>
                                <motion.div animate={{ x: 0 }} initial={{x: -700}} transition={{duration:.5}}>
                                    <h4 className="about-title text-color-secondary">About me</h4>
                                </motion.div>
                                <motion.div animate={{ x: 0 }} initial={{x: -700}} transition={{duration:.5, delay:1}}>
                                    <p className="profile-text">I started by my own, I studied in Coderhouse, do some freelance projects with a team of developers and designers and now I`m part of the staff of Javascript and React Js tutors at Coderhouse since 2022.</p>
                                </motion.div>
                            </Col>
                            <Col xs={6} className="d-flex justify-content-center align-items-center flex-column mt-4">
                                <motion.div animate={{ x: 0 }} initial={{x: 700}} transition={{duration:1}}>
                                    <h3 className="about-title">Stack Tecnologies</h3>
                                </motion.div>
                                <motion.div animate={{ x: 0 }} initial={{x: 700}} transition={{duration:1, delay:.5}}>
                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                        {
                                            skills.map(skill => <Button variant={darkMode ? "outline-info" :"info"} key={skill.name} classname="about-btn">{skill.name}</Button>)
                                        }
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                            <motion.div animate={{ x: 0 }} initial={{x: -700}} transition={{duration:1}}>
                                <h3 className="about-title text-color-secondary">Studies</h3>
                            </motion.div>
                            </Col>
                        </Row>
                            {
                                studies.sort(function(a, b){return b.orden - a.orden}).map((studie) =>(
                                    <Row key={studie.id} className="about-study mb-4 mt-4 border">
                                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-2">
                                        <motion.div animate={{ x: 0 }} initial={{x: 700}} transition={{duration:1,delay:1}}>
                                            <img src={studie.img} alt={studie.name} className="about-img"/>
                                        </motion.div>
                                        </Col>
                                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-2">
                                        <motion.div animate={{ x: 0 }} initial={{x: 700}} transition={{duration:1, delay:1}}>
                                            <h4 className="about-study_name">{studie.name}</h4>
                                            <span className="about-study_date">{studie.date}</span>
                                        </motion.div>
                                        </Col>
                                    </Row>
                                ))
                            }
                            
                    </Container>}
        </>
    )
}

export default About