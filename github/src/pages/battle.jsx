import React from 'react';
import ReactDOM from 'react-dom'; 
import { Container,InputGroup,FormControl,Row,Col,Button} from 'react-bootstrap';
 

export default class Battle extends React.Component {
    
    render(){
       
        return  (
           <Container className="text-center">
               <br/> <h3>Instructions</h3> <br/>
               <Row>
                   <Col>
                        <p>Enter two Github users</p>
                        <img src="../../imgs/pic2.png" style={{'box-shadow': '0 0 5px 3px #00000042'}} />
                   </Col>
                   <Col>
                        <p>Battle</p>
                        <img src="../../imgs/pic3.png"  style={{'box-shadow': '0 0 5px 3px #00000042'}} />
                   </Col>
                   <Col>
                        <p>See the winner</p>
                        <img src="../../imgs/pic4.png"  style={{'box-shadow': '0 0 5px 3px #00000042'}} />
                   </Col>
               </Row><br/> 
               <h3>Players</h3> <br/>
                <Row>
                    <Col>
                        <p>Player One</p>
                        <InputGroup >
                            <FormControl
                                placeholder="github username"
                                aria-label="github username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">SUBMIT</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col>
                        <p>Player Two</p>
                        <InputGroup >
                            <FormControl
                                placeholder="github username"
                                aria-label="github username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">SUBMIT</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col> 
                </Row>
           </Container>
        ) 
    }
}