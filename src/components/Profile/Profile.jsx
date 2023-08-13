import {useContext} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import resume from '../../assets/FrontendDeveloperCv.pdf'
import {BsGithub, BsLinkedin} from "react-icons/bs";
import "./profile.scss"
import profile from '../../assets/profile.jpeg'
import { DarkModeContext } from "../../context/DarkMode";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion"

function Profile(){
    const {darkMode} = useContext(DarkModeContext)

    return (            
        <Container fluid className={darkMode ? "dark-mode container" : "white-mode container"}>
        <Row className="d-flex justify-content-around align-items-center">
            <Col className="d-flex justify-content-center align-items-center flex-column">
            <motion.div animate={{ x: 0 }} initial={{x: -500}} transition={{duration:1}}>
                <h1 className="profile-title">Hi, my name is</h1>
            </motion.div>
            <motion.div animate={{ x: 0}} initial={{x: -700}} transition={{delay: 1, duration: 1}}>
                <h2 className="profile-title">Gastón Da Ruda</h2>
            </motion.div>
            <motion.div animate={{x:0}} initial={{x:-500}} transition={{delay:1.5, duration: 1}}>
                <h5 className="profile-subtitle">Frontend Developer Jr</h5>
            </motion.div>
            <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:1.8, duration: 1}}>
                <p className="profile-text">I started by my own, I studied in Coderhouse, do some freelance projects with a team of developers and designers and now I`m part of the staff of Javascript and React Js tutors at Coderhouse since 2022.</p>
            </motion.div>
                <div className="d-flex align-items-center gap-3 mt-2 mb-3 justify-content-around">
                    <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:2, duration: 1}}>
                        <a href="https://github.com/gastondaruda" target="_blank" rel="noreferrer">
                            <BsGithub className="profile-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gastondaruda/" target="_blank" rel="noreferrer">
                            <BsLinkedin className="profile-icon"/>
                        </a>
                    </motion.div>
                </div>
                <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:2.3, duration: 1}}>
                    <Button href={resume}variant={darkMode ? "outline-info" :"info"} className="mb-3">Resume</Button>{' '}
                </motion.div>
            </Col>
            
            <Col className="d-flex justify-content-center align-items-center flex-column">
                <motion.div initial={{x:600}} animate={{x:0}} transition={{duration: 1, delay:2}}>
                    <LazyLoadImage src={profile}
                        alt="Image Alt"
                        className="img"
                    />
                </motion.div>
            </Col>
        </Row>
    </Container>
    )
}

export default Profile