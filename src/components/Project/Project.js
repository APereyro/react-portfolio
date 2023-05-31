import Card from 'react-bootstrap/Card';
import React from 'react';
import { data } from '../../assets/portfolioData/data';

function Project() {
  console.log(data)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((item) => (
        <div key={item.id} style={{ margin: '10px' }}>
          <Card style={{ width: '18rem', backgroundColor: "#000000ff" }}>
            <Card.Img variant="top" src={item.Image} />
            <Card.Body>
              <Card.Title><a href={item.Github}>{item.Title}</a></Card.Title>
              <Card.Text>{item.Text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Project;
