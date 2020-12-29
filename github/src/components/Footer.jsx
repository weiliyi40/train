import '@babel/polyfill';
import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const { Container } = ReactBootstrap;

const Footer = (props) => (
    <div>
      <Container>
        {props.children}
      </Container>
    </div>
  );

  export default Footer;