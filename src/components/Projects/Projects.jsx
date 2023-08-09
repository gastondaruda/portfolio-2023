import {useState, useEffect, useContext} from "react"
import {Container,Row, Col, Button} from 'react-bootstrap/'
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
import Card from "./Card";
import SpinnerComponent from "../Loading/Loading";
import { DarkModeContext } from "../../context/DarkMode";

function Projects() {
    const [pro, setProd] = useState([]);
    const [loading, setLoading] = useState(true)
    const {darkMode} = useContext(DarkModeContext)

    useEffect(() => {
        const misProductos = collection(db, "proyectos")

        getDocs(misProductos)
            .then(res => {
                setLoading(true)
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProd(nuevosProductos);
                setLoading(false)}
            )
            .catch(error => console.log(error))

    }, [])
    return (
        <Container className={darkMode ? "dark-mode container" : "white-mode container"}>
            <Row >
                <Col >
                    {loading && <SpinnerComponent /> }
                    {!loading && 
                        pro.map((pro,idx) => <h3>{pro.name}</h3>)
                    }
                </Col>
            </Row>
            
        </Container>
    )
}

export default Projects