import '@babel/polyfill';
import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// import Ima from "./images/image.png"

const { Container } = ReactBootstrap;
const { Nav } = ReactBootstrap;


const Header = (props) => {
    const menuItems = [
      'All',
      'Javascript',
      'Ruby',
      'Java',
      'Css',
      'Python',
    ];
  
    return (
      <div>
        <Container>
          <Nav
            className="justify-content-center"
            style={{ border: 'soild black' }}
            variant="tabs"
            defaultActiveKey="All"
            onSelect={(selectedKey) => props.onClick(selectedKey)}
          >
            {menuItems.map((item, key) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={item}>{item}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </div>
    );
  };

export default Header;