import React from 'react'
import Start from './pages/Start'

function App() {

  const api = fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(json=>console.log(json));

  console.log(api)

  return (
    <>
      <Start/>
    </>
  )
}

export default App
