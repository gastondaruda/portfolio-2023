import {useContext} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import resume from '../../assets/FrontendDeveloperCv.pdf'
import {BsGithub, BsLinkedin} from "react-icons/bs";
import "./profile.scss"
import profile from '../../assets/profile.png'
import { DarkModeContext } from "../../context/DarkMode";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

function Profile(){
    const {darkMode} = useContext(DarkModeContext)

    return (            
        <Container fluid className={darkMode ? "dark-mode container d-flex justify-content-center align-items-center" : "white-mode container d-flex justify-content-center align-items-center"}>
        <Row className="d-flex justify-content-around align-items-center">
            <Col className="d-flex justify-content-center align-items-start flex-column">
            <motion.div animate={{ x: 0 }} initial={{x: -500}} transition={{duration:1}}>
                <h1 className="profile-t color-secondary">Hello!</h1>
            </motion.div>
            <motion.div animate={{ x: 0}} initial={{x: -700}} transition={{delay: .5, duration: 1}}>
                <h2 className="profile-title">My name is Gastón Da Ruda</h2>
            </motion.div>
            <motion.div animate={{x:0}} initial={{x:-500}} transition={{delay:1, duration: 1}}>
                <h5 className="profile-subtitle">Frontend Developer Jr</h5>
            </motion.div>
            <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:1.3, duration: 1}}>
                <Link to="/contact">
                    <Button variant={"info"} className="mb-3 btn-contact">Contact Me</Button>
                </Link>
            </motion.div>
                <div className="d-flex align-items-center gap-3 mt-2 mb-3 justify-content-around">
                    <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:1.5, duration: 1}} >
                        <a href="https://github.com/gastondaruda" target="_blank" rel="noreferrer" >
                            <BsGithub className="profile-icon"/>
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/gastondaruda/" target="_blank" rel="noreferrer">
                            <BsLinkedin className="profile-icon"/>
                            <span>Linkedin</span>
                        </a>
                    </motion.div>
                </div>
                <motion.div animate={{x:0}} initial={{x:-700}} transition={{delay:1.8, duration: 1}}>
                    <Button href={resume}variant={darkMode ? "outline-info" :"info"} className="mb-3">Resume</Button>{' '}
                </motion.div>
            </Col>
            
            <Col className="d-flex justify-content-center align-items-center flex-column">
                <motion.div initial={{x:700}} animate={{x:0}} transition={{duration: .5, delay: 2}}>
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