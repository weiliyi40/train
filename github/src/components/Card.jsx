import '@babel/polyfill';
import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const { ListGroup } = ReactBootstrap;
const { Card } = ReactBootstrap;
const { ListGroupItem } = ReactBootstrap;

const RepoCard = (props) => (
    <Card border="primary" style={{ marginTop: '8px', marginBottom: '8px' }}>
      <Card.Header className="text-center bg-white font-weight-bold">{props.no}</Card.Header>
      <Card.Body>
        <Card.Img src={props.img} className="lazyload" style={{ width: '170px' ,height: '170px'}} />
        <Card.Title className="text-center"><Card.Link href={props.url} className="text-danger" target="_blank">{props.title}</Card.Link></Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="bg-light">
            <Card.Text><i className="fa fa-user fa-lg fa-fw" style={{ color: 'orange' }} />{props.author}</Card.Text>
          </ListGroupItem>
          <ListGroupItem className="bg-light">
            <Card.Text><i className="fa fa-star fa-lg fa-fw" style={{ color: 'yellow' }} />{props.stars}</Card.Text>
          </ListGroupItem>
          <ListGroupItem className="bg-light">
            <Card.Text><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'lightblue' }} />{props.forks}</Card.Text>
          </ListGroupItem>
          <ListGroupItem className="bg-light">
            <Card.Text><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'purple' }} />{props.issues}</Card.Text>
          </ListGroupItem>
        </ListGroup>
  
      </Card.Body>
    </Card>
  );

  export default RepoCard;