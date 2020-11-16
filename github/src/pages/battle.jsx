import React from 'react';
import {
  Container, InputGroup, FormControl, Row, Col, Button,
} from 'react-bootstrap';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';

export default class Battle extends React.Component {
  render() {
    return (
      <Container className="text-center">
        <br /> <h3>Instructions</h3> <br />
        <Row>
          <Col>
            <p>Enter two Github users</p>
            <img src={pic1} style={{ boxShadow: '0 0 5px 3px #00000042' }} alt=" " />
          </Col>
          <Col>
            <p>Battle</p>
            <img src={pic2} style={{ boxShadow: '0 0 5px 3px #00000042' }} alt=" " />
          </Col>
          <Col>
            <p>See the winner</p>
            <img src={pic3} style={{ boxShadow: '0 0 5px 3px #00000042' }} alt=" " />
          </Col>
        </Row><br />
        <h3>Players</h3> <br />
        <Row>
          <Col>
            <p>Player One</p>
            <InputGroup>
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
            <InputGroup>
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
    );
  }
}
