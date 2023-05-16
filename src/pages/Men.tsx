import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Men = () => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    showApi()
  }, [])
  
  const showApi =async () => {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json();
    setInfo(data)
    console.log(data)
  }
  
  const itemsM = info.map((item: {title: string, description: string, image: string, price: number, category: string}, i: number)=>
  <Card style={{ width: '18rem', margin: '3rem' }} key={i}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Badge bg="light" text="dark">{item.price}</Badge>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );

  return (
    <section className='Men'>
      {itemsM}
    </section>
  )
}

export default Men