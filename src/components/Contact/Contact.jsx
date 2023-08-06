import {useEffect, useState, useRef, useContext} from "react"
import {Container, Row, Col} from 'react-bootstrap';
import emailjs from "@emailjs/browser"
import "./contact.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Swal from 'sweetalert2'
import SpinnerComponent from "../Loading/Loading";
import { DarkModeContext } from "../../context/DarkMode";


function Contact(){
    const {darkMode} = useContext(DarkModeContext)

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mbyrn5n', 'template_umjn2f4', form.current, 'Bpu0f9f8kAEudOQY3')
        .then((result) => {
            console.log(result.text);
            swalSuccessAlert()
        }, (error) => {
            console.log(error.text);
            swalErrorAlert()
        });
        e.target.reset()
    }

const swalErrorAlert = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

const swalSuccessAlert = () => {
    Swal.fire({
        title: 'Thank You',
        text: 'Mail sent',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
}

const position = [-34.66599597553595, -58.5315886980697]

    
    return(
        <Container className={darkMode ? "dark-mode container" : "white-mode container"}>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h3>Hired me...</h3>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    mapa
                </Col>
            </Row>
        </Container>
        
    )
}

export default Contact


/*
<div className="d-flex flex-column contactSubContainer" >
                    <p>I am interested in jobs opportunities as a FrontEnd Developer.</p>
                    <div className="d-flex align-items-stretch justify-content-around">
                        <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <ul>
                                        <li className="half">
                                        <input placeholder="Name" type="text" name="name" required />
                                        </li>
                                        <li className="half">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                        </li>
                                        <li>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            name="subject"
                                            required
                                        />
                                        </li>
                                        <li>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required
                                        ></textarea>
                                        </li>
                                        <li>
                                        <input type="submit" className="flat-button" value="SEND"/>
                                        </li>
                                    </ul>
                                </form>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="mapContainer">
                                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                            <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                                <Marker position={position}>
                                                    <Popup>
                                                        A pretty CSS3 popup. <br /> Easily customizable.
                                                    </Popup>
                                            </Marker>
                                        </MapContainer>
                                    
                                </div>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
*/