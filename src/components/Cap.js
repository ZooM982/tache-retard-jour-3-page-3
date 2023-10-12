import { Button, Container, Row } from "react-bootstrap"
import capImg1 from '../assets/img/capimg.png'
import capImg2 from '../assets/img/mask.png'




export const Cap = () =>{

    return(
        <section id="cap" >
            <Container fluid className="d-flex">
                <Row>
                    <div className='content '>
                        <h1>Looking to raise capital for your growing business?</h1>
                        <p>Whether expanding or opening a brand-new concept, we make
                             it easy to raise money from thousands of local investors.</p>
                        <Button>APPLY ONLINE</Button>
                    </div>
                    <div className="image-cap d-flex">
                        <img src={capImg1} alt="" className='image1'></img>
                        <img src={capImg2} alt="" className='image2'></img>
                    </div>
                </Row>
            </Container>
        </section>
    )
}