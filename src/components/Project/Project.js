import Card from 'react-bootstrap/Card';
import React from 'react';
import { data } from '../../assets/portfolioData/data';

function Project() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((item, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.Image} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>{item.Text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Project;
