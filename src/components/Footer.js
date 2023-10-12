import { Button, Container, Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';




export const Footer = () =>{
     return(
        <section id='footer'>
            <Container>
                <Row>
                    <div className="container">
                        <div className="text">
                            <h1>NEXT INVEST</h1>
                            <p>Copyright © 2023. Roll Haurly</p>
                        </div>

                        <div className="text">   
                            <h1>Services</h1>
                            <p>Email Marketing</p>
                            <p>Campaigns</p>
                            <p>Branding</p>
                            <p>Offline</p>
                        </div>

                        <div className="text">
                            <h1>Offline</h1>
                            <p>Our Story</p>
                            <p>Benefits</p>
                            <p>Team</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div className="bas">
                        <div className="recherche">
                            <h3>Subscribe to our new</h3>
                                <Form.Group as={Col} controlId="formGridEmail" class='d-flex'>
                                    <Form.Control type="email" placeholder="Enter email" /><Button><i class="fa-solid fa-chevron-right"></i></Button>
                                </Form.Group>
                        </div>
                        <div className="icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
     )
}