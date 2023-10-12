import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



export const Header = () =>{
    return (
        <Container fluid id='header'>
                <div className='content'>
                    <h1 className='titre'>Meaningful investments in Main Street businesses</h1>
                    <p className='text'>Browse vetted investment offerings in communities all over the US.</p>
                    <Button className="boutton-1">GET STARTED</Button>
                </div>
                <div className='mask'></div>
            

        </Container>
    )
}