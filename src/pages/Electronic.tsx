import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import '../styles/Electronic.css'

const Electronic = () => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    showApi()
  }, [])
  
  const showApi =async () => {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json();
    setInfo(data)
  }
  
  const filteredM = info.filter((item: any) => item.category.includes("electronic") || item.category.includes("jewelery"));
  
  const itemsM = filteredM.map((item: {title: string, description: string, image: string, price: number, category: string}, i: number)=>
  <Card style={{ width: '18rem', margin: '1.5rem' }} key={i}>
      <Card.Img variant="top" src={item.image} style={{width: "15rem", height: "13rem", objectFit: "contain"}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Badge bg="light" text="dark">{item.price}</Badge>
        <Button variant="primary"><AiOutlineShoppingCart/></Button>
      </Card.Body>
    </Card>
  );
  return (
    <section className='Electronic'>
      {itemsM}
    </section>
  )
}

export default Electronic