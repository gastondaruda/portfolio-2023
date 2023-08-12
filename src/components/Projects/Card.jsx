import {Button, Container, Row, Col} from 'react-bootstrap/'
import './card.scss'
import { DarkModeContext } from '../../context/DarkMode'
import { useContext } from 'react'


export default function Card({project}) {
    const {darkMode} = useContext(DarkModeContext)

    const {name, img,git_url, gitpages_url, tools, description} = project
    return (
        <Container fluid className={darkMode ? "dark-mode container" : "white-mode container"}>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <a href={gitpages_url} target="_blank" rel="noreferrer">
                        <img src={img} className="project-image"/>
                    </a>
                </Col>
                <Col className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-description">{description}</p>
                    <div>
                        <Button variant={darkMode ? "outline-info" :"info"} className="mt-3 mb-2 btn">
                            <a href={gitpages_url} target="_blank" rel="noreferrer">Project</a>
                        </Button>
                        <Button variant={darkMode ? "outline-info" :"info"} className="mt-3 mb-2 btn">
                            <a href={git_url} target="_blank" rel="noreferrer">Repository</a>
                        </Button>
                    </div>
                    <div className='d-flex flex-wrap gap-2 mt-3'>
                        {
                            tools?.map((tool) => <Button variant={darkMode ? "outline-warning" :"warning"}>{tool}</Button>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
