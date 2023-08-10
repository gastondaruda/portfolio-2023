import {useState, useEffect, useContext} from "react"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
import Card from "./Card";
import SpinnerComponent from "../Loading/Loading";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const misProductos = collection(db, "proyectos")

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProjects(nuevosProductos);
                console.log(projects)
                setLoading(false)}
            )
            .catch(error => console.log(error))

    }, [])
    return (
            <>
                {loading && <SpinnerComponent /> }
                {!loading && 
                    projects.sort(function(a, b){return b.order - a.order}).map((project) => <Card project={project} key={project.name} />)
                }
            </>
    )
}

export default Projects