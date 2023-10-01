import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Price from './Price';
import Name from './Name';
import Description from './Description';
import Image from './Image';

function Carte() {
  return (
    <Card style={{ width: '18rem' }}>
      <Image></Image>
      <Card.Body>
        <Card.Title><Name></Name></Card.Title>
        <Card.Text>
          <Description></Description>
          
        </Card.Text>
        <Button variant="primary"><Price></Price></Button>
      </Card.Body>
    </Card>
    
  );
}

export default Carte;