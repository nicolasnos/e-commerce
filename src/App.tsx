import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const api = fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(json=>console.log(json));

  console.log(api)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
