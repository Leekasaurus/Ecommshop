import React, {useEffect, useState} from 'react'

function Cart() {
  const [products,setProducts]= useState([]);
useEffect(()=> {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(error=>console.log(error))
})

  return (
    <div>cart</div>
  )
}

export default Cart;