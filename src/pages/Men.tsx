const api = fetch('https://fakestoreapi.com/products/')
.then(res=>res.json())
.then(json=>console.log(json));

console.log(api)
const Men = () => {
  return (
    <div>Men</div>
  )
}

export default Men