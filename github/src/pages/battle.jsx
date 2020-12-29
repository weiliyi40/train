import React from 'react';
import {
  Container, InputGroup, FormControl, Row, Col, Button,
} from 'react-bootstrap';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '', input2: '', input1Show: true,input2Show: true,battleShow: false
    };
  }

  input1OnChagne = (e) => {
    this.setState({ input1: e.target.value })
  }
  input2OnChagne = (a) => {
    this.setState({ input2: a.target.value })
  }
  input1ShowChange = () => {
    const { input1Show, input2Show } = this.state
    if(!input1Show){
      this.setState({ input1: '' })
    }
    if(input1Show && !input2Show){
      this.setState({ battleShow: true})
      }else {
        this.setState({ battleShow: false})
      }

    this.setState({ input1Show: !input1Show })
  }
  input2ShowChange = () => {
    const { input2Show, input1Show } = this.state
    if(!input2Show){
      this.setState({ input2: '' })
    }
    if(input2Show&&!input1Show){
      this.setState({ battleShow: true})
    }else{
      this.setState({ battleShow: false})
    }
    this.setState({ input2Show: !input2Show })
  }
  
  routeChange = () => {
    const { input1, input2 } = this.state
    this.props.history.push({pathname:`/battle/result`,search:`playerOne=${input1}&playerTwo=${input2}`,state:input1})
  }
  
  render() {
    const { input1, input2, input1Show, input2Show, battleShow} = this.state

    return (
      <Container className="text-center">
        <br /> <h3>GAME</h3> <br />
        <Row>
          <Col>
            <p>Enter two Github users</p>
            {<img src={pic1} style={{ boxShadow: '0 0 5px 3px #00000042', width: '200px', height: '200px' }} alt=" " />}
          </Col>
          <Col>
            <p>Battle</p>
            {<img src={pic2} style={{ boxShadow: '0 0 5px 3px #00000042', width: '200px', height: '200px' }} alt=" " />}
          </Col>
          <Col>
            <p>See the winner</p>
            {<img src={pic3} style={{ boxShadow: '0 0 5px 3px #00000042', width: '200px', height: '200px' }} alt=" " />}
          </Col>
        </Row><br />
        <h3>Players</h3> <br />
        <Row>
          <Col>
            <p>Player One</p>
            {input1Show ? <InputGroup
              onChange={(e) => { this.input1OnChagne(e) }}>
              <FormControl
                placeholder="github username"
                aria-label="github username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" className={input1 === '' ? 'disabled' : ''} 
                onClick={() => { input1 === '' ? '' : this.input1ShowChange() }}>SUBMIT</Button>
              </InputGroup.Append>
            </InputGroup> : 
            <div className="inputShow"><img src={`https://github.com/${input1}.png?size=200`} style={{with:'50px',height:'50px'}}></img> 
            <a href={`https://github.com/${input1}`}>{input1}</a>
            <Button  onClick={() => { this.input1ShowChange() }}>×</Button>
            </div>}
          </Col>
          <Col>
            <p>Player Two</p>
            {input2Show ? <InputGroup
              onChange={(a) => { this.input2OnChagne(a) }}>
              <FormControl
                placeholder="github username"
                aria-label="github username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" className={input2 === '' ? 'disabled' : ''}
                onClick={() => { input2 === '' ? '' : this.input2ShowChange() }}>SUBMIT</Button>
              </InputGroup.Append>
            </InputGroup>:
            <div className="inputShow"><img src={`https://github.com/${input2}.png?size=200`} style={{with:'50px',height:'50px'}}></img> 
            <a href={`https://github.com/${input2}`}>{input2}</a>
            <Button  onClick={() => { this.input2ShowChange() }} >×</Button>
            </div>}
          </Col>
        </Row>
         {battleShow ? <Button className="Battle" onClick={()=>{this.routeChange()}}>Battle</Button> : ' ' }
      </Container>
    );
  }
}
