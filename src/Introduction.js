import React from 'react';
import './Introduction.css';
import {Card, Button, Container} from 'react-bootstrap';
import deadpool from './images/deadpool.jpg'
import batman from './images/batman.jpg'

function Introduction(){    
    
    return(
        <>
        <h3 className="title red">Movie Theater</h3>
        <Container style={{
            backgroundColor: '#f1f1f1',
            display:'flex',
            flexDirection: 'row',
            width: 800,
            justifyContent: 'space-around',
            marginTop: '50px',
            padding: '20px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}>

            <Card style={{
            width: '100%',
            margin: '20px',
            border: 'none'
            }}>
                <Card.Img variant="top" src={deadpool} />
                <Card.Body>
                    <Card.Title>Deadpool 4</Card.Title>
                    <Card.Text>
                    Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, 
                    to cure him of cancer and give him healing powers..
                    </Card.Text>
                    <Button variant="primary">Watch</Button>
                </Card.Body>
            </Card>

            <Card style={{
            width: '100%',
            margin: '20px',
            border: 'none'
            }}>
                <Card.Img variant="top" src={batman} />
                <Card.Body>
                    <Card.Title>Batman Revenge</Card.Title>
                    <Card.Text>
                    Batman is called to intervene when the mayor of Gotham 
                    City is murdered. Soon, his investigation leads him to uncover...
                    </Card.Text>
                    <Button variant="primary">Watch</Button>
                </Card.Body>
            </Card>

        </Container>
        <Container style={{
            backgroundColor: '#f1f1f1',
            display:'flex',
            flexDirection: 'row',
            width: 800,
            justifyContent: 'space-around',
            marginTop: '50px',
            marginBottom: '50px',
            padding: '40px',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            }}>

            <video width="100%" height="auto" controls>
                <source src="./myVideo.mp4" type="video/mp4" />
            </video>

        </Container>

        </>
    );
}

export default Introduction;

{/* <div style={{border: "solid 1px black", maxWidth: "100vw"}}> */}
                // <h1 className="title red">Dmitry</h1>
                // <img src="./images/western.jpg" />
                // <img src="./images/western.jpg" />
                // {/* <img src="./blockbuster.png" /> */}
            // </div>
            // <video width="320" height="240" controls>
                // <source src="./myVideo.mp4" type="video/mp4" />
            // </video>
