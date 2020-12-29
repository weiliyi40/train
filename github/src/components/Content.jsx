import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const { Container } = ReactBootstrap;


const Content = (props) => (
    <div>
      <Container>
        {props.children}
      </Container>
    </div>
  );

  export default Content;
  