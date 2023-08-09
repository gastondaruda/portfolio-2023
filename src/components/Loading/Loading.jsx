import {Container, Row, Col, Spinner} from 'react-bootstrap/';
import "./loading.scss"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkMode';

function SpinnerComponent(){
    const {darkMode} = useContext(DarkModeContext)
    return(
        <div className={darkMode ? "dark-mode spinner" : "white-mode spinner"}>
            <Spinner animation="border" variant="primary" className="spinner-spinner"/>
        </div>
    )
}

export default SpinnerComponent;