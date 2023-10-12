import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import subtractImg from '../assets/img/Subtract.svg'
import chartlineImg from '../assets/img/Chart Linechart.png'
import groupImg1 from '../assets/img/Group.svg'
import groupImg2 from '../assets/img/Group 1.svg'



export const Graph = () =>{

    return (
        <section id='graph'>
            <Container  className='d-flex'>
                <Row>
                    <div className='content'>
                        <img alt='' src={subtractImg}></img>
                        <h1>$7M+ paid out to investors</h1>
                        <p>Next Invest has already paid out over $7M in cash returns to investors.
                             Earn potential cash
                             payments through unique revenue-share and debt financing investments.</p>
                    </div>
                    <div className='chart'>  
                        <div className='ecrit'>
                            <p>$7M</p>
                            <p>$6M</p>
                            <p>$5M</p>
                            <p>$4M</p>
                            <p>$3M</p>
                            <p>$2M</p>
                            <p>$1M</p>
                        </div>
                        <div className='courbe'>
                            <img alt='' src={chartlineImg}></img>
                            <div className='text'>
                                <p>2015</p>
                                <p>2016</p>
                                <p>2017</p>
                                <p>2018</p>
                                <p>2019</p>
                                <p>2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='image-coin'>
                        <img alt='' src={groupImg1} className='image1'></img>
                        <img alt='' src={groupImg2} className='image2'></img>
                    </div>
                </Row>
            </Container>
        </section>
    )
}