import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import  CardImg1  from '../assets/img/card1.jpeg';
import  CardImg2  from '../assets/img/card2.jpeg';
import  CardImg3  from '../assets/img/card3.jpeg';
import  CardImg4  from '../assets/img/card4.jpeg';
import  CardImg5  from '../assets/img/card5.jpeg';
import  CardImg6  from '../assets/img/card6.jpeg';




export const Main = () =>{
    return (

        <section id='main'>
            <Container >
                <Row>
                    <h1>Offerings open for investment</h1>
                    <h3>Explore pre-vetted investment opportunities
                        available in a growing number of industry categories.</h3>

                    <Card className='card1'>
                    <Card.Img variant="top" src={CardImg1} />
                    
                    <Card.Body>
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>

                    <Card className='card2'>
                    <Card.Img variant="top" src={CardImg2} />
                    
                    <Card.Body >
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>

                    <Card className='card3'>
                    <Card.Img variant="top" src={CardImg6} />
                    
                    <Card.Body >
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>

                    <Card className='card4'>
                    <Card.Img variant="top" src={CardImg4} />
                    
                    <Card.Body >
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>

                    <Card className='card5'>
                    <Card.Img variant="top" src={CardImg5} />
                    
                    <Card.Body >
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>

                    <Card className='card6'>
                    <Card.Img variant="top" src={CardImg3} />
                    
                    <Card.Body >
                        <Card.Title>Oxalis</Card.Title>
                        <p className='text-muted'>Brooklyn, NY</p>
                        <Card.Text>A recognized leader in language immersion & early education,
                            opening second school.
                        </Card.Text>
                        <Card.Text>
                            <ProgressBar variant='primary' now={60} className='progressbar' />
                            <span>$574,920</span> raised of $1,000,000
                        </Card.Text>
                        <Card.Text className='hiden'>
                            <p>Security Type<span>Revenue Sharing Note</span></p>
                            <p>Investment Multiple<span>1.4x</span></p>
                            <p>Maturity<span>48 Months</span></p>
                            <p>Min. Investment<span>$100</span></p>
                        </Card.Text>
                        <Button className='button-rose'>VIEW</Button>
                    </Card.Body>
                    </Card>
                    <Button className='central-button'>VIEW ALL PROJECT</Button>
                </Row>
            </Container>
        </section>
    )
}



  

